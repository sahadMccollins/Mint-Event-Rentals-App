import React, { useEffect, useMemo } from 'react';
import { View, ScrollView, Image, Dimensions, Text, FlatList } from 'react-native';
import { HomeHeader, Divider } from '@commonComponents';
import { useTranslation } from 'react-i18next';
import { useTheme } from '@react-navigation/native';
import Category from './category';
import Slider from './slider';
import DealOfDay from './dealsOfDay';
import FindYourStyle from './findYourStyle';
import SaleStart from './saleStart';
import BiggestDeals from './biggestDeals';
import CollectionSection from './collectionSection';
import OurTestimonials from './ourTestimonials';
import KidsCorner from './KidsCorner';
import FeaturedCollection from './featuredCollection';
import OfferCorner from './offerCorner';
import styles from './style';
import { windowHeight, SCREEN_WIDTH } from '@theme/appConstant';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useCollections } from '../../../context/collectionContext';
import images from '../../../utils/images/images';

const COLLECTION_IDS = [
  "gid://shopify/Collection/439668539604",
  "gid://shopify/Collection/443266466004",
  "gid://shopify/Collection/443234615508",
  "gid://shopify/Collection/443234746580",
  "gid://shopify/Collection/439668572372",
  "gid://shopify/Collection/443235369172"
];

const DEALS_OF_DAY_ID = "gid://shopify/Collection/439668539604";
const NEW_ARRIVALS_ID = "gid://shopify/Collection/439668572372";

export function home(props) {
  const { t } = useTranslation();
  const { colors } = useTheme();
  const { collections, loading, error, fetchCollectionsById, refreshCollections } =
    useCollections();

  const dealsOfDayCollection = useMemo(() => {
    return collections.find(collection => collection.id === DEALS_OF_DAY_ID);
  }, [collections]);

  const newArrivalCollection = useMemo(() => {
    return collections.find(collection => collection.id === NEW_ARRIVALS_ID);
  }, [collections]);

  const goToSearch = () => {
    props.navigation.navigate('Search');
  };
  const goToNotification = () => {
    props.navigation.navigate('Notification');
  };
  const goToWishlist = () => {
    props.navigation.navigate('wishList');
  };
  const goToCart = () => {
    props.navigation.navigate('cart');
  };

  useEffect(() => {
    // fetchCollectionsById(COLLECTION_IDS);
  }, []);

  const SECTIONS = [
    { key: 'category', component: 'Category' },
    { key: 'divider1', component: 'Divider', height: windowHeight(8) },
    { key: 'slider', component: 'Slider' },
    { key: 'kidsCorner', component: 'KidsCorner' },
    { key: 'collectionSection', component: 'CollectionSection' },
    { key: 'spacer', component: 'Spacer', height: windowHeight(20) },
    { key: 'banner', component: 'Banner' },
    { key: 'biggestDeals', component: 'BiggestDeals' },
    { key: 'testimonials', component: 'OurTestimonials' },
    { key: 'featuredCollection', component: 'FeaturedCollection' },
    // { key: 'spacer', component: 'Spacer', height: windowHeight(10) },
  ];

  const renderItem = ({ item }) => {
    switch (item.component) {
      case 'Category':
        return <Category navigation={props.navigation} t={t} colors={colors} />;
      case 'Divider':
        return <Divider marginVertical={item.height} />;
      case 'Slider':
        return <Slider t={t} colors={colors} navigation={props.navigation} />;
      case 'KidsCorner':
        return (
          <KidsCorner
            loading={loading}
            t={t}
            navigation={props.navigation}
            colors={colors}
          />
        );
      case 'CollectionSection':
        return <CollectionSection navigation={props.navigation} t={t} colors={colors} />;
      case 'Banner':
        return (
          <View>
            <View style={styles.imageWrapper}>
              <Image
                source={images.deliverBanner}
                style={{
                  width: SCREEN_WIDTH,
                  height: SCREEN_WIDTH * 1,
                  resizeMode: 'cover',
                }}
                cacheControl="force-cache" />
              <View style={styles.overlay} />
            </View>
            <View style={styles.txtView}>
              <Text style={[styles.heading]}>
                Mint Event Rentals
              </Text>
              <Text style={[styles.title, { color: "#fff" }]}>
                We deliver on time,{'\n'}every time
              </Text>
              <Text style={[styles.content, { color: "#fff" }]}>
                Our commitment to delivering not just items, but experiences, ensures that each piece arrives with the utmost care and precision. The journey of your selected treasures is treated with the reverence they deserve, as they traverse from our collection to your curated setting. Each delivery is orchestrated with an attention to detail that mirrors the artistry found in haute couture, where every seam and stitch is a testament to craftsmanship.
              </Text>
            </View>
          </View>
        );
      case 'BiggestDeals':
        return <BiggestDeals navigation={props.navigation} t={t} colors={colors} />;
      case 'OurTestimonials':
        return <OurTestimonials navigation={props.navigation} t={t} colors={colors} />;
      case 'FeaturedCollection':
        return (
          <FeaturedCollection
            loading={loading}
            t={t}
            navigation={props.navigation}
            colors={colors}
          />
        );
      case 'Spacer':
        return <View style={{ marginBottom: item.height }} />;
      default:
        return null;
    }
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <HomeHeader
        navigationProps={props.navigation}
        searchPress={goToSearch}
        // wishlistPress={goToWishlist}
        cartPress={goToCart}
        navigation={props.navigation}
      />
      <FlatList
        data={SECTIONS}
        renderItem={renderItem}
        keyExtractor={(item) => item.key}
        showsVerticalScrollIndicator={false}
        removeClippedSubviews={true}
        initialNumToRender={4}
        maxToRenderPerBatch={2}
        windowSize={5}
      />
    </SafeAreaView>
  );
}
