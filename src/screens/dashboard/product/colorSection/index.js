// import React from 'react';
// import { View, Text, FlatList, TouchableOpacity } from 'react-native';
// import styles from './styles';
// import { windowHeight } from '@theme/appConstant';
// import { useValues } from '@App';

// export default function ColorSection(props) {
//   const {
//     colors,
//     variants = [],
//     setVariantId,
//     setVariantTitle,
//     selectedVariantTitle,
//   } = props;

//   const { viewRTLStyle, textRTLStyle } = useValues();

//   if (!variants.length) return null;

//   const onColorPress = (item) => {
//     setVariantId(item.id);
//     setVariantTitle(item.title);
//   };

//   return (
//     <View style={styles.container}>
//       <Text
//         style={[
//           styles.title,
//           { color: colors.text, textAlign: textRTLStyle },
//         ]}
//       >
//         Color : {selectedVariantTitle}
//       </Text>

//       <FlatList
//         data={variants}
//         keyExtractor={(item) => item.id}
//         horizontal
//         contentContainerStyle={{ gap: 14 }}
//         style={{ flexDirection: viewRTLStyle }}
//         renderItem={({ item }) => {
//           const isSelected = item.title === selectedVariantTitle;

//           return (
//             <TouchableOpacity
//               onPress={() => onColorPress(item)}
//               activeOpacity={0.8}
//               style={[
//                 styles.outerSquare,
//                 isSelected && styles.selectedOuterSquare,
//               ]}
//             >
//               <View
//                 style={[
//                   styles.innerSquare,
//                   { backgroundColor: item.title.toLowerCase() },
//                 ]}
//               />
//             </TouchableOpacity>
//           );
//         }}
//       />
//     </View>
//   );
// }


import React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import styles from './styles';

export default function ColorSection({ colors, options, selected, onSelect }) {
  if (!options.length) return null;

  return (
    <View style={styles.container}>
      <Text style={[styles.title, { color: colors.text }]}>
        <Text style={{ color: '#5e5e5e' }}>Color :</Text> {selected}
      </Text>

      <FlatList
        data={options}
        keyExtractor={(item) => item}
        horizontal
        contentContainerStyle={{ gap: 14 }}
        renderItem={({ item }) => {
          const isSelected = item === selected;

          return (
            <TouchableOpacity
              onPress={() => onSelect(item)}
              style={[
                styles.outerSquare,
                isSelected && styles.selectedOuterSquare,
              ]}
            >
              <View
                style={[
                  styles.innerSquare,
                  { backgroundColor: item.toLowerCase() },
                ]}
              />
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
}
