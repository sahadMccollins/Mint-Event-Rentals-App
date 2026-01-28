// import React, { useRef, useState, useEffect, useCallback, useMemo } from 'react';
// import {
//   View,
//   Image,
//   Text,
//   Animated,
//   Easing,
//   TouchableOpacity,
//   FlatList,
//   ActivityIndicator,
// } from 'react-native';
// import styles from './styles';
// import { useTheme } from '@react-navigation/native';
// import Lottie from 'lottie-react-native';
// import LikeAnim from '@assets/likeAnim.json';
// import StarRating from '@commonComponents/starRating';
// import { useValues } from '@App';
// import { Wishlist, WishlistFilled } from "@utils/icons";
// import { useShopifyWishlist } from '../../hooks/useShopifyWishlist';
// import { useShopifyCart } from '../../hooks/useShopifyCart';
// import images from '@utils/images/images';
// import { windowHeight, windowWidth } from '@theme/appConstant';
// import { getColorVariants } from '@utils/helper';

// export function Product(props) {
//   const { colors } = useTheme();
//   const { viewRTLStyle, textRTLStyle, currSymbol, currValue, isDark } = useValues();
//   const { toggleProduct, isInWishlist } = useShopifyWishlist();
//   const { addToCart, loading, removeFromCart, isInCart } = useShopifyCart();
//   const { product, navigation, t, width } = props;

//   const [selectedVariantTitle, setSelectedVariantTitle] = useState(product?.variants?.[0]?.title);
//   const [selectedVariantImage, setSelectedVariantImage] = useState(product?.variants?.[0]?.image);

//   const scaleAnim = useRef(new Animated.Value(1)).current;

//   // Memoize color variants
//   const colorVariants = useMemo(() => getColorVariants(product), [product]);

//   // Memoize discount percentage
//   const discountPercentage = useMemo(() => {
//     if (!product.oldPrice || !product.price || product.oldPrice <= product.price) {
//       return null;
//     }
//     return Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100);
//   }, [product.oldPrice, product.price]);

//   // Memoize product availability status
//   const isProductAvailable = useMemo(() => product.available === true, [product.available]);

//   // Memoize if product requires quote
//   const requiresQuote = useMemo(() =>
//     product.productTags?.includes("request-a-qoute") ||
//     product.productTags?.includes("request-a-quote"),
//     [product.productTags]
//   );

//   // Memoize cart status
//   const productInCart = useMemo(() => isInCart(product.id), [isInCart, product.id]);

//   const animate = useCallback(() => {
//     Animated.sequence([
//       Animated.timing(scaleAnim, {
//         toValue: 1.4,
//         duration: 120,
//         useNativeDriver: true,
//       }),
//       Animated.timing(scaleAnim, {
//         toValue: 1,
//         duration: 120,
//         useNativeDriver: true,
//       }),
//     ]).start();
//   }, [scaleAnim]);

//   const handleColorPress = useCallback((item) => {
//     setSelectedVariantTitle(item.title);
//     setSelectedVariantImage(item.image);
//   }, []);

//   const handleProductPress = useCallback(() => {
//     navigation.navigate('Product', { productId: product.id });
//   }, [navigation, product.id]);

//   const handleAddToCart = useCallback(() => {
//     addToCart(product);
//   }, [addToCart, product]);

//   const handleRemoveFromCart = useCallback(() => {
//     removeFromCart(product.id);
//   }, [removeFromCart, product.id]);

//   const renderColorVariant = useCallback(({ item }) => {
//     const isSelected = item.title === selectedVariantTitle;

//     return (
//       <TouchableOpacity
//         onPress={() => handleColorPress(item)}
//         activeOpacity={0.8}
//         style={[
//           styles.outerSquare,
//           isSelected && styles.selectedOuterSquare,
//         ]}
//       >
//         <View
//           style={[
//             styles.innerSquare,
//             { backgroundColor: item.title.toLowerCase() },
//           ]}
//         />
//       </TouchableOpacity>
//     );
//   }, [selectedVariantTitle, handleColorPress]);

//   const colorVariantKeyExtractor = useCallback((item) => item.variantId, []);

//   return (
//     <TouchableOpacity
//       activeOpacity={0.8}
//       onPress={handleProductPress}
//       style={{ width }}
//     >
//       <Image
//         source={{ uri: String(selectedVariantImage) }}
//         style={styles.img}
//       />

