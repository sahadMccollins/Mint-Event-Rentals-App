import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from './styles';
import { Users } from '@assets/icons/users';
import { Stores } from '@assets/icons/stores';
import { Order } from '@assets/icons/order';
import { Brands } from '@assets/icons/brands';
import { windowHeight, fontSizes, SCREEN_WIDTH } from '@theme/appConstant';
import { useValues } from '@App';
import images from '@utils/images/images';

export default contentSection = props => {
  const { t, colors, item, navigation } = props;
  const { viewRTLStyle, textRTLStyle } = useValues();
  return (
    <>
      <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('GallerySingle', { collectionId: item.collectionId, name: item.name })}>
        <Image
          source={item.image}
          style={styles.cardImage}
          cacheControl="force-cache"
        />
        <View style={styles.overlay} />
        <View style={styles.txtView}>
          <Text style={[styles.title, { color: "#fff" }]}>
            {item.name}
          </Text>
        </View>
      </TouchableOpacity>
    </>
  );
};
