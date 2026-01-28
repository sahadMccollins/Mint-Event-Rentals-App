// import React, { createContext, useContext, useState, useEffect, useRef } from "react";
// import AsyncStorage from "@react-native-async-storage/async-storage";
// import { AppState } from "react-native";

// const CartContext = createContext();

// const CART_STORAGE_KEY = "shopify_wishlist_data";

// export const CartProvider = ({ children }) => {
//     const [cart, setCart] = useState([]);
//     const [loading, setLoading] = useState(true);

//     const appState = useRef(AppState.currentState);
//     const subscription = useRef(null);

//     //
//     // Load wishlist on app start
//     //
//     useEffect(() => {
//         const loadCart = async () => {
//             try {
//                 const stored = await AsyncStorage.getItem(CART_STORAGE_KEY);
//                 if (stored) {
//                     setCart(JSON.parse(stored));
//                 } else {
//                     setCart([]);
//                 }
//             } catch (err) {
//                 console.error("Error loading wishlist:", err);
//                 setCart([]);
//             } finally {
//                 setLoading(false);
//             }
//         };

//         loadCart();
//     }, []);

//     //
//     // Save wishlist whenever it changes
//     //
//     useEffect(() => {
//         if (!loading) {
//             AsyncStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
//         }
//     }, [cart, loading]);

//     //
//     // Save when app goes to background/inactive
//     //
//     useEffect(() => {
//         const handleAppStateChange = async (nextAppState) => {
//             if (nextAppState === "background" || nextAppState === "inactive") {
//                 await AsyncStorage.setItem(
//                     CART_STORAGE_KEY,
//                     JSON.stringify(cart ?? [])
//                 );
//             }
//             appState.current = nextAppState;
//         };

//         subscription.current = AppState.addEventListener("change", handleAppStateChange);

//         return () => {
//             subscription.current?.remove();
//         };
//     }, [cart]);

//     //
//     // Wishlist Operations
//     //
//     const addProduct = (product) => {
//         if (!product) throw new Error("Product cannot be null");

//         setCart((prev) => {
//             if (!Array.isArray(prev)) return [product];
//             if (prev.some((p) => p.id === product.id)) return prev;
//             return [...prev, product];
//         });
//     };

//     const removeProduct = (productId) => {
//         setCart((prev) => prev.filter((p) => p.id !== productId));
//     };

//     const clearAll = async () => {
//         setCart([]);
//         await AsyncStorage.removeItem(CART_STORAGE_KEY);
//     };

//     return (
//         <CartContext.Provider
//             value={{
//                 cart,
//                 loading,
//                 addProduct,
//                 removeProduct,
//                 clearAll,
//             }}
//         >
//             {children}
//         </CartContext.Provider>
//     );
// };

// export const useCart = () => {
//     const context = useContext(CartContext);
//     if (!context) {
//         throw new Error("useCart must be used within CartProvider");
//     }
//     return context;
// };




// cartContext.js
import React, { createContext, useContext, useState, useEffect, useRef } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AppState } from "react-native";

