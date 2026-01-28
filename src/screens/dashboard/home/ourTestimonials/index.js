import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, FlatList } from 'react-native';
import Data from '@utils/json';
import styles from './style';
import { useValues } from '@App';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Swiper from 'react-native-swiper';

const OurTestimonials = props => {
  const biggestDeal = Data.biggestDeal;
  const testiMonials = Data.testiMonials;
  const { isDark, textRTLStyle, viewRTLStyle } = useValues();

  return (
    <View style={styles.mainView}>
      <Text
        style={[
          styles.biggestDeals,
          { color: props.colors.text, textAlign: textRTLStyle },
        ]}>
        {props.t('homePage.ourTestimonials')}
      </Text>

      <Text
        style={[
          styles.biggestDealsSub,
          { color: props.colors.text, textAlign: textRTLStyle },
        ]}>
        {props.t('homePage.ourTestimonialsSub')}
      </Text>
      {/* <ScrollView
        showsHorizontalScrollIndicator={false}
        horizontal
        contentContainerStyle={[
          styles.container,
          { flexDirection: viewRTLStyle },
        ]}>
        {biggestDeal.map((item, key) => (
          <TouchableOpacity
            activeOpacity={1}
            // onPress={() => props.navigation.navigate('ShopPage')}
            // onPress={() => {
            //   props.navigation.navigate('ShopPageCollection', {
            //     collectionId: item.id,
            //   });
            // }}
            style={[styles.imageView, { backgroundColor: props.colors.product }]}
            key={key}>
            {isDark ? (
              <Image source={item.darkBrand} style={styles.image} />
            ) : (
              <Image source={item.brand} style={styles.image} />
            )}
          </TouchableOpacity>
        ))}
      </ScrollView> */}


      <TouchableOpacity
        activeOpacity={0.9}
        style={[styles.mainViewTwo, { backgroundColor: props.colors.background }]}
      >
        <Swiper
          paginationStyle={styles.pagination}
          dot={
            <View style={[styles.dot, { backgroundColor: props.colors.divider }]} />
          }
          activeDot={
            <View
              style={[styles.activeDot, { backgroundColor: "#000" }]}
            />
          }
          dotColor={'black'}
          // activeDotColor={props.colors.divider}
          key={testiMonials.length}
          loop={true}
          autoplay={true}
          autoplayTimeout={5}
          scrollViewStyle={styles.scrollView}
          showsPagination
          removeClippedSubviews={false}
          containerStyle={styles.containerTwo}>
          {testiMonials.map((item, key) => (
            <TouchableOpacity key={key}>
              <View style={styles.imageWrapper}>
                <View style={{ flexDirection: 'row', marginBottom: 6 }}>
                  {Array.from({ length: item.star }).map((_, index) => (
                    <Icon name={'star'} size={18} style={[styles.myStarStyle]} />
                  ))}
                </View>

                <Text style={styles.name} >{item.name}</Text>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.content}>{item.content}</Text>

              </View>
            </TouchableOpacity>
          ))}

        </Swiper>
      </TouchableOpacity>
    </View>
  );
};

export default React.memo(OurTestimonials);

