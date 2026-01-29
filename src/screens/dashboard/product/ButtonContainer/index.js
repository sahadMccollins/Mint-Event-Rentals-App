// // import React from 'react';
// // import { View, Text, TouchableOpacity } from 'react-native';
// // import styles from './styles';
// // import { Wishlist, Cart, WishlistFilled } from '@utils/icons';
// // import appColors from '@theme/appColors';
// // import { useValues } from '@App';
// // import { useShopifyWishlist } from '../../../../hooks/useShopifyWishlist';

// // export default buttonContainer = props => {
// //   const { t, colors } = props;
// //   const { viewRTLStyle } = useValues();
// //   const { toggleProduct, isInWishlist } = useShopifyWishlist();

// //   return (
// //     <View
// //       style={[
// //         styles.mainView,
// //         {
// //           backgroundColor: colors.card,
// //           borderTopColor: colors.divider,
// //           flexDirection: viewRTLStyle,
// //         },
// //       ]}>
// //       {/* <View style={[styles.rowContainer, { flexDirection: viewRTLStyle }]}>
// //         <Wishlist color={colors.text} />
// //         <Text style={[styles.text, { color: colors.text }]}>
// //           {t('tabBar.wishList')}
// //         </Text>
// //       </View> */}

// //       <TouchableOpacity style={[styles.rowContainer, { flexDirection: viewRTLStyle }]} onPress={() => {
// //         toggleProduct(props.item);
// //       }}>
// //         <Wishlist color={colors.text} />
// //         <Text style={[styles.text, { color: colors.text }]}>
// //           {t('tabBar.wishList')}
// //         </Text>
// //       </TouchableOpacity>

// //       <View>
// //         <View
// //           style={[
// //             styles.verticleLine,
// //             { backgroundColor: colors.divider },
// //           ]}></View>
// //       </View>
// //       <View style={[styles.rowContainer, { flexDirection: viewRTLStyle }]}>
// //         <Cart color={appColors.primary} />
// //         <TouchableOpacity
// //           onPress={() => {
// //             props.navigation.navigate('cart');
// //           }}>
// //           <Text style={styles.cartText}>{t('checkDelivery.addToBag')}</Text>
// //         </TouchableOpacity>
// //       </View>
// //     </View>
// //   );
// // };



// // import React, { use } from 'react';
// // import { View, Text, TouchableOpacity } from 'react-native';
// // import styles from './styles';
// // import { Wishlist, Cart, WishlistFilled } from '@utils/icons';
// // import appColors from '@theme/appColors';
// // import { useValues } from '@App';
// // import { useShopifyWishlist } from '../../../../hooks/useShopifyWishlist';
// // import { useShopifyCart } from '../../../../hooks/useShopifyCart';

// // export default buttonContainer = (props) => {
// //   const { t, colors } = props;
// //   const { viewRTLStyle } = useValues();
// //   const { toggleProduct, isInWishlist } = useShopifyWishlist();
// //   const { addToCart, isInCart,  } = useShopifyCart();

// //   const product = props.item;
// //   const inWishlist = isInWishlist(product?.id);   // <- IMPORTANT

// //   return (
// //     <View
// //       style={[
// //         styles.mainView,
// //         {
// //           backgroundColor: colors.card,
// //           borderTopColor: colors.divider,
// //           flexDirection: viewRTLStyle,
// //         },
// //       ]}
// //     >
// //       {/* WISHLIST BUTTON */}
// //       <TouchableOpacity
// //         style={[styles.rowContainer, { flexDirection: viewRTLStyle }]}
// //         onPress={() => toggleProduct(product)}
// //       >
// //         {inWishlist ? (
// //           <WishlistFilled color={appColors.primary} />   // Filled heart
// //         ) : (
// //           <Wishlist color={colors.text} />               // Empty heart
// //         )}

// //         <Text
// //           style={[
// //             styles.text,
// //             { color: inWishlist ? appColors.primary : colors.text },
// //           ]}
// //         >
// //           {t('tabBar.wishList')}
// //         </Text>
// //       </TouchableOpacity>

// //       {/* DIVIDER */}
// //       <View>
// //         <View
// //           style={[
// //             styles.verticleLine,
// //             { backgroundColor: colors.divider },
// //           ]}
// //         />
// //       </View>

// //       {/* ADD TO BAG */}
// //       <View style={[styles.rowContainer, { flexDirection: viewRTLStyle }]}>
// //         <Cart color={appColors.primary} />
// //         <TouchableOpacity
// //           onPress={() => addToCart(product)}
// //         >
// //           <Text style={styles.cartText}>
// //             {t('checkDelivery.addToBag')}
// //           </Text>
// //         </TouchableOpacity>
// //       </View>
// //     </View>
// //   );
// // };



