// import React from 'react';
// import { View, Text, FlatList, TouchableOpacity, Dimensions, Image } from 'react-native';
// import Ionicons from 'react-native-vector-icons/Ionicons';
// import styles from './style';
// import Data from '@utils/json';
// import { Collection } from '@commonComponents';
// import { useValues } from '@App';

// export default featuredCollection = props => {
//   const trendingCategories = Data.featuredCollection;
//   const { textRTLStyle, viewRTLStyle } = useValues();
//   const screenWidth = Dimensions.get('window').width;
//   const itemWidth = screenWidth / 1.5;

//   return (
//     <View style={styles.mainView}>
//       <Text
//         style={[
//           styles.kidsCorner,
//           { color: props.colors.text, textAlign: textRTLStyle },
//         ]}>
//         Featured Collections
//       </Text>

//       <View style={styles.row}>
//         <Text
//           style={[
//             styles.seeAll,
//             { color: props.colors.text, textAlign: textRTLStyle },
//           ]}
//         >
//           View all
//         </Text>

//         <View style={styles.arrowView}>
//           {/* <Text style={styles.arrowText}>{'>'}</Text> */}
//           <Ionicons name="chevron-forward" size={10} color="#333" />
//         </View>
//       </View>

//       <FlatList
//         horizontal
//         data={trendingCategories}
//         showsHorizontalScrollIndicator={false}
//         contentContainerStyle={{ flexDirection: viewRTLStyle }}
//         ItemSeparatorComponent={() => <View style={styles.itemSeprator} />}
//         renderItem={({ item }) => (
//           // <Collection
//           //   product={item}
//           //   t={props.t}
//           //   disc
//           //   navigation={props.navigation}
//           //   width={itemWidth}
//           // />

//           <TouchableOpacity
//             activeOpacity={0.8}
//             onPress={() => props.navigation.navigate('Product', { productId: item.collectionId })}
//             style={{ width: itemWidth }}
//           >
//             <Image
//               source={item.image}
//               style={styles.img}
//             />
//             <Text
//               style={[styles.title, { color: colors.text, textAlign: "center" }]}
//               numberOfLines={1}
//               ellipsizeMode="tail">
//               {item.name}
//             </Text>
//           </TouchableOpacity>
//         )}
//         snapToInterval={itemWidth}
//         decelerationRate="fast"
//       />
//     </View>
//   );
// };


import React from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Dimensions,
  Image,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from './style';
import Data from '@utils/json';
import { useValues } from '@App';

const { width: SCREEN_WIDTH } = Dimensions.get('window');
const ITEM_WIDTH = SCREEN_WIDTH * 0.72;

const FeaturedCollection = props => {
  const trendingCategories = Data.featuredCollection;
  const { textRTLStyle, viewRTLStyle } = useValues();

  const data = React.useMemo(
    () => trendingCategories.slice(0, 6),
    [trendingCategories]
  );


  return (
    <View style={styles.mainView}>
      {/* Title */}
      <Text
        style={[
          styles.kidsCorner,
          { color: props.colors.text },
        ]}
      >
        Featured Collections
      </Text>

      {/* View all */}
      <TouchableOpacity style={styles.row} onPress={() => props.navigation.navigate('Gallery')} >
        <Text style={[styles.seeAll, { color: props.colors.text }]}>
          View all
        </Text>

        <View style={styles.arrowView} >
          <Ionicons name="chevron-forward" size={14} color="#333" />
        </View>
      </TouchableOpacity>

      {/* Slider */}
      <FlatList
        horizontal
        data={data}
        keyExtractor={(_, index) => index.toString()}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: 6,
          flexDirection: viewRTLStyle,
        }}
        snapToInterval={ITEM_WIDTH + 16}
        decelerationRate="fast"
        ItemSeparatorComponent={() => <View style={{ width: 16 }} />}
        renderItem={({ item, index }) => (
          <TouchableOpacity
            activeOpacity={0.85}
            style={{ width: ITEM_WIDTH }}
            onPress={() =>
              props.navigation.navigate('ShopPageCollection', {
                collectionId: item.collectionId,
              })
            }
          >
            <View style={styles.card}>
              <Image source={item.image} style={styles.img} />

              {/* Overlay */}
              <View style={styles.overlay} />

              {/* Text */}
              <View style={styles.textContainer}>
                {index === 0 && (
                  <Text style={styles.badge}>New!</Text>
                )}
                <Text style={styles.title} numberOfLines={1}>
                  {item.name}
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

export default React.memo(FeaturedCollection);