//       <Text
//         style={[styles.title, { color: colors.text, textAlign: 'center', fontWeight: 'bold', marginBottom: windowHeight(8) }]}
//         numberOfLines={2}
//         ellipsizeMode="tail"
//       >
//         {t(product.title)}
//       </Text>

//       {colorVariants.length > 1 && (
//         <FlatList
//           data={colorVariants}
//           keyExtractor={colorVariantKeyExtractor}
//           horizontal
//           showsHorizontalScrollIndicator={false}
//           contentContainerStyle={{
//             flex: 1,
//             gap: windowWidth(14),
//             justifyContent: 'center',
//             alignSelf: 'center',
//           }}
//           renderItem={renderColorVariant}
//           scrollEnabled={false}
//         />
//       )}

//       {!isProductAvailable ? (
//         <Text style={[styles.newProduct, { textAlign: textRTLStyle }]}>
//           Sold out
//         </Text>
//       ) : (
//         discountPercentage && (
//           <Text style={[styles.newProduct, { textAlign: textRTLStyle }]}>
//             {`${discountPercentage}% OFF`}
//           </Text>
//         )
//       )}

//       {!requiresQuote && (
//         <View
//           style={[
//             styles.wishlist,
//             { backgroundColor: isDark ? "#2B2B2B" : "white" },
//           ]}
//         >
//           <View
//             style={{
//               borderWidth: 1,
//               borderColor: '#d6d6d6',
//               padding: 4,
//               alignItems: 'center',
//               justifyContent: 'center',
//             }}
//           >
//             {loading ? (
//               <ActivityIndicator size="small" color={colors.primary} />
//             ) : productInCart ? (
//               <TouchableOpacity onPress={handleRemoveFromCart}>
//                 <Image
//                   source={isDark ? images.addedToCartWhite : images.addedToCart}
//                   style={{ width: 20, height: 20 }}
//                   resizeMode="contain"
//                 />
//               </TouchableOpacity>
//             ) : !isProductAvailable ? (
//               <TouchableOpacity disabled onPress={null}>
//                 <Image
//                   source={isDark ? images.addToCartWhite : images.addToCart}
//                   style={{ width: 20, height: 20, opacity: 0.5 }}
//                   resizeMode="contain"
//                 />
//               </TouchableOpacity>
//             ) : (
//               <TouchableOpacity onPress={handleAddToCart}>
//                 <Image
//                   source={isDark ? images.addToCartWhite : images.addToCart}
//                   style={{ width: 20, height: 20 }}
//                   resizeMode="contain"
//                 />
//               </TouchableOpacity>
//             )}
//           </View>
//         </View>
//       )}
//     </TouchableOpacity>
//   );
// }



