import React, { useState, useEffect, useCallback, useMemo } from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
  StyleSheet,
  Dimensions,
  Image,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useValues } from '@App';
import { Product } from '@commonComponents';
import { fetchGraphQL } from '../../../../utils/fetchGraphql';
import { fontSizes, windowHeight, windowWidth } from '@theme/appConstant';

const PRODUCTS_PER_PAGE = 10;

/** ------------------------------------------------------------------
 * NETWORK – GraphQL helper
 * ------------------------------------------------------------------*/
const fetchProductsFromCollection = async (collectionId) => {
  const query = `{
    collection(id: "${collectionId}") {
      products(first: ${PRODUCTS_PER_PAGE}) {
        edges {
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
    }
  }`;

  try {
    const res = await fetchGraphQL(query);
    const edges = res.data.collection.products.edges;

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
        variants: node.variants.edges.map(v => ({
          id: v.node.id,
          title: v.node.title,
          available: v.node.availableForSale,
          image: v.node.image?.transformedSrc ?? null,
          selectedOptions: v.node.selectedOptions,
        })),
      };
    });

    return products;
  } catch (err) {
    console.error('Failed to fetch products:', err);
    return [];
  }
};

/** ------------------------------------------------------------------
 * COMPONENT
 * ------------------------------------------------------------------*/
const FeaturedCollection = props => {
  const { collectionId, navigation, colors, t } = props;
  const { textRTLStyle, viewRTLStyle } = useValues();

  // State
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  // Fetch products on mount or when collectionId changes
  useEffect(() => {
    if (!collectionId) return;

    const loadProducts = async () => {
      setLoading(true);
      const fetchedProducts = await fetchProductsFromCollection(collectionId);
      setProducts(fetchedProducts);
      setLoading(false);
    };

    loadProducts();
  }, [collectionId]);

  // Memoized column wrapper style
  const columnWrapperStyle = useMemo(() => ({
    justifyContent: 'flex-start',
    marginTop: windowHeight(13),
    gap: 8,
  }), []);

  // Memoized product renderer
  const renderProduct = useCallback(({ item }) => (
    <Product
      product={item}
      t={t}
      disc
      width={"50%"}
      navigation={navigation}
    />
  ), [t, navigation]);

  // Key extractor
  const keyExtractor = useCallback((item) => item.id, []);

  // Show loading state
  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color={colors?.primary || '#000'} />
      </View>
    );
  }

  // Show empty state
  if (products.length === 0) {
    return null; // Don't show section if no products
  }

  return (
    <View style={[styles.mainView, viewRTLStyle]}>
      {/* Title */}
      <Text
        style={[
          styles.kidsCorner,
          textRTLStyle,
        ]}
      >
        Featured Collections
      </Text>

      {/* View all button */}
      <TouchableOpacity style={styles.row} onPress={() => {
        navigation.navigate('ShopPageCollection', {
          collectionId: collectionId,
        });
      }} >
        <Text style={[styles.seeAll, { color: props.colors.text }]}>
          View all
        </Text>

        <View style={styles.arrowView} >
          <Ionicons name="chevron-forward" size={14} color="#333" />
        </View>
      </TouchableOpacity>

      {/* Products Grid - First 10 only, no pagination */}
      <FlatList
        numColumns={2}
        columnWrapperStyle={columnWrapperStyle}
        data={products}
        keyExtractor={keyExtractor}
        renderItem={renderProduct}
        scrollEventThrottle={16}
        removeClippedSubviews
        maxToRenderPerBatch={10}
        updateCellsBatchingPeriod={50}
        scrollEnabled={false}
      />
    </View>
  );
};

export default React.memo(FeaturedCollection);

const styles = StyleSheet.create({
  mainView: {
    marginVertical: windowHeight(20),
    // paddingHorizontal: windowWidth * 0.04,
  },
  kidsCorner: {
    fontSize: fontSizes.FONT25,
    fontWeight: 'bold',
    marginBottom: windowHeight(10),
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: windowWidth(10),
    paddingHorizontal: windowWidth(8),
    marginBottom: windowHeight(14),
  },

  seeAll: {
    fontSize: fontSizes.FONT16,
  },

  arrowView: {
    width: 22,
    height: 22,
    borderRadius: 11,
    backgroundColor: '#dedede',
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingContainer: {
    paddingVertical: windowHeight(20),
    justifyContent: 'center',
    alignItems: 'center',
  },
});

