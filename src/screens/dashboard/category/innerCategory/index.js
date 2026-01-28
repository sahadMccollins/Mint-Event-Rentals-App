import React, { useState } from 'react';
import { ScrollView, View } from 'react-native';
import { Header } from '@commonComponents';
import { useTranslation } from 'react-i18next';
import Data from '@utils/json';
import { useTheme } from '@react-navigation/native';
import styles from './styles';
import TrendingCategory from '../../search/trendingCategory';
import Brands from '@otherComponent/topBrands';
import Category from './category';
import SubCategory from './subCategory';
import CategoryNew from './categoryNew';
import { SafeAreaView } from 'react-native-safe-area-context';

export function innerCategory({ navigation, route }) {
  const { t } = useTranslation();
  const subCategory = Data.subCategory;
  const { categoryName, categoryDesc, categoryImage } = route.params || {};
  const { colors } = useTheme();

  const matchedSubCategory = subCategory?.find(
    item => t(item.name) === categoryName || item.name === categoryName
  );

  // const innerSubCategories = matchedSubCategory?.innerCat || [];


  return (
    <SafeAreaView>
      <Header
        showIcon
        showWishListIcon
        text={categoryName}
        navigation={navigation}
      // notificationIcon
      // searchIcon
      />
      <ScrollView
        contentContainerStyle={styles.scroll}
        showsVerticalScrollIndicator={false}>
        <View style={{ height: 15 }} />
        <CategoryNew colors={colors} t={t} title={matchedSubCategory?.title} content={matchedSubCategory?.content} collectionId={matchedSubCategory?.collectionId} totalProducts={matchedSubCategory?.totalProducts} bgImage={matchedSubCategory?.bgImage} navigation={navigation} />
        <SubCategory colors={colors} t={t} navigation={navigation} data={matchedSubCategory?.innerCat || []} />
      </ScrollView>
    </SafeAreaView>
  );
}
