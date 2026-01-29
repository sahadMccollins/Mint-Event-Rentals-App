// import React, { useEffect, useState } from 'react';
// import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native';
// import { useTheme } from '@react-navigation/native';
// import styles from './styles';
// import { GlobalStyle } from '../../style';
// import { Button } from '@commonComponents/button';
// import ColorSection from './colorSection';
// import { windowHeight, windowWidth } from '@theme/appConstant';
// import { useShopifyCart } from '../../hooks/useShopifyCart';
// import { useValues } from '@App';
// import SizeSection from './sizeSection';
// import Icon from 'react-native-vector-icons/Feather';
// import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
// import { Cart } from '@utils/icons';
// import appColors from '@theme/appColors';

// /* ---------------- helpers ---------------- */
// const getOptionValues = (product, name) =>
//   product?.options?.find(o => o.name.toLowerCase() === name.toLowerCase())?.values || [];

// const findVariant = (variants, selected) =>
//   variants.find(v =>
//     v.selectedOptions.every(
//       opt => selected[opt.name] === opt.value
//     )
//   );

// const getSizeKey = (product) => {
//   return product?.options?.find(o =>
//     o.name.toLowerCase().includes('size')
//   )?.name || 'Size';
// };
// /* ---------------------------------------- */

// export function AddToCartModal(props) {
//   const { colors } = useTheme();
//   const { product } = props;

//   const [selectedOptions, setSelectedOptions] = useState({});
//   const [selectedVariant, setSelectedVariant] = useState(null);
//   const [quantity, setQuantity] = useState(1);
//   const { viewRTLStyle } = useValues();

//   const { addToCart } = useShopifyCart();

//   if (!product) return null;

//   /* Options */
//   const colorOptions = getOptionValues(product, 'Color');
//   const sizeOptions =
//     getOptionValues(product, 'Table Size') ||
//     getOptionValues(product, 'Size');
//   const sizeKey = getSizeKey(product);

//   /* Init default */
//   useEffect(() => {
//     if (!product?.variants?.length) return;

//     const first = product.variants[0];
//     const initial = {};

//     first.selectedOptions.forEach(o => {
//       initial[o.name] = o.value;
//     });

//     setSelectedOptions(initial);
//     setSelectedVariant(first);
//   }, [product]);

//   /* Handlers */
//   const onColorSelect = (color) => {
//     const next = { ...selectedOptions, Color: color };
//     const variant = findVariant(product.variants, next);
//     if (variant) {
//       setSelectedOptions(next);
//       setSelectedVariant(variant);
//     }
//   };

//   const onSizeSelect = (size) => {
//     const next = { ...selectedOptions, [sizeKey]: size };
//     const variant = findVariant(product.variants, next);
//     if (variant) {
//       setSelectedOptions(next);
//       setSelectedVariant(variant);
//     }
//   };

//   const handleIncrement = () => {
//     setQuantity(quantity + 1);
//   };

//   const handleDecrement = () => {
//     if (quantity > 1) {
//       setQuantity(quantity - 1);
//     }
//   };

//   const handleQuantityChange = (text) => {
//     const num = parseInt(text) || 1;
//     if (num > 0) {
//       setQuantity(num);
//     }
//   };

//   const handleAddToCart = () => {
//     if (!selectedVariant) {
//       console.warn('No variant selected');
//       return;
//     }

//     const cartItem = {
//       ...product,
//       merchandiseId: selectedVariant.id, // ✅ Variant ID
//       image: selectedVariant.image || product.images?.[0]?.src, // ✅ Variant image
//       quantity: quantity, // ✅ Selected quantity
//       variantTitle: selectedVariant.title || '', // Optional: variant title
//       selectedOptions: selectedOptions, // Optional: store selected options
//     };

//     addToCart(cartItem);
//   };

//   return (
//     <View style={[GlobalStyle.modal, { backgroundColor: colors.background }]}>

//       <View style={styles.sucessTextContainer}>
//         <MaterialIcon
//           name="check-circle"
//           size={20}
//           color="#00a341"
//         />
//         <Text style={styles.sucessText}>Added to your cart!</Text>
//       </View>
//       {/* Header */}
//       <View style={styles.headerRow}>
//         <Image
//           source={{ uri: selectedVariant?.image || product.images?.[0]?.src }}
//           style={styles.thumb}
//         />

