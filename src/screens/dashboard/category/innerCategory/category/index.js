import React from 'react';
import { View, Text, Image } from 'react-native';
import { useTheme } from '@react-navigation/native';
import styles from './styles';
import images from '@utils/images/images';

export default category = props => {
  const { colors } = useTheme();
  const { t, categoryName, categoryDesc, categoryImage } = props;

  return (
    <View style={[styles.main, { backgroundColor: colors.divider }]}>
      <View>
        <Text style={[styles.category, { color: colors.text }]}>
          {categoryName}
        </Text>
        <Text numberOfLines={2} ellipsizeMode='tail' style={styles.subCategory}>
          {categoryDesc}
        </Text>
      </View>
      <Image source={categoryImage} style={styles.categoryImage} />
    </View>
  );
};
