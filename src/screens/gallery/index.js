import React from 'react';
import { View, ScrollView } from 'react-native';
import { Header } from '@commonComponents';
import { useTranslation } from 'react-i18next';
import ContentSection from './contentSection';
import { windowWidth } from '@theme/appConstant';
import Brands from '@otherComponent/topBrands';
import Data from '@utils/json';
import { useTheme } from '@react-navigation/native';

export default function gallery({ navigation }) {
  const { t } = useTranslation();
  const { colors } = useTheme();
  const data = Data.featuredCollection;

  return (
    <View>
      <Header text="Gallery" navigation={navigation} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{
          marginBottom: windowWidth(90),
        }}>
        {data.map((item, index) => (
          <ContentSection key={index} t={t} colors={colors} item={item} navigation={navigation} />
        ))}
      </ScrollView>
    </View>
  );
}
