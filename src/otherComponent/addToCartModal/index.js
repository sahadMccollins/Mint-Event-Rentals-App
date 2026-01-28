// import React, { useEffect, useState } from 'react';
// import { View, Text, Image } from 'react-native';
// import { useTheme } from '@react-navigation/native';
// import styles from './styles';
// import { GlobalStyle } from '../../style';
// import { Button } from '@commonComponents/button';
// import ColorSection from './colorSection';
// import SizeSection from './sizeSection';

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

//   return (
//     <View style={[GlobalStyle.modal, { backgroundColor: colors.background }]}>

//       {/* Header */}
//       <View style={styles.headerRow}>
//         <Image
//           source={{ uri: selectedVariant?.image || product.images?.[0]?.src }}
//           style={styles.thumb}
//         />
//         <Text style={[styles.title, { color: colors.text }]}>
//           {product.title}
//         </Text>

//         <Input/>
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

//     </View>
//   );
// }



import React, { useEffect, useState } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native';
import { useTheme } from '@react-navigation/native';
import styles from './styles';
import { GlobalStyle } from '../../style';
import { Button } from '@commonComponents/button';
import ColorSection from './colorSection';
import { windowHeight, windowWidth } from '@theme/appConstant';
import { useShopifyCart } from '../../hooks/useShopifyCart';
import { useValues } from '@App';
import SizeSection from './sizeSection';
import Icon from 'react-native-vector-icons/Feather';
import { Cart } from '@utils/icons';
import appColors from '@theme/appColors';

/* ---------------- helpers ---------------- */
const getOptionValues = (product, name) =>
  product?.options?.find(o => o.name.toLowerCase() === name.toLowerCase())?.values || [];

const findVariant = (variants, selected) =>
  variants.find(v =>
    v.selectedOptions.every(
      opt => selected[opt.name] === opt.value
    )
  );

const getSizeKey = (product) => {
  return product?.options?.find(o =>
    o.name.toLowerCase().includes('size')
  )?.name || 'Size';
};
/* ---------------------------------------- */

export function AddToCartModal(props) {
  const { colors } = useTheme();
  const { product } = props;

  const [selectedOptions, setSelectedOptions] = useState({});
  const [selectedVariant, setSelectedVariant] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const { viewRTLStyle } = useValues();

  const { addToCart } = useShopifyCart();

  if (!product) return null;

  /* Options */
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

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleQuantityChange = (text) => {
    const num = parseInt(text) || 1;
    if (num > 0) {
      setQuantity(num);
    }
  };

  const handleAddToCart = () => {
    if (!selectedVariant) {
      console.warn('No variant selected');
      return;
    }

    const cartItem = {
      ...product,
      merchandiseId: selectedVariant.id, // ✅ Variant ID
      image: selectedVariant.image || product.images?.[0]?.src, // ✅ Variant image
      quantity: quantity, // ✅ Selected quantity
      variantTitle: selectedVariant.title || '', // Optional: variant title
      selectedOptions: selectedOptions, // Optional: store selected options
    };

    addToCart(cartItem);
  };

  return (
    <View style={[GlobalStyle.modal, { backgroundColor: colors.background }]}>

      {/* Header */}
      <View style={styles.headerRow}>
        <Image
          source={{ uri: selectedVariant?.image || product.images?.[0]?.src }}
          style={styles.thumb}
        />

        {/* Title and Quantity Section */}
        {/* <View style={styles.titleQuantityContainer}> */}
        <Text style={[styles.title, { color: colors.text }]}>
          {product.title}
        </Text>

        {/* Quantity Selector */}
        <View style={[styles.quantityContainer, { borderColor: colors.border || '#E0E0E0' }]}>
          <TouchableOpacity
            style={styles.quantityButton}
            onPress={handleDecrement}
          >
            <Icon name="minus" size={16} color={colors.text} />
          </TouchableOpacity>

          <TextInput
            style={[styles.quantityInput, { color: colors.text }]}
            value={String(quantity)}
            onChangeText={handleQuantityChange}
            keyboardType="number-pad"
            maxLength={3}
          />

          <TouchableOpacity
            style={styles.quantityButton}
            onPress={handleIncrement}
          >
            <Icon name="plus" size={16} color={colors.text} />
          </TouchableOpacity>
        </View>
        {/* </View> */}
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

      <View style={[styles.rowContainer, { backgroundColor: appColors.primary, flexDirection: viewRTLStyle, flex: 1, borderRadius: windowWidth(60), justifyContent: 'center' }]}>
        <Cart color='#fff' />
        <TouchableOpacity onPress={handleAddToCart}>
          <Text style={[styles.cartText, { color: '#fff' }]}>
            Add to Quote
          </Text>
        </TouchableOpacity>
      </View>

    </View>
  );
}