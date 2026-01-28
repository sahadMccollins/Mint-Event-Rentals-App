import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native';
import { useTranslation } from 'react-i18next';
import Data from '@utils/json';
import { useTheme } from '@react-navigation/native';
import styles from './styles';
import { DropDown } from '@utils/icons';
import { useValues } from '@App';

export default subCategory = (props) => {
  const { t } = useTranslation();
  // const subCategory = Data.subCategory;
  const { colors } = useTheme();
  const [openCat, setOpenCat] = useState(null);
  const { viewRTLStyle, viewSelfRTLStyle, textRTLStyle } = useValues();

  const showSubCat = key => {
    var value;
    key === openCat ? (value = null) : (value = key);
    setOpenCat(value);
  };

  return (
    <FlatList
      numColumns={2}
      columnWrapperStyle={styles.column}
      data={props.data}
      ItemSeparatorComponent={() => <View style={styles.seperator} />}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({ item }) => (
        <TouchableOpacity style={styles.itemContainer} onPress={() => props.navigation.navigate('ShopPageCollection', { collectionId: item.collectionId })}>
          <Image
            style={styles.image}
            source={{ uri: item.image }}
            resizeMode="cover"
          />
          <View style={styles.textWrapper} >
            <Text
              style={[
                styles.title,
                { textAlign: textRTLStyle, color: props.colors.text },
              ]}
            >
              {item.name}
            </Text>
            <Text style={styles.subTitle}>{item.count} items</Text>
          </View>
        </TouchableOpacity>
      )}
    />
  );
};
