// import React, { useState, useEffect, useCallback } from 'react';
// import { ScrollView, View, ActivityIndicator, FlatList, StyleSheet, Image, TouchableOpacity, Text } from 'react-native';
// import { useTheme } from '@react-navigation/native';
// import { Header } from '@commonComponents';
// import { useTranslation } from 'react-i18next';
// import SearchBar from '@commonComponents/searchBar';
// import { Product } from '@commonComponents';
// import Categorys from './categorys';
// import Filter from './filter';
// import { SafeAreaView } from 'react-native-safe-area-context';
// import { fetchGraphQL } from '../../../../utils/fetchGraphql';
// import { fontSizes, windowHeight, windowWidth } from '@theme/appConstant';
// import { CommonModal, SortBy } from '@otherComponent';

// /** ------------------------------------------------------------------
//  * NETWORK – GraphQL helper
//  * ------------------------------------------------------------------*/
// const fetchProductsFromShopify = async (
//   cursor,
//   sortKey = 'RELEVANCE',
//   reverse = false,
//   selectedTypes,
//   selectedBrands,
// ) => {
//   const sortParam = reverse ? `, sortKey: ${sortKey}, reverse: true` : `, sortKey: ${sortKey}`;
//   let filterQuery = '';

//   if (selectedTypes && selectedTypes.length > 0) {
//     const types = selectedTypes.map(t => `product_type:'${t}'`).join(' OR ');
//     filterQuery += `${types}`;
//   }

//   if (selectedBrands && selectedBrands.length > 0) {
//     const brands = selectedBrands.map(v => `vendor:'${v}'`).join(' OR ');
//     filterQuery += ` ${brands}`;
//   }

//   const queryParam = filterQuery ? `, query: "${filterQuery}"` : '';

//   const query = `
//   {
//     products(first: 20${cursor ? `, after: \"${cursor}\"` : ''}${sortParam}${queryParam}) {
//       pageInfo { hasNextPage }
//       edges {
//         cursor
//         node {
//           id
//           title
//           description
//           tags
//           productType
//           vendor
//           availableForSale
//           priceRange { minVariantPrice { amount } }
//           compareAtPriceRange { maxVariantPrice { amount } }
//           images(first: 1) { edges { node { transformedSrc } } }
//           options {
//             name
//             values
//           }
//           variants(first: 20) { edges { node { 
//             id
//             availableForSale
//             title
//             image { transformedSrc }
//             selectedOptions {
//               name
//               value
//             }
//           } } }
//         }
//       }
//     }
//   }`;

//   try {
//     const res = await fetchGraphQL(query);
//     const edges = res.data.products.edges;
//     const hasNextPage = res.data.products.pageInfo.hasNextPage;

//     const products = edges.map(edge => ({
//       id: edge.node.id,
//       title: edge.node.title,
//       description: edge.node.description,
//       tags: edge.node.tags,
//       productType: edge.node.productType,
//       vendor: edge.node.vendor,
//       price: edge.node.priceRange.minVariantPrice.amount,
//       oldPrice: edge.node.compareAtPriceRange.maxVariantPrice.amount,
//       image: edge.node.images.edges[0]?.node.transformedSrc,
//       options: edge.node.options,
//       available: edge.node.availableForSale,
//       productTags: edge.node.tags,
//       cursor: edge.cursor,

//       // ✅ ADD VARIANTS HERE
//       variants: edge.node.variants.edges.map(v => ({
//         id: v.node.id,
//         title: v.node.title,
//         available: v.node.availableForSale,
//         image: v.node.image?.transformedSrc ?? null,
//         selectedOptions: v.node.selectedOptions,
//       })),

//       // // Optional default variant (useful for cart)
//       // merchandiseId: edge.node.variants.edges[0]?.node.id,
//     }));

//     console.log("hasnextpage", hasNextPage, "edge", edges.at(-1)?.cursor)


