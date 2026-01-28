import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, FlatList } from 'react-native';
import Data from '@utils/json';
import styles from './style';
import { useValues } from '@App';

const BiggestDeals = props => {
  const biggestDeal = Data.biggestDeal;
  const { isDark, textRTLStyle, viewRTLStyle } = useValues();

  return (
    <View style={styles.mainView}>
      <Text
        style={[
          styles.biggestDeals,
          { color: props.colors.text },
        ]}>
        {props.t('homePage.ourClients')}
      </Text>

      <Text
        style={[
          styles.biggestDealsSub,
          { color: props.colors.text },
        ]}>
        {props.t('homePage.ourClientsSub')}
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

      <View
        style={{
          flex: 1,
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "space-around",
          marginTop: 10,
        }}
      >
        {biggestDeal.map((item, index) => (
          <View
            key={index}
            style={{ width: "33%", padding: 5 }}
            onPress={() =>
              navigation.navigate("Items", { vendor: item.brand })
            }
          >
            <Image
              source={item.brand}
              style={{
                width: "96%",
                height: 100,
                display: "flex",
                alignSelf: "center",
                borderColor: "#ced2db",
                borderRadius: 10,
                borderWidth: 1,
                backgroundColor: "#fff",
              }}
            />
          </View>
        ))}
      </View>
    </View>
  );
};

export default React.memo(BiggestDeals);

