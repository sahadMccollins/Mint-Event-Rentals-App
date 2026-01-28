import React from 'react';
import { View, Text, Image, ImageBackground, TouchableOpacity } from 'react-native';
import { useTheme } from '@react-navigation/native';
import styles from './styles';
import images from '@utils/images/images';
import Icon from 'react-native-vector-icons/Ionicons';


const CategoryNew = props => {
  const { colors } = useTheme();
  const { t, title, content, collectionId, totalProducts, bgImage, navigation } = props;

  return (
    <ImageBackground
      source={{ uri: bgImage }}
      style={styles.main}
      imageStyle={styles.bgImage}
    >
      {/* Overlay */}
      <View style={styles.overlay}>
        <View>
          <Text style={styles.smallText}>Explore Everything</Text>

          <Text style={[styles.category]}>
            {title}
          </Text>

          <Text style={styles.subCategory}>
            {content}
          </Text>
          <View style={styles.divider} />
          <View style={styles.countWrapper}>
            <View>
              <Text style={styles.totalText}>Total Products</Text>
              <Text style={styles.countText}>{totalProducts}</Text>
            </View>
            <View>
              <TouchableOpacity style={styles.arrowBtn} activeOpacity={0.8} onPress={() => navigation.navigate('ShopPageCollection', { collectionId })}>
                <Icon name="arrow-forward" size={20} color="#000" />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};

export default CategoryNew;