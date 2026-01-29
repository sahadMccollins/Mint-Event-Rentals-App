// import React, { useEffect, useRef, useState } from 'react';
// import { ActivityIndicator, Image, ScrollView, Text, View } from 'react-native';
// import { Header, Divider, } from '@commonComponents';
// import { windowHeight, windowWidth, fontSizes } from '@theme/appConstant';
// import { useTranslation } from 'react-i18next';
// import { useRoute, useTheme } from '@react-navigation/native';
// import Slider from './slider';
// import ProductDescription from './productDescription';
// import SizeSection from './sizeSection';
// import ColorSection from './colorSection';
// import QuantitySection from './quantitySection';
// import OfferSection from './offerSection';
// import PolicySection from './policySection';
// import ProductDetail from './productDetail';
// import ReViewSection from './reviewSection';
// import CheckDelivery from './checkDelivery';
// import { CommonModal, PriceOnRequestModal } from '@otherComponent';
// import YouMayLike from '../cart/youMayLike';
// import ButtonContainer from './ButtonContainer';
// import { SafeAreaView } from 'react-native-safe-area-context';
// import { useShopifyProduct } from '../../../hooks/useShopifyProduct';

// export default function product({ navigation }) {
//   const { t } = useTranslation();
//   const { colors } = useTheme();
//   const route = useRoute();
//   const scrollViewRef = useRef(null);

//   const {
//     fetchProductData,
//     product,
//     loading
//   } = useShopifyProduct();

//   const [showLoginModal, setShowLoginModal] = useState(false);
//   const [selectedColor, setSelectedColor] = useState(0);
//   const [selectedVariantId, setSelectedVariantId] = useState(null);
//   const [selectedVariantTitle, setSelectedVariantTitle] = useState('');
//   const [submitting, setSubmitting] = useState(false);

//   // Fetch product
//   useEffect(() => {
//     const newProductId = route.params?.productId;
//     if (newProductId) {
//       fetchProductData(newProductId);
//       setTimeout(() => {
//         scrollViewRef.current?.scrollTo({ y: 0, animated: true });
//       }, 100);
//     }
//   }, [route.params?.productId]);

//   // Auto select first variant
//   useEffect(() => {
//     if (product?.variants?.length) {
//       setSelectedVariantId(product.variants[0].id);
//       setSelectedVariantTitle(product.variants[0].title);
//     }
//   }, [product]);

//   // ✅ NOW SAFE TO RETURN LOADER
//   if (loading && !product) {
//     return (
//       <SafeAreaView style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
//         <ActivityIndicator size="large" color={colors.primary || "#000"} />
//       </SafeAreaView>
//     );
//   }

//   const visibleLoginModal = () => {
//     setShowLoginModal(!showLoginModal);
//   };

//   console.log("memaw", product);

//   return (
//     <SafeAreaView style={{ paddingBottom: windowHeight(48) }}>
//       <Header
//         text={product?.title}
//         showWishListIcon
//         showText
//         textStyle={{ marginTop: windowHeight(15) }}
//         showIcon
//         navigation={navigation}
//       />

//       <ScrollView
//         contentContainerStyle={{ paddingBottom: windowHeight(40) }}
//         style={{ backgroundColor: colors.card }}
//         keyboardShouldPersistTaps={true}
//         ref={scrollViewRef}
//       >
//         <Slider images={product?.images} t={t} colors={colors} selectedColor={selectedColor} />
//         <View style={{ height: windowHeight(30) }} />
//         <ProductDescription colors={colors} t={t} product={product} />

//         <View style={{ height: 1, backgroundColor: '#ededed', marginHorizontal: windowWidth(22), marginTop: windowHeight(10) }} />

//         <ProductDetail
//           t={t}
//           productDescription={product?.descriptionHtml}
//           specifications={product?.specificationValues}
//           colors={colors}
//         />

//         {product?.variants?.length > 1 && (
//           <ColorSection
//             t={t}
//             colors={colors}
//             variants={product?.variants}
//             setVariantId={setSelectedVariantId}
//             setVariantTitle={setSelectedVariantTitle}
//             selectedVariantTitle={selectedVariantTitle}
//             marginVertical={windowHeight(20)}
//           />
//         )}

//         <QuantitySection t={t} colors={colors} />

//       </ScrollView>

