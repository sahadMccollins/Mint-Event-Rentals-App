import React, { useRef, useState, useEffect } from 'react';
import {
  View,
  Image,
  Text,
  Animated,
  Easing,
  TouchableOpacity,
} from 'react-native';
import styles from './styles';
import { useTheme } from '@react-navigation/native';
import Lottie from 'lottie-react-native';
import LikeAnim from '@assets/likeAnim.json';
import StarRating from '@commonComponents/starRating';
import { useValues } from '@App';
import { Wishlist, WishlistFilled } from "@utils/icons";
import { useShopifyWishlist } from '../../hooks/useShopifyWishlist';
import { useShopifyCart } from '../../hooks/useShopifyCart';
import images from '@utils/images/images';

export function Collection(props) {
  const { colors } = useTheme();
  const [like, setLike] = useState(false);
  const { viewRTLStyle, textRTLStyle, currSymbol, currValue, isDark } = useValues();
  const { toggleProduct, isInWishlist } = useShopifyWishlist();
  const { addToCart, loading, removeFromCart, isInCart } = useShopifyCart();
  const { product } = props;

  const scaleAnim = useRef(new Animated.Value(1)).current;

  const animate = () => {
    Animated.sequence([
      Animated.timing(scaleAnim, {
        toValue: 1.4,
        duration: 120,
        useNativeDriver: true,
      }),
      Animated.timing(scaleAnim, {
        toValue: 1,
        duration: 120,
        useNativeDriver: true,
      }),
    ]).start();
  };

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => props.navigation.navigate('ShopPageCollection', { collectionId: product.collectionId })}
      style={{ width: props.width }}
    >
      <Image
        source={{ uri: String(product.image) }}
        style={styles.img}
      />
      <Text
        style={[styles.title, { color: colors.text, textAlign: "center" }]}
        numberOfLines={1}
        ellipsizeMode="tail">
        {props.t(product.name)}
      </Text>
    </TouchableOpacity>
  );
}