//         {/* Title and Quantity Section */}
//         {/* <View style={styles.titleQuantityContainer}> */}
//         <Text style={[styles.title, { color: colors.text }]}>
//           {product.title}
//         </Text>

//         {/* Quantity Selector */}
//         <View style={[styles.quantityContainer, { borderColor: colors.border || '#E0E0E0' }]}>
//           <TouchableOpacity
//             style={styles.quantityButton}
//             onPress={handleDecrement}
//           >
//             <Icon name="minus" size={16} color={colors.text} />
//           </TouchableOpacity>

//           <TextInput
//             style={[styles.quantityInput, { color: colors.text }]}
//             value={String(quantity)}
//             onChangeText={handleQuantityChange}
//             keyboardType="number-pad"
//             maxLength={3}
//           />

//           <TouchableOpacity
//             style={styles.quantityButton}
//             onPress={handleIncrement}
//           >
//             <Icon name="plus" size={16} color={colors.text} />
//           </TouchableOpacity>
//         </View>
//         {/* </View> */}
//       </View>

//       {/* COLOR */}
//       {colorOptions.length > 0 && (
//         <ColorSection
//           colors={colors}
//           options={colorOptions}
//           selected={selectedOptions.Color}
//           onSelect={onColorSelect}
//         />
//       )}

//       {/* SIZE */}
//       {sizeOptions.length > 0 && (
//         <SizeSection
//           colors={colors}
//           sizes={sizeOptions}
//           selected={selectedOptions[sizeKey]}
//           onSelect={onSizeSelect}
//           sizeLabel={sizeKey}
//         />
//       )}

//       <View style={[styles.rowContainer, { backgroundColor: appColors.primary, flexDirection: viewRTLStyle, flex: 1, borderRadius: windowWidth(60), justifyContent: 'center' }]}>
//         <Cart color='#fff' />
//         <TouchableOpacity onPress={handleAddToCart}>
//           <Text style={[styles.cartText, { color: '#fff' }]}>
//             Add to Quote
//           </Text>
//         </TouchableOpacity>
//       </View>

//     </View>
//   );
// }




import React, { useEffect, useState, useRef } from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  Animated,
  Easing,
} from 'react-native';
import { useTheme } from '@react-navigation/native';
import styles from './styles';
import { GlobalStyle } from '../../style';
import ColorSection from './colorSection';
import { windowWidth } from '@theme/appConstant';
import { useShopifyCart } from '../../hooks/useShopifyCart';
import { useValues } from '@App';
import SizeSection from './sizeSection';
import Icon from 'react-native-vector-icons/Feather';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import { Cart } from '@utils/icons';
import appColors from '@theme/appColors';

/* ---------------- helpers ---------------- */
const getOptionValues = (product, name) =>
  product?.options?.find(o => o.name.toLowerCase() === name.toLowerCase())?.values || [];

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

const findVariant = (variants, selected) =>
  variants.find(v =>
    v.selectedOptions.every(
      opt => selected[opt.name] === opt.value
    )
  );

const getSizeKey = (product) =>
  product?.options?.find(o => o.name.toLowerCase().includes('size'))?.name || 'Size';
/* ---------------------------------------- */

