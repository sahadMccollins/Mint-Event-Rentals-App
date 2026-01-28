// import { useState } from "react";
// import { useCart } from "../context/cartContext";

// export const useShopifyCart = () => {
//     const [loading, setLoading] = useState(false);
//     const [error, setError] = useState(null);

//     const { cart, addProduct, removeProduct, clearAll } = useCart();

//     const addToCart = (product) => {
//         try {
//             setLoading(true);
//             setError(null);

//             if (!product || !product.id) {
//                 throw new Error("Invalid product");
//             }

//             console.log('Adding product to cart:', product);
//             addProduct(product);

//             setLoading(false);
//             return { success: true, message: "Added to cart" };
//         } catch (err) {
//             setError(err.message);
//             setLoading(false);
//             return { success: false, message: err.message };
//         }
//     };

//     const removeFromCart = (productId) => {
//         try {
//             setLoading(true);
//             setError(null);

//             if (!productId) {
//                 throw new Error("Invalid product ID");
//             }

//             removeProduct(productId); // ✔ fixed

//             setLoading(false);
//             return { success: true, message: "Removed from cart" };
//         } catch (err) {
//             setError(err.message);
//             setLoading(false);
//             return { success: false, message: err.message };
//         }
//     };

//     const isInCart = (productId) => {
//         if (!cart || !Array.isArray(cart)) return false;
//         return cart.some((item) => item.id === productId);
//     };

//     const toggleProduct = (product) => {
//         console.log('Toggling product in cart:', product);
//         if (isInCart(product.id)) {
//             return removeFromCart(product.id); // ✔ improved
//         } else {
//             return addToCart(product);
//         }
//     };

//     const getCount = () => {
//         return cart && Array.isArray(cart) ? cart.length : 0;
//     };

//     const clearCart = async () => {
//         try {
//             setLoading(true);
//             setError(null);

//             await clearAll();

//             setLoading(false);
//             return { success: true, message: "Cart cleared" };
//         } catch (err) {
//             setError(err.message);
//             setLoading(false);
//             return { success: false, message: err.message };
//         }
//     };

//     return {
//         cart,
//         loading,
//         error,
//         addToCart,
//         removeFromCart,
//         toggleProduct,
//         isInCart,
//         getCount,
//         clearCart,
//     };
// };




// useShopifyCart.js
import { useCallback, useState } from "react";
import { useCart } from "../context/cartContext";
import { shopifyCheckoutService } from '../services/shopify/checkout';

export const useShopifyCart = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const {
        cart,
        addProduct,
        removeProduct,
        removeFreeProduct,
        updateProduct,
        increaseQuantity,
        decreaseQuantity,
        setQuantity,
        clearAll,
    } = useCart();

    // ✅ Updated addToCart to handle quantity and variant data
    const addToCart = (cartProduct) => {
        try {
            setLoading(true);

            // Validate that we have the required variant information
            if (!cartProduct?.merchandiseId) {
                console.warn('Warning: merchandiseId not found in product');
                return { success: false, error: 'merchandiseId is required' };
            }

            addProduct(cartProduct);
            return { success: true };
        } catch (e) {
            setError(e.message);
            console.error('Error adding to cart:', e);
            return { success: false, error: e.message };
        } finally {
            setLoading(false);
        }
    };

    const toggleProduct = (product) => {
        // ✅ Check by merchandiseId instead of product id
        const exists = cart.some((p) => p.merchandiseId === product.merchandiseId);
        if (exists) {
            removeProduct(product.merchandiseId);
        } else {
            addToCart(product);
        }
    };

    const updateCart = (merchandiseId, updates) => {
        try {
            setLoading(true);
            updateProduct(merchandiseId, updates);
            return { success: true };
        } catch (e) {
            setError(e.message);
            return { success: false };
        } finally {
            setLoading(false);
        }
    };

    const createShopifyCheckoutUrl = useCallback(async (cartDetail) => {
        return await shopifyCheckoutService.createCheckoutUrl(cartDetail);
    }, []);

    const getCount = () => {
        return cart.reduce((total, item) => total + (item.quantity || 1), 0);
    };

    return {
        cart,
        loading,
        error,
        addToCart,
        updateCart,
        removeFromCart: removeProduct,
        removeFreeFromCart: removeFreeProduct,
        increaseQuantity,
        decreaseQuantity,
        setQuantity,
        toggleProduct,
        clearCart: clearAll,
        getCount,
        // ✅ Check by merchandiseId instead of product id
        isInCart: (merchandiseId) => cart.some((p) => p.merchandiseId === merchandiseId),
        createShopifyCheckoutUrl
    };
};