//     return { products, hasNextPage, endCursor: edges.at(-1)?.cursor ?? null };
//   } catch (err) {
//     console.error('Failed to fetch products:', err);
//     return { products: [], hasNextPage: false, endCursor: null };
//   }
// };


// const fetchProductTypesFromShopify = async () => {

//   const query = `
//     query {
//         productTypes(first: 100) {
//             nodes
//         }   
//     }`;

//   try {
//     const res = await fetchGraphQL(query);
//     const types = res.data.productTypes.nodes;
//     return types;
//   } catch (err) {
//     console.error('Failed to fetch products:', err);
//     return null;
//   }
// };


// /** ------------------------------------------------------------------
//  * COMPONENT
//  * ------------------------------------------------------------------*/
// export default function ShopPage({ navigation }) {
//   const colors = useTheme();
//   const { t } = useTranslation();
//   const [modalVisible, setModalVisible] = useState(false);
//   const [showModal, setShowModal] = useState(false);

//   // Product fetching state
//   const [loading, setLoading] = useState(false);
//   const [loadingMore, setLoadingMore] = useState(false);
//   const [products, setProducts] = useState([]);
//   const [productsTypes, setProductsTypes] = useState([]);
//   const [hasNextPage, setHasNextPage] = useState(false);
//   const [endCursor, setEndCursor] = useState(null);

//   // Filter state
//   const [selectedTypes, setSelectedTypes] = useState([]);
//   const [selectedBrands, setSelectedBrands] = useState([]);
//   const [appliedTypes, setAppliedTypes] = useState([]);
//   const [appliedBrands, setAppliedBrands] = useState([]);

//   // Sort state
//   const [sort, setSort] = useState({
//     sortKey: 'RELEVANCE',
//     reverse: false,
//   });

//   const visibleModal = () => {
//     setShowModal(!showModal);
//   };

//   // Fetch products on filter/sort change
//   useEffect(() => {
//     const loadProducts = async () => {
//       setLoading(true);
//       const res = await fetchProductsFromShopify(
//         undefined,
//         sort.sortKey,
//         sort.reverse,
//         appliedTypes,
//         appliedBrands
//       );
//       setProducts(res.products);
//       setHasNextPage(res.hasNextPage);
//       setEndCursor(res.endCursor);
//       setLoading(false);
//     };

//     loadProducts();
//   }, [sort, appliedTypes, appliedBrands]);

//   useEffect(() => {
//     // Fetch product types for filter options
//     const loadProductTypes = async () => {
//       const res = await fetchProductTypesFromShopify();
//       setProductsTypes(res);
//     };

//     loadProductTypes();
//   }, []);

//   // Load more products for pagination
//   const loadMoreProducts = useCallback(async () => {
//     if (!hasNextPage || loadingMore) return;
//     setLoadingMore(true);
//     const res = await fetchProductsFromShopify(
//       endCursor,
//       sort.sortKey,
//       sort.reverse,
//       appliedTypes,
//       appliedBrands
//     );
//     setProducts(prev => [...prev, ...res.products]);
//     setHasNextPage(res.hasNextPage);
//     setEndCursor(res.endCursor);
//     setLoadingMore(false);
//   }, [hasNextPage, loadingMore, endCursor, sort.sortKey, sort.reverse, appliedTypes, appliedBrands]);

//   const onFilterPress = () => {
//     setModalVisible(!modalVisible);
//   };

//   const renderFooter = () => {
//     if (!loadingMore) return null;
//     return (
//       <View style={{ paddingVertical: 24 }}>
//         <ActivityIndicator size="large" color={colors.primary} />
//       </View>
//     );
//   };

//   const handleShowResults = () => {
//     setAppliedTypes(selectedTypes);
//     setAppliedBrands(selectedBrands);
//     setModalVisible(false);
//   };

//   const toggleCheckbox = (item, type) => {
//     if (type === 'productType') {
//       setSelectedTypes(prev =>
//         prev.includes(item) ? prev.filter(i => i !== item) : [...prev, item]
//       );
//     } else {
//       setSelectedBrands(prev =>
//         prev.includes(item) ? prev.filter(i => i !== item) : [...prev, item]
//       );
//     }
//   };