export function AddToCartModal(props) {
  const { colors } = useTheme();
  const { product } = props;
  const { viewRTLStyle } = useValues();
  const { addToCart } = useShopifyCart();

  const [selectedOptions, setSelectedOptions] = useState({});
  const [selectedVariant, setSelectedVariant] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [showSuccess, setShowSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const successTimerRef = useRef(null);

  /* animated dots */
  const dot1 = useRef(new Animated.Value(0)).current;
  const dot2 = useRef(new Animated.Value(0)).current;
  const dot3 = useRef(new Animated.Value(0)).current;
  const dotsLoopRef = useRef(null);

  if (!product) return null;

  const colorOptions = getOptionValues(product, 'Color');
  const sizeOptions =
    getOptionValues(product, 'Table Size') ||
    getOptionValues(product, 'Size');
  const sizeKey = getSizeKey(product);

  /* Init default */
  useEffect(() => {
    if (!product?.variants?.length) return;

    const first = product.variants[0];
    const initial = {};

    first.selectedOptions.forEach(o => {
      initial[o.name] = o.value;
    });

    setSelectedOptions(initial);
    setSelectedVariant(first);
  }, [product]);

  /* Handlers */
  const onColorSelect = (color) => {
    const next = { ...selectedOptions, Color: color };
    const variant = findVariant(product.variants, next);
    if (variant) {
      setSelectedOptions(next);
      setSelectedVariant(variant);
    }
  };

  const onSizeSelect = (size) => {
    const next = { ...selectedOptions, [sizeKey]: size };
    const variant = findVariant(product.variants, next);
    if (variant) {
      setSelectedOptions(next);
      setSelectedVariant(variant);
    }
  };

  /* cleanup */
  useEffect(() => {
    return () => {
      if (successTimerRef.current) clearTimeout(successTimerRef.current);
      if (dotsLoopRef.current) dotsLoopRef.current.stop();
    };
  }, []);

  /* dots animation */
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
    if (dotsLoopRef.current) {
      dotsLoopRef.current.stop();
    }
    dot1.setValue(0);
    dot2.setValue(0);
    dot3.setValue(0);
  };

  /* Handlers */
  const handleAddToCart = async () => {
    if (!selectedVariant || isLoading) return;

    setIsLoading(true);
    startDotsAnimation();

    // 🕒 UX delay (2.5 seconds feels perfect)
    await delay(1000);

    const cartItem = {
      ...product,
      merchandiseId: selectedVariant.id,
      image: selectedVariant.image || product.images?.[0]?.src,
      quantity,
      variantTitle: selectedVariant.title || '',
      selectedOptions,
    };

    addToCart(cartItem);

    stopDotsAnimation();
    setIsLoading(false);
    setShowSuccess(true);

    if (successTimerRef.current) {
      clearTimeout(successTimerRef.current);
    }

    successTimerRef.current = setTimeout(() => {
      setShowSuccess(false);
    }, 4000);
  };


  return (
    <View style={[GlobalStyle.modal, { backgroundColor: colors.background }]}>

      {/* SUCCESS MESSAGE */}
      {showSuccess && (
        <View style={styles.sucessTextContainer}>
          <MaterialIcon name="check-circle" size={20} color="#00a341" />
          <Text style={styles.sucessText}>Added to your cart!</Text>
        </View>
      )}

      {/* Header */}
      <View style={styles.headerRow}>
        <Image
          source={{ uri: selectedVariant?.image || product.images?.[0]?.src }}
          style={styles.thumb}
        />

        <Text style={[styles.title, { color: colors.text }]}>
          {product.title}
        </Text>

        {/* Quantity */}
        <View style={[styles.quantityContainer, { borderColor: colors.border || '#E0E0E0' }]}>
          <TouchableOpacity onPress={() => setQuantity(q => Math.max(1, q - 1))}>
            <Icon name="minus" size={16} color={colors.text} />
          </TouchableOpacity>

          <TextInput
            style={[styles.quantityInput, { color: colors.text }]}
            value={String(quantity)}
            keyboardType="number-pad"
          />

          <TouchableOpacity onPress={() => setQuantity(q => q + 1)}>
            <Icon name="plus" size={16} color={colors.text} />
          </TouchableOpacity>
        </View>
      </View>

      {/* COLOR */}
      {colorOptions.length > 0 && (
        <ColorSection
          colors={colors}
          options={colorOptions}
          selected={selectedOptions.Color}
          onSelect={onColorSelect}
        />
      )}

      {/* SIZE */}
      {sizeOptions.length > 0 && (
        <SizeSection
          colors={colors}
          sizes={sizeOptions}
          selected={selectedOptions[sizeKey]}
          onSelect={onSizeSelect}
          sizeLabel={sizeKey}
        />
      )}

      {/* Button */}
      <TouchableOpacity
        activeOpacity={0.85}
        disabled={isLoading}
        onPress={handleAddToCart}
        style={[
          styles.rowContainer,
          {
            backgroundColor: appColors.primary,
            flexDirection: viewRTLStyle,
            borderRadius: windowWidth(60),
            justifyContent: 'center',
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
            {[dot1, dot2, dot3].map((dot, i) => (
              <Animated.Text
                key={i}
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