//       <ButtonContainer item={product} navigation={navigation} t={t} colors={colors} visibleLoginModal={visibleLoginModal} />
//       <CommonModal
//         modal={
//           <PriceOnRequestModal
//             onCancel={visibleLoginModal}
//             navigation={navigation}
//             from={product?.title}
//             setSubmitting={setSubmitting}
//             submitting={submitting}
//           />
//         }
//         showModal={showLoginModal}
//         visibleModal={visibleLoginModal}
//       />
//     </SafeAreaView>
//   );
// }


import React, { useEffect, useRef, useState } from 'react';
import { ActivityIndicator, ScrollView, View } from 'react-native';
import { Header } from '@commonComponents';
import { windowHeight } from '@theme/appConstant';
import { useTranslation } from 'react-i18next';
import { useRoute, useTheme } from '@react-navigation/native';
import Slider from './slider';
import ProductDescription from './productDescription';
import SizeSection from './sizeSection';
import ColorSection from './colorSection';
import QuantitySection from './quantitySection';
import ProductDetail from './productDetail';
import { CommonModal, PriceOnRequestModal } from '@otherComponent';
import ButtonContainer from './ButtonContainer';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useShopifyProduct } from '../../../hooks/useShopifyProduct';

/* ------------------ helpers ------------------ */
const getOptionValues = (product, name) =>
  product?.options?.find(o => o.name === name)?.values || [];

const findVariant = (variants, selected) =>
  variants.find(v =>
    v.selectedOptions.every(
      opt => selected[opt.name] === opt.value
    )
  );
/* --------------------------------------------- */

export default function Product({ navigation }) {
  const { t } = useTranslation();
  const { colors } = useTheme();
  const route = useRoute();
  const scrollViewRef = useRef(null);

  const { fetchProductData, product, loading } = useShopifyProduct();

  const [selectedOptions, setSelectedOptions] = useState({});
  const [selectedVariant, setSelectedVariant] = useState(null);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [numQuantity, setNumQuantity] = useState(1);

  /* Fetch product */
  useEffect(() => {
    if (route.params?.productId) {
      fetchProductData(route.params.productId);
      scrollViewRef.current?.scrollTo({ y: 0, animated: true });
    }
  }, [route.params?.productId]);

  /* Init default variant */
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

  if (loading && !product) {
    return (
      <SafeAreaView style={{ flex: 1, justifyContent: 'center' }}>
        <ActivityIndicator size="large" color={colors.primary} />
      </SafeAreaView>
    );
  }

  /* Options */
  const colorsList = getOptionValues(product, 'Color');
  const sizesList =
    getOptionValues(product, 'Table Size') ||
    getOptionValues(product, 'Size');

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
    const next = { ...selectedOptions, 'Table Size': size };
    const variant = findVariant(product.variants, next);
    if (variant) {
      setSelectedOptions(next);
      setSelectedVariant(variant);
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, paddingBottom: windowHeight(48) }}>
      <Header
        text={product?.title}
        // showText
        showIcon
        navigation={navigation}
      />

      <ScrollView
        ref={scrollViewRef}
        contentContainerStyle={{ paddingBottom: windowHeight(40) }}
      >
        <Slider images={product?.images} t={t} colors={colors} />

        <ProductDescription product={product} t={t} colors={colors} />
        <ProductDetail
          productDescription={product?.descriptionHtml}
          colors={colors}
        />

        {colorsList.length > 0 && (
          <ColorSection
            colors={colors}
            options={colorsList}
            selected={selectedOptions.Color}
            onSelect={onColorSelect}
          />
        )}

        {sizesList.length > 0 && (
          <SizeSection
            sizes={sizesList}
            selected={selectedOptions['Table Size']}
            onSelect={onSizeSelect}
          />
        )}

        <QuantitySection t={t} colors={colors} numQuantity={numQuantity} setNumQuantity={setNumQuantity} />
      </ScrollView>

      {/* ✅ Pass selectedVariant, numQuantity, and selectedOptions to ButtonContainer */}
      <ButtonContainer
        item={product}
        navigation={navigation}
        t={t}
        colors={colors}
        selectedVariant={selectedVariant}
        numQuantity={numQuantity}
        selectedOptions={selectedOptions}
      />

      {/* <CommonModal
        modal={
          <PriceOnRequestModal
            onCancel={() => setShowLoginModal(false)}
            submitting={submitting}
            setSubmitting={setSubmitting}
          />
        }
        showModal={showLoginModal}
        visibleModal={() => setShowLoginModal(!showLoginModal)}
      /> */}
    </SafeAreaView>
  );
}