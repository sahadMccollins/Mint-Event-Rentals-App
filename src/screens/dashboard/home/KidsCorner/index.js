import React from 'react';
import { View, Text, FlatList, TouchableOpacity, Dimensions } from 'react-native';
import styles from './style';
import Data from '@utils/json';
import { Collection } from '@commonComponents';
import { useValues } from '@App';

const KidsCorner = props => {
  const trendingCategories = Data.trendingCategories;
  const { textRTLStyle, viewRTLStyle } = useValues();
  const screenWidth = Dimensions.get('window').width;
  const itemWidth = screenWidth / 2;

  return (
    <View style={styles.mainView}>
      <Text
        style={[
          styles.kidsCorner,
          { color: props.colors.text, textAlign: textRTLStyle },
        ]}>
        Trending Categories
      </Text>
      <FlatList
        horizontal
        data={trendingCategories}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ flexDirection: viewRTLStyle }}
        ItemSeparatorComponent={() => <View style={styles.itemSeprator} />}
        renderItem={({ item }) => (
          <Collection
            product={item}
            t={props.t}
            disc
            navigation={props.navigation}
            width={itemWidth}
          />
        )}
        snapToInterval={itemWidth}
        decelerationRate="fast"
      />
    </View>
  );
};

export default React.memo(KidsCorner);