//   const toggleSortKey = (value, reverse = false) => {
//     setSort({ sortKey: value, reverse });
//     visibleModal();
//   };

//   const resetFilters = () => {
//     setSelectedTypes([]);
//     setSelectedBrands([]);
//   }

//   return (
//     <SafeAreaView style={{ flex: 1 }}>
//       <Header
//         text={t('paymentCard.allCollection')}
//         showText
//         showIcon
//         // notificationIcon
//         showWishListIcon
//         subText={t('shopPage.numProducts')}
//         navigation={navigation}
//       />

//       <View style={styles.filterSortContainer}>
//         <TouchableOpacity style={styles.halfBox} onPress={onFilterPress}>
//           <Image source={{ uri: "https://cdn.shopify.com/s/files/1/0760/7743/3044/files/filter.png?v=1767333261https://cdn.shopify.com/s/files/1/0760/7743/3044/files/filter.png?v=1767333261" }} style={[styles.icon]} />
//           <Text style={[styles.label]}>{t("filters.title")}</Text>
//         </TouchableOpacity>

//         <TouchableOpacity style={[styles.halfBox, styles.noBorder]} onPress={visibleModal}>
//           <Text style={[styles.label]}>{t("sortBy.title")}</Text>
//           <Image source={{ uri: "https://cdn.shopify.com/s/files/1/0760/7743/3044/files/arrow-down.png?v=1767333261" }} style={[styles.icon]} />
//         </TouchableOpacity>
//       </View>

//       {loading ? (
//         <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//           <ActivityIndicator size="large" color={colors.primary} />
//         </View>
//       ) : (
//         <View style={{ flex: 1 }}>
//           <View style={{ marginTop: windowHeight(3) }} />
//           <View style={{
//             flex: 1,
//             width: '100%',
//             alignItems: 'center',
//             justifyContent: 'center',
//           }}>
//             <FlatList
//               numColumns={2}
//               columnWrapperStyle={{
//                 justifyContent: 'space-between',
//                 marginHorizontal: windowWidth(16),
//                 marginTop: windowHeight(20),
//               }}
//               data={products}
//               ItemSeparatorComponent={() => <View style={{
//                 backgroundColor: 'red',
//                 width: '30%',
//               }} />}
//               keyExtractor={(item, index) => index.toString()}
//               renderItem={({ item }) => (
//                 <Product
//                   product={item}
//                   t={t}
//                   disc
//                   width={"50%"}
//                   navigation={navigation}
//                 />
//               )}

//               onEndReached={loadMoreProducts}
//               onEndReachedThreshold={0.5}
//               ListFooterComponent={renderFooter}
//               scrollEventThrottle={16}
//             />
//           </View>
//         </View>
//       )}

