import React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import StarRating from '@commonComponents/starRating';
import { Wishlist, WishlistFilled } from '@utils/icons';
import appColors from '@theme/appColors';
import { fontSizes } from '@theme/appConstant';
import styles from './styles';
import { useValues } from '@App';
import { useShopifyWishlist } from '../../../../hooks/useShopifyWishlist';

export default productDescription = props => {
  const { t, product, colors } = props;
  const { viewRTLStyle, textRTLStyle, currSymbol, currValue, isRTL } = useValues();
  const { toggleProduct, isInWishlist } = useShopifyWishlist();

  // let featuresArray = [];

  // const inWishlist = isInWishlist(product?.id);

  // try {
  //   const rawFeatures = product?.features ?? "[]"; // default to empty array string
  //   featuresArray = JSON.parse(rawFeatures);
  // } catch (error) {
  //   console.error("Error parsing features JSON:", error);
  //   featuresArray = [];
  // }

  return (
    <View style={styles.container}>
      <Text style={styles.vendor}>{product?.vendor}</Text>
      <View
        style={{
          flexDirection: viewRTLStyle, // 'row' or 'row-reverse'
          alignItems: 'flex-start',
          justifyContent: 'space-between',
          paddingRight: isRTL ? 0 : 20
        }} >
        <Text
          style={[
            styles.name,
            { color: props.colors.text, textAlign: textRTLStyle },
          ]}>
          {product?.title}
        </Text>
      </View>
    </View>
  );
};