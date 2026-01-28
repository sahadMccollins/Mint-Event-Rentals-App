import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, FlatList } from 'react-native';
import Data from '@utils/json';
import styles from './style';
import { useValues } from '@App';
import { Button } from '@commonComponents';

const CollectionSection = props => {
  const productGallery = Data.productGallery;
  const { isDark, textRTLStyle, viewRTLStyle } = useValues();

  return (
    <>
      {productGallery.map((item, index) => (
        <View style={styles.wrapper} key={index}>

          {/* IMAGE SECTION */}
          <View style={styles.imageRow}>
            <View style={styles.left}>
              <Image
                source={{ uri: item.mainImage }}
                style={styles.mainImage}
                resizeMode="contain"
              />
            </View>
          </View>

          {/* TEXT SECTION */}
          <View style={styles.textContainer}>
            <Text style={styles.badge}>{item.smallTitle}</Text>

            <Text style={styles.title}>{item.title}</Text>

            <Text style={styles.description}>
              {item.description}
            </Text>

            <View style={styles.buttonWrapper}>
              {/* <Button color={props.colors.primary} title="Explore" onPress={() => { }} /> */}
              <Button
                style={styles.button}
                // fontSize={fontSizes.FONT18}
                text="Explore"
                t={props.t}
                onPress={() => {
                  const isProduct = item.collectionId.includes('Product');

                  isProduct
                    ? props.navigation.navigate('Product', {
                      productId: item.collectionId,
                    })
                    : props.navigation.navigate('ShopPageCollection', {
                      collectionId: item.collectionId,
                    });
                }}
              />
            </View>
          </View>

        </View>
      ))}
    </>
  );

};

export default React.memo(CollectionSection);