import React, { useRef, useState, useEffect, useCallback, useMemo } from 'react';
import {
  View,
  Image,
  Text,
  Animated,
  Easing,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import styles from './styles';
import { useTheme } from '@react-navigation/native';
import Lottie from 'lottie-react-native';
import LikeAnim from '@assets/likeAnim.json';
import StarRating from '@commonComponents/starRating';
import { useValues } from '@App';
import { Wishlist, WishlistFilled } from "@utils/icons";
import { useShopifyWishlist } from '../../hooks/useShopifyWishlist';
import { useShopifyCart } from '../../hooks/useShopifyCart';
import images from '@utils/images/images';
import { windowHeight, windowWidth } from '@theme/appConstant';
import { getColorVariants } from '@utils/helper';

export function Product(props) {
  const { colors } = useTheme();
  const { viewRTLStyle, textRTLStyle, currSymbol, currValue, isDark } = useValues();
  const { toggleProduct, isInWishlist } = useShopifyWishlist();
  const { addToCart, loading, removeFromCart, isInCart } = useShopifyCart();
  const { product, navigation, t, width } = props;
  const [selectedVariant, setSelectedVariant] = useState(product?.variants?.[0]);

  const scaleAnim = useRef(new Animated.Value(1)).current;

  // Memoize color variants
  const colorVariants = useMemo(() => getColorVariants(product), [product]);

  // Memoize discount percentage
  const discountPercentage = useMemo(() => {
    if (!product.oldPrice || !product.price || product.oldPrice <= product.price) {
      return null;
    }
    return Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100);
  }, [product.oldPrice, product.price]);

  // Memoize product availability status
  const isProductAvailable = useMemo(() => product.available === true, [product.available]);

  // Memoize if product requires quote
  const requiresQuote = useMemo(() =>
    product.productTags?.includes("request-a-qoute") ||
    product.productTags?.includes("request-a-quote"),
    [product.productTags]
  );

  // Memoize cart status
  const productInCart = useMemo(() => isInCart(product.id), [isInCart, product.id]);

  const animate = useCallback(() => {
    Animated.sequence([
      Animated.timing(scaleAnim, {
        toValue: 1.4,
        duration: 120,
        useNativeDriver: true,
      }),
      Animated.timing(scaleAnim, {
        toValue: 1,
        duration: 120,
        useNativeDriver: true,
      }),
    ]).start();
  }, [scaleAnim]);

  const handleColorPress = useCallback((item) => {
    setSelectedVariant(item);
  }, []);

  const handleProductPress = useCallback(() => {
    navigation.navigate('Product', { productId: product.id });
  }, [navigation, product.id]);

  // const handleAddToCart = useCallback(() => {
  //   addToCart(product);
  // }, [addToCart, product]);

  const handleAddToCart = useCallback(() => {
    // Pass both product and selected variant
    props.onAddToCart(product);
  }, [product, props]);

  const handleRemoveFromCart = useCallback(() => {
    removeFromCart(product.id);
  }, [removeFromCart, product.id]);

  const renderColorVariant = useCallback(({ item }) => {
    const isSelected = item.title === selectedVariant.title;

    return (
      <TouchableOpacity
        onPress={() => handleColorPress(item)}
        activeOpacity={0.8}
        style={[
          styles.outerSquare,
          isSelected && styles.selectedOuterSquare,
        ]}
      >
        <View
          style={[
            styles.innerSquare,
            { backgroundColor: item.title.toLowerCase() },
          ]}
        />
      </TouchableOpacity>
    );
  }, [selectedVariant, handleColorPress]);

  const colorVariantKeyExtractor = useCallback((item) => item.variantId, []);

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={handleProductPress}
      style={{ width }}
    >
      <Image
        source={{ uri: String(selectedVariant.image) }}
        style={styles.img}
      />

      <Text
        style={[styles.title, { color: colors.text, textAlign: 'center', fontWeight: 'bold', marginBottom: windowHeight(8) }]}
        numberOfLines={2}
        ellipsizeMode="tail"
      >
        {t(product.title)}
      </Text>

      {colorVariants.length > 1 && (
        <FlatList
          data={colorVariants}
          keyExtractor={colorVariantKeyExtractor}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            flex: 1,
            gap: windowWidth(14),
            justifyContent: 'center',
            alignSelf: 'center',
          }}
          renderItem={renderColorVariant}
          scrollEnabled={false}
        />
      )}

      {!isProductAvailable ? (
        <Text style={[styles.newProduct, { textAlign: textRTLStyle }]}>
          Sold out
        </Text>
      ) : (
        discountPercentage && (
          <Text style={[styles.newProduct, { textAlign: textRTLStyle }]}>
            {`${discountPercentage}% OFF`}
          </Text>
        )
      )}

      {!requiresQuote && (
        <View
          style={[
            styles.wishlist,
            { backgroundColor: isDark ? "#2B2B2B" : "white" },
          ]}
        >
          <View
            style={{
              borderWidth: 1,
              borderColor: '#d6d6d6',
              padding: 4,
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            {loading ? (
              <ActivityIndicator size="small" color={colors.primary} />
            ) : productInCart ? (
              <TouchableOpacity onPress={handleRemoveFromCart}>
                <Image
                  source={isDark ? images.addedToCartWhite : images.addedToCart}
                  style={{ width: 20, height: 20 }}
                  resizeMode="contain"
                />
              </TouchableOpacity>
            ) : !isProductAvailable ? (
              <TouchableOpacity disabled onPress={null}>
                <Image
                  source={isDark ? images.addToCartWhite : images.addToCart}
                  style={{ width: 20, height: 20, opacity: 0.5 }}
                  resizeMode="contain"
                />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity onPress={handleAddToCart}>
                <Image
                  source={isDark ? images.addToCartWhite : images.addToCart}
                  style={{ width: 20, height: 20 }}
                  resizeMode="contain"
                />
              </TouchableOpacity>
            )}
          </View>
        </View>
      )}
    </TouchableOpacity>
  );
}