// import React from 'react';
// import { View, Text, TouchableOpacity } from 'react-native';
// import styles from './styles';
// import { Wishlist, Cart, WishlistFilled } from '@utils/icons';
// import appColors from '@theme/appColors';
// import { useValues } from '@App';
// import Icon from 'react-native-vector-icons/AntDesign';
// import { useShopifyWishlist } from '../../../../hooks/useShopifyWishlist';
// import { useShopifyCart } from '../../../../hooks/useShopifyCart';

// export default buttonContainer = (props) => {
//   const { t, colors } = props;
//   const { viewRTLStyle } = useValues();

//   const { toggleProduct, isInWishlist } = useShopifyWishlist();
//   const {
//     cart,
//     addToCart,
//     increaseQuantity,
//     decreaseQuantity,
//     isInCart,
//   } = useShopifyCart();

//   const product = props.item;

//   // WISHLIST STATUS
//   const inWishlist = isInWishlist(product?.id);

//   // CART STATUS
//   const inCart = isInCart(product?.id);
//   const cartItem = cart.find((p) => p.id === product?.id);
//   const quantity = cartItem?.quantity || 0;

//   return (
//     <View
//       style={[
//         styles.mainView,
//         {
//           backgroundColor: colors.card,
//           borderTopColor: colors.divider,
//           flexDirection: viewRTLStyle,
//         },
//       ]}
//     >
//       {/* ----------- WISHLIST BUTTON ----------- */}
//       <TouchableOpacity
//         style={[styles.rowContainer, { flexDirection: viewRTLStyle }]}
//         onPress={() => toggleProduct(product)}
//       >
//         {inWishlist ? (
//           <WishlistFilled color={appColors.primary} />
//         ) : (
//           <Wishlist color={colors.text} />
//         )}

//         <Text
//           style={[
//             styles.text,
//             { color: inWishlist ? appColors.primary : colors.text },
//           ]}
//         >
//           {t('tabBar.wishList')}
//         </Text>
//       </TouchableOpacity>

//       {/* DIVIDER */}
//       <View>
//         <View
//           style={[
//             styles.verticleLine,
//             { backgroundColor: colors.divider },
//           ]}
//         />
//       </View>

//       {/* ----------- CART BUTTON / QTY CONTROL ----------- */}
//       <View style={[styles.rowContainer, { flexDirection: viewRTLStyle }]}>

//         {/* If NOT in cart → Show ADD TO BAG */}
//         {!inCart ? (
//           <>
//             <Cart color={appColors.primary} />
//             <TouchableOpacity onPress={() => addToCart(product)}>
//               <Text style={styles.cartText}>
//                 {t('checkDelivery.addToBag')}
//               </Text>
//             </TouchableOpacity>
//           </>
//         ) : (
//           // If IN CART → Show (- qty +)
//           <View style={[styles.pillContainer, { flexDirection: viewRTLStyle }]}>
//             <TouchableOpacity
//               activeOpacity={1}
//               style={[styles.leftMainView, { borderColor: props.colors.text }]}
//               onPress={() => decreaseQuantity(product.id)}>
//               <Icon name={'minus'} size={18} color={appColors.primary} />
//             </TouchableOpacity>

//             {/* QUANTITY */}
//             <Text style={styles.text}>{quantity}</Text>

//             <TouchableOpacity
//               activeOpacity={1}
//               style={[styles.rightMainView, { borderColor: props.colors.text }]}
//               onPress={() => increaseQuantity(product.id)}>
//               <Icon name={'plus'} size={18} color={appColors.primary} />
//             </TouchableOpacity>
//           </View>

//         )}
//       </View>
//     </View>
//   );
// };



// import React from 'react';
// import { View, Text, TouchableOpacity } from 'react-native';
// import styles from './styles';
// import { Wishlist, Cart, Document, WishlistFilled } from '@utils/icons';
// import appColors from '@theme/appColors';
// import { windowHeight, windowWidth } from '@theme/appConstant';
// import { useValues } from '@App';
// import { useShopifyCart } from '../../../../hooks/useShopifyCart';
// import { useSafeAreaInsets } from 'react-native-safe-area-context';


// export default buttonContainer = (props) => {
//   const { t, colors, visibleLoginModal, selectedVariant, numQuantity, selectedOptions } = props;
//   const { viewRTLStyle, isRTL } = useValues();

//   const {
//     cart,
//     addToCart,
//     increaseQuantity,
//     decreaseQuantity,
//     isInCart,
//   } = useShopifyCart();

//   const insets = useSafeAreaInsets();

//   const product = props.item;

//   // ✅ Find cart item by merchandiseId (variant ID)
//   const cartItem = cart.find((p) => p.merchandiseId === selectedVariant?.id);

//   const handleAddToCart = () => {
//     // ✅ Validate that we have required data
//     if (!selectedVariant?.id) {
//       console.warn('No variant selected');
//       return;
//     }

//     // ✅ Create cart item with variant data
//     const cartItemData = {
//       ...product,
//       merchandiseId: selectedVariant.id, // ✅ Variant ID
//       image: selectedVariant.image || product.images?.[0]?.src, // ✅ Variant image
//       quantity: numQuantity, // ✅ Selected quantity
//       variantTitle: selectedVariant.title || '', // ✅ Variant title
//       selectedOptions: selectedOptions, // ✅ Selected options (Color, Size, etc.)
//     };

