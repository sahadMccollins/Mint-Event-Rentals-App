import React from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { Header } from '@commonComponents';
import { useTranslation } from 'react-i18next';
import Data from '@utils/json';
import styles from './style';
import { windowHeight } from '@theme/appConstant';
import { useTheme } from '@react-navigation/native';
import { useValues } from '@App';
import { SafeAreaView } from 'react-native-safe-area-context';

export function category({ navigation }) {
  const { t } = useTranslation();
  const category = Data.category;
  const { colors } = useTheme();
  const { isDark, textRTLStyle } = useValues();

  const goToScreen = () => {
    navigation.navigate('cart');
  };

  return (
    <SafeAreaView>
      <Header
        showIcon
        text={t('category.categories')}
        navigation={navigation}
        onCartPress={goToScreen}
        showWishListIcon
      />
      <ScrollView contentContainerStyle={styles.container}>
        {category.map((item, key) => (
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => {
              key == 5
                ? navigation.navigate('ShopPageCollection', {
                  collectionId: item.collectionId,
                })
                : navigation.navigate('innerCategory', {
                  categoryName: t(item.name),
                  categoryDesc: t(item.categorySubTxt),
                  categoryImage: item.categoryImg,
                });
            }}
            key={key}
            style={[
              styles.category,
              {
                flexDirection: key % 2 === 0 ? 'row' : 'row-reverse',
                backgroundColor: isDark ? '#232323' : item.color,
                marginTop: key === 0 ? windowHeight(10) : windowHeight(30),
              },
            ]}>
            <View>
              <Text style={[styles.categoryName, { color: colors.text }]}>
                {t(item.name).toUpperCase()}
              </Text>
              <Text numberOfLines={2} ellipsizeMode="tail" style={[styles.categorySub]}>{t(item.categorySubTxt)}</Text>
            </View>
            <Image style={styles.categoryImg} source={item.categoryImg} />
          </TouchableOpacity>
        ))}
      </ScrollView>
    </SafeAreaView >
  );
}