const CartContext = createContext();
const CART_STORAGE_KEY = "shopify_cart_data";

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const [loading, setLoading] = useState(true);

    const appState = useRef(AppState.currentState);

    //
    // Load wishlist/cart on app start
    //
    useEffect(() => {
        const loadCart = async () => {
            try {
                const stored = await AsyncStorage.getItem(CART_STORAGE_KEY);
                if (stored) setCart(JSON.parse(stored));
            } catch (err) {
                console.error("Error loading cart:", err);
            } finally {
                setLoading(false);
            }
        };
        loadCart();
    }, []);

    //
    // Save whenever cart updates
    //
    useEffect(() => {
        if (!loading) {
            AsyncStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
        }
    }, [cart, loading]);

    //
    // Save on background
    //
    useEffect(() => {
        const sub = AppState.addEventListener("change", async (nextState) => {
            if (nextState === "background" || nextState === "inactive") {
                await AsyncStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
            }
            appState.current = nextState;
        });

        return () => sub.remove();
    }, [cart]);

    const normalizeProduct = (product) => {
        console.log("product", product);
        const variant = product?.variants?.[0] || {};

        return {
            id: product.id,
            merchandiseId: product.merchandiseId || variant.id || product.merchandiseId, // ✅ Uses passed merchandiseId
            title: product.title,
            tags: product.tags || [],
            handle: product.handle || "",
            vendor: product.vendor || "",
            productType: product.productType || "",
            publishedAt: product.publishedAt || "",
            productTags: product.productTags || [],
            image: product.image || variant.image || null, // ✅ Uses variant image if provided
            price: product.price || variant.price || "0",
            oldPrice: product.oldPrice || variant.oldPrice || "0",
            available: product.available ?? variant.available ?? true,
            quantity: product.quantity || 1, // ✅ Uses provided quantity, defaults to 1
            variantTitle: product.variantTitle || "", // ✅ Store variant title
            selectedOptions: product.selectedOptions || {}, // ✅ Store selected options
        };
    };

    const addProduct = (product) => {
        if (!product?.merchandiseId) return;

        const normalized = normalizeProduct(product);

        setCart((prev) => {
            // ✅ Check if same variant (by merchandiseId) already exists
            const exists = prev.find((p) => p.merchandiseId === normalized.merchandiseId);

            if (exists) {
                // If it exists, add the new quantity to existing quantity
                return prev.map((p) =>
                    p.merchandiseId === normalized.merchandiseId
                        ? { ...p, quantity: p.quantity + normalized.quantity }
                        : p
                );
            }

            return [...prev, normalized];
        });
    };

    const updateProduct = (merchandiseId, updates) => {
        setCart((prev) =>
            prev.map((p) =>
                p.merchandiseId === merchandiseId ? { ...p, ...updates } : p
            )
        );
    };

    //
    // 📌 Remove product by merchandiseId
    //
    const removeProduct = (merchandiseId) => {
        setCart((prev) => prev.filter((p) => p.merchandiseId !== merchandiseId));
    };

    //
    // 📌 Remove specific variant of product (for backwards compatibility)
    //
    const removeFreeProduct = (productId, merchandiseId) => {
        setCart((prev) => prev.filter((p) => !(p.merchandiseId === merchandiseId)));
    };

    //
    // 📌 Increase quantity by merchandiseId
    //
    const increaseQuantity = (merchandiseId) => {
        setCart((prev) =>
            prev.map((p) =>
                p.merchandiseId === merchandiseId ? { ...p, quantity: p.quantity + 1 } : p
            )
        );
    };

    //
    // 📌 Decrease quantity (auto-remove if goes to 0)
    //
    const decreaseQuantity = (merchandiseId) => {
        setCart((prev) =>
            prev
                .map((p) =>
                    p.merchandiseId === merchandiseId
                        ? { ...p, quantity: Math.max(0, p.quantity - 1) }
                        : p
                )
                .filter((p) => p.quantity > 0)
        );
    };

    //
    // 📌 Set exact quantity by merchandiseId
    //
    const setQuantity = (merchandiseId, qty) => {
        if (qty <= 0) {
            removeProduct(merchandiseId);
            return;
        }

        setCart((prev) =>
            prev.map((p) =>
                p.merchandiseId === merchandiseId ? { ...p, quantity: qty } : p
            )
        );
    };

    //
    // Clear cart
    //
    const clearAll = async () => {
        setCart([]);
        await AsyncStorage.removeItem(CART_STORAGE_KEY);
    };

    return (
        <CartContext.Provider
            value={{
                cart,
                loading,
                addProduct,
                removeProduct,
                removeFreeProduct,
                updateProduct,
                increaseQuantity,
                decreaseQuantity,
                setQuantity,
                clearAll,
            }}
        >
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => useContext(CartContext);