//     addToCart(cartItemData);
//   };

//   return (
//     <View
//       style={[
//         styles.mainView,
//         {
//           bottom: insets.bottom + windowHeight(40),
//           backgroundColor: colors.background,
//           borderTopColor: colors.divider,
//           flexDirection: viewRTLStyle,
//           paddingHorizontal: windowWidth(30),
//         },
//       ]}
//     >
//       <View style={[styles.rowContainer, { backgroundColor: appColors.primary, flexDirection: viewRTLStyle, flex: 1, borderRadius: windowWidth(60), justifyContent: 'center' }]}>
//         <Cart color='#fff' />
//         <TouchableOpacity onPress={handleAddToCart}>
//           <Text style={[styles.cartText, { color: '#fff' }]}>
//             Add to Quote
//           </Text>
//         </TouchableOpacity>
//       </View>
//     </View >
//   );
// };





import React, { useRef, useState, useEffect } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Animated,
  Easing,
} from 'react-native';
import styles from './styles';
import { Cart } from '@utils/icons';
import appColors from '@theme/appColors';
import { windowHeight, windowWidth } from '@theme/appConstant';
import { useValues } from '@App';
import { useShopifyCart } from '../../../../hooks/useShopifyCart';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

/* ---------- helper ---------- */
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

export default function ButtonContainer(props) {
  const {
    colors,
    selectedVariant,
    numQuantity,
    selectedOptions,
    item: product,
  } = props;

  const { viewRTLStyle } = useValues();
  const { addToCart } = useShopifyCart();
  const insets = useSafeAreaInsets();

  const [isLoading, setIsLoading] = useState(false);

  /* animated dots */
  const dot1 = useRef(new Animated.Value(0)).current;
  const dot2 = useRef(new Animated.Value(0)).current;
  const dot3 = useRef(new Animated.Value(0)).current;
  const dotsLoopRef = useRef(null);

  /* cleanup */
  useEffect(() => {
    return () => {
      if (dotsLoopRef.current) dotsLoopRef.current.stop();
    };
  }, []);

  const startDotsAnimation = () => {
    const bounce = (dot) =>
      Animated.sequence([
        Animated.timing(dot, {
          toValue: -6,
          duration: 250,
          easing: Easing.out(Easing.ease),
          useNativeDriver: true,
        }),
        Animated.timing(dot, {
          toValue: 0,
          duration: 250,
          easing: Easing.in(Easing.ease),
          useNativeDriver: true,
        }),
      ]);

    dotsLoopRef.current = Animated.loop(
      Animated.stagger(120, [
        bounce(dot1),
        bounce(dot2),
        bounce(dot3),
      ])
    );

    dotsLoopRef.current.start();
  };

  const stopDotsAnimation = () => {
    if (dotsLoopRef.current) dotsLoopRef.current.stop();
    dot1.setValue(0);
    dot2.setValue(0);
    dot3.setValue(0);
  };

  const handleAddToCart = async () => {
    if (!selectedVariant?.id || isLoading) return;

    setIsLoading(true);
    startDotsAnimation();

    // 🕒 UX delay so animation is visible
    await delay(1000);

    const cartItemData = {
      ...product,
      merchandiseId: selectedVariant.id,
      image: selectedVariant.image || product.images?.[0]?.src,
      quantity: numQuantity,
      variantTitle: selectedVariant.title || '',
      selectedOptions,
    };

    addToCart(cartItemData);

    stopDotsAnimation();
    setIsLoading(false);
  };

  return (
    <View
      style={[
        styles.mainView,
        {
          // bottom: insets.bottom + windowHeight(40),
          bottom: insets.bottom - windowHeight(5),
          backgroundColor: colors.background,
          borderTopColor: colors.divider,
          flexDirection: viewRTLStyle,
          paddingHorizontal: windowWidth(30),
        },
      ]}
    >
      <TouchableOpacity
        activeOpacity={0.85}
        disabled={isLoading}
        onPress={handleAddToCart}
        style={[
          styles.rowContainer,
          {
            backgroundColor: appColors.primary,
            flexDirection: viewRTLStyle,
            flex: 1,
            borderRadius: windowWidth(60),
            justifyContent: 'center',
            alignItems: 'flex-start',
          },
        ]}
      >
        {!isLoading ? (
          <>
            <Cart color="#fff" />
            <Text style={[styles.cartText, { color: '#fff' }]}>
              Add to Quote
            </Text>
          </>
        ) : (
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            {[dot1, dot2, dot3].map((dot, index) => (
              <Animated.Text
                key={index}
                style={{
                  transform: [{ translateY: dot }],
                  color: '#fff',
                  fontSize: 24,
                  marginHorizontal: 2,
                }}
              >
                •
              </Animated.Text>
            ))}
          </View>
        )}
      </TouchableOpacity>
    </View>
  );
}
