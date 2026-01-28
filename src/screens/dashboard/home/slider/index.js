import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import Data from '@utils/json';
import Swiper from 'react-native-swiper';
import { Button } from '@commonComponents';
import styles from './style';

const Slider = props => {
  const bannerSection = Data.bannerSection;
  const { colors } = props;
  return (
    <TouchableOpacity
      activeOpacity={0.9}
      style={[styles.mainView, { backgroundColor: colors.background }]}
    // onPress={() => {
    //   props.navigation.navigate('ShopPage');
    // }}
    >
      <Swiper
        paginationStyle={styles.pagination}
        dot={
          <View style={[styles.dot, { backgroundColor: props.colors.divider }]} />
        }
        activeDot={
          <View
            style={[styles.activeDot, { backgroundColor: props.colors.divider }]}
          />
        }
        dotColor={'black'}
        activeDotColor={props.colors.divider}
        key={bannerSection.length}
        loop={true}
        autoplay={true}
        autoplayTimeout={5}
        scrollViewStyle={styles.scrollView}
        showsPagination
        removeClippedSubviews={false}
        containerStyle={styles.container}>
        {bannerSection.map((item, key) => (
          <View key={key} >
            <View style={styles.imageWrapper}>
              <Image source={item.image} style={styles.img} />
              <View style={styles.overlay} />
            </View>
            <View style={styles.txtView}>
              <Text style={[styles.welcomeTxt, { color: "#fff", marginBottom: 10 }]}>
                {item.heading}
              </Text>
              <Text style={[styles.flatOffTxt, { color: "#fff", marginBottom: 0 }]}>
                {item.text}
              </Text>
              {/* <Text style={styles.freeShipping}>
                {props.t('homePage.freeShipping')}
              </Text> */}
              <Button
                t={props.t}
                style={styles.shopNow}
                text={'homePage.shopNow'}
                onPress={() => {
                  props.navigation.navigate('ShopPage');
                }}
              />
            </View>
          </View>
        ))}
      </Swiper>
    </TouchableOpacity>
  );
};

export default React.memo(Slider);