//       <Filter
//         t={t}
//         modalVisible={modalVisible}
//         setModalVisible={setModalVisible}
//         selectedTypes={selectedTypes}
//         selectedBrands={selectedBrands}
//         onToggleCheckbox={toggleCheckbox}
//         onShowResults={handleShowResults}
//         productTypes={productsTypes}
//         resetFilters={resetFilters}
//       />
//       <CommonModal
//         modal={
//           <SortBy
//             onPress={visibleModal}
//             navigation={navigation}
//             t={t}
//             from="shopPage"
//             toggleSortKey={toggleSortKey}
//             currentSort={sort}
//           />
//         }
//         showModal={showModal}
//         visibleModal={visibleModal}
//       />
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   filterSortContainer: {
//     flexDirection: 'row',
//     borderTopWidth: 1,
//     borderBottomWidth: 1,
//     borderColor: '#ddd',
//     marginTop: windowHeight(3),
//   },
//   halfBox: {
//     flex: 1,
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'center',
//     paddingVertical: 12,
//     borderRightWidth: 1,
//     borderColor: '#ddd',
//   },
//   icon: {
//     width: 20,
//     height: 20,
//     marginRight: 8,
//     marginLeft: 8,
//     resizeMode: 'contain',
//   },
//   label: {
//     fontSize: fontSizes.FONT18,
//     // fontWeight: '500',
//   },
// });




import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { ScrollView, View, ActivityIndicator, FlatList, StyleSheet, Image, TouchableOpacity, Text } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { Header } from '@commonComponents';
import { useTranslation } from 'react-i18next';
import SearchBar from '@commonComponents/searchBar';
import { Product } from '@commonComponents';
import Categorys from './categorys';
import Filter from './filter';
import { SafeAreaView } from 'react-native-safe-area-context';
import { fetchGraphQL } from '../../../../utils/fetchGraphql';
import { fontSizes, windowHeight, windowWidth } from '@theme/appConstant';
import { CommonModal, SortBy, AddToCartModal } from '@otherComponent';

/** ------------------------------------------------------------------
 * CONSTANTS
 * ------------------------------------------------------------------*/
const PRODUCTS_PER_PAGE = 20;
const PRODUCT_TYPES_LIMIT = 100;
const FILTER_ICON_URL = "https://cdn.shopify.com/s/files/1/0760/7743/3044/files/filter.png?v=1767333261";
const SORT_ICON_URL = "https://cdn.shopify.com/s/files/1/0760/7743/3044/files/arrow-down.png?v=1767333261";

/** ------------------------------------------------------------------
 * NETWORK – GraphQL helper
 * ------------------------------------------------------------------*/
const fetchProductsFromShopify = async (
  cursor,
  sortKey = 'TITLE',
  reverse = false,
  selectedTypes = [],
  selectedBrands = [],
) => {
  const sortParam = reverse ? `, sortKey: ${sortKey}, reverse: true` : `, sortKey: ${sortKey}`;

  // Build filter query more efficiently
  const filters = [
    ...selectedTypes.map(t => `product_type:'${t}'`),
    ...selectedBrands.map(v => `vendor:'${v}'`),
  ];
  const filterQuery = filters.length > 0 ? filters.join(' OR ') : '';
  const queryParam = filterQuery ? `, query: "${filterQuery}"` : '';

  const query = `{
    products(first: ${PRODUCTS_PER_PAGE}${cursor ? `, after: "${cursor}"` : ''}${sortParam}${queryParam}) {
      pageInfo { hasNextPage }
      edges {
        cursor
        node {
          id
          title
          description
          tags
          productType
          vendor
          availableForSale
          priceRange { minVariantPrice { amount } }
          compareAtPriceRange { maxVariantPrice { amount } }
          images(first: 1) { edges { node { transformedSrc } } }
          options { name values }
          variants(first: 20) {
            edges {
              node {
                id
                availableForSale
                title
                image { transformedSrc }
                selectedOptions { name value }
              }
            }
          }
        }
      }
    }
  }`;

  try {
    const res = await fetchGraphQL(query);
    const edges = res.data.products.edges;
    const hasNextPage = res.data.products.pageInfo.hasNextPage;

    const products = edges.map(edge => {
      const node = edge.node;
      return {
        id: node.id,
        title: node.title,
        description: node.description,
        tags: node.tags,
        productType: node.productType,
        vendor: node.vendor,
        price: node.priceRange.minVariantPrice.amount,
        oldPrice: node.compareAtPriceRange.maxVariantPrice.amount,
        image: node.images.edges[0]?.node.transformedSrc,
        options: node.options,
        available: node.availableForSale,
        productTags: node.tags,
        cursor: edge.cursor,
        variants: node.variants.edges.map(v => ({
          id: v.node.id,
          title: v.node.title,
          available: v.node.availableForSale,
          image: v.node.image?.transformedSrc ?? null,
          selectedOptions: v.node.selectedOptions,
        })),
      };
    });

    return { products, hasNextPage, endCursor: edges.at(-1)?.cursor ?? null };
  } catch (err) {
    console.error('Failed to fetch products:', err);
    return { products: [], hasNextPage: false, endCursor: null };
  }
};

const fetchProductTypesFromShopify = async () => {
  const query = `query { productTypes(first: ${PRODUCT_TYPES_LIMIT}) { nodes } }`;

  try {
    const res = await fetchGraphQL(query);

    return res.data.productTypes.nodes
      .map(type => type.trim())        // remove extra spaces
      .filter(type => type.length > 0); // remove empty strings
  } catch (err) {
    console.error('Failed to fetch product types:', err);
    return [];
  }
};

/** ------------------------------------------------------------------
 * COMPONENT
 * ------------------------------------------------------------------*/
export default function ShopPage({ navigation }) {
  const colors = useTheme();
  const { t } = useTranslation();
  const [modalVisible, setModalVisible] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showAddToCartModal, setShowAddToCartModal] = useState(false);

  // Product fetching state
  const [loading, setLoading] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);
  const [products, setProducts] = useState([]);
  const [productsTypes, setProductsTypes] = useState([]);
  const [hasNextPage, setHasNextPage] = useState(false);
  const [endCursor, setEndCursor] = useState(null);

  // Filter state
  const [selectedTypes, setSelectedTypes] = useState([]);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [appliedTypes, setAppliedTypes] = useState([]);
  const [appliedBrands, setAppliedBrands] = useState([]);

  // Selected product state
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Sort state
  const [sort, setSort] = useState({
    sortKey: 'TITLE',
    reverse: false,
  });

  const visibleModal = useCallback(() => {
    setShowModal(prev => !prev);
  }, []);

  const visibleAddToCartModal = useCallback(() => {
    setShowAddToCartModal(prev => !prev);
    // Clear data when closing
    if (showAddToCartModal) {
      setSelectedProduct(null);
    }
  }, [showAddToCartModal]);

  // Fetch products on filter/sort change
  useEffect(() => {
    const loadProducts = async () => {
      setLoading(true);
      const res = await fetchProductsFromShopify(
        undefined,
        sort.sortKey,
        sort.reverse,
        appliedTypes,
        appliedBrands
      );
      setProducts(res.products);
      setHasNextPage(res.hasNextPage);
      setEndCursor(res.endCursor);
      setLoading(false);
    };

    loadProducts();
  }, [sort, appliedTypes, appliedBrands]);

  useEffect(() => {
    // Fetch product types for filter options
    const loadProductTypes = async () => {
      const res = await fetchProductTypesFromShopify();
      setProductsTypes(res);
    };

    loadProductTypes();
  }, []);

  // Load more products for pagination
  const loadMoreProducts = useCallback(async () => {
    if (!hasNextPage || loadingMore) return;
    setLoadingMore(true);
    const res = await fetchProductsFromShopify(
      endCursor,
      sort.sortKey,
      sort.reverse,
      appliedTypes,
      appliedBrands
    );
    setProducts(prev => [...prev, ...res.products]);
    setHasNextPage(res.hasNextPage);
    setEndCursor(res.endCursor);
    setLoadingMore(false);
  }, [hasNextPage, loadingMore, endCursor, sort, appliedTypes, appliedBrands]);

  const onFilterPress = useCallback(() => {
    setModalVisible(prev => !prev);
  }, []);

  const renderFooter = useCallback(() => {
    if (!loadingMore) return null;
    return (
      <View style={{ paddingVertical: 24 }}>
        <ActivityIndicator size="large" color={colors.primary} />
      </View>
    );
  }, [loadingMore, colors.primary]);

  const handleShowResults = useCallback(() => {
    setAppliedTypes(selectedTypes);
    setAppliedBrands(selectedBrands);
    setModalVisible(false);
  }, [selectedTypes, selectedBrands]);

  const toggleCheckbox = useCallback((item, type) => {
    if (type === 'productType') {
      setSelectedTypes(prev =>
        prev.includes(item) ? prev.filter(i => i !== item) : [...prev, item]
      );
    } else {
      setSelectedBrands(prev =>
        prev.includes(item) ? prev.filter(i => i !== item) : [...prev, item]
      );
    }
  }, []);

  const toggleSortKey = useCallback((value, reverse = false) => {
    setSort({ sortKey: value, reverse });
    visibleModal();
  }, [visibleModal]);

  const resetFilters = useCallback(() => {
    setSelectedTypes([]);
    setSelectedBrands([]);
  }, []);

  const columnWrapperStyle = useMemo(() => ({
    justifyContent: 'space-between',
    marginHorizontal: windowWidth(16),
    marginTop: windowHeight(20),
  }), []);

  const renderProduct = useCallback(({ item }) => (
    <Product
      product={item}
      t={t}
      disc
      width={"50%"}
      navigation={navigation}
      onAddToCart={(product) => {
        setSelectedProduct(product);
        visibleAddToCartModal();
      }}
    />
  ), [t, navigation, visibleAddToCartModal]);

  const keyExtractor = useCallback((item, index) => item.id + index, []);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Header
        text={t('paymentCard.allCollection')}
        showText
        showIcon
        showWishListIcon
        subText={t('shopPage.numProducts')}
        navigation={navigation}
      />

      <View style={styles.filterSortContainer}>
        <TouchableOpacity style={styles.halfBox} onPress={onFilterPress}>
          <Image source={{ uri: FILTER_ICON_URL }} style={[styles.icon]} />
          <Text style={[styles.label]}>{t("filters.title")}</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.halfBox, styles.noBorder]} onPress={visibleModal}>
          <Text style={[styles.label]}>{t("sortBy.title")}</Text>
          <Image source={{ uri: SORT_ICON_URL }} style={[styles.icon]} />
        </TouchableOpacity>
      </View>

      {loading ? (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <ActivityIndicator size="large" color={colors.primary} />
        </View>
      ) : (
        <View style={{ flex: 1 }}>
          <View style={{ marginTop: windowHeight(3) }} />
          <View style={{
            flex: 1,
            width: '100%',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
            <FlatList
              numColumns={2}
              columnWrapperStyle={columnWrapperStyle}
              data={products}
              keyExtractor={keyExtractor}
              renderItem={renderProduct}
              onEndReached={loadMoreProducts}
              onEndReachedThreshold={0.5}
              ListFooterComponent={renderFooter}
              scrollEventThrottle={16}
              removeClippedSubviews
              maxToRenderPerBatch={10}
              updateCellsBatchingPeriod={50}
            />
          </View>
        </View>
      )}

      <Filter
        t={t}
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        selectedTypes={selectedTypes}
        selectedBrands={selectedBrands}
        onToggleCheckbox={toggleCheckbox}
        onShowResults={handleShowResults}
        productTypes={productsTypes}
        resetFilters={resetFilters}
      />
      <CommonModal
        modal={
          <SortBy
            onPress={visibleModal}
            navigation={navigation}
            t={t}
            from="shopPage"
            toggleSortKey={toggleSortKey}
            currentSort={sort}
          />
        }
        showModal={showModal}
        visibleModal={visibleModal}
      />
      <CommonModal
        modal={
          <AddToCartModal
            onPress={visibleAddToCartModal}
            navigation={navigation}
            t={t}
            from="shopPage"
            product={selectedProduct}
          />
        }
        showModal={showAddToCartModal}
        visibleModal={visibleAddToCartModal}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  filterSortContainer: {
    flexDirection: 'row',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#ddd',
    marginTop: windowHeight(3),
  },
  halfBox: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    borderRightWidth: 1,
    borderColor: '#ddd',
  },
  noBorder: {
    borderRightWidth: 0,
  },
  icon: {
    width: 20,
    height: 20,
    marginRight: 8,
    marginLeft: 8,
    resizeMode: 'contain',
  },
  label: {
    fontSize: fontSizes.FONT18,
  },
});