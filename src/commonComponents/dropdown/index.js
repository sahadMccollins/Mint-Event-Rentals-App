// import React from 'react';
// import { View, Text } from 'react-native';
// import styles from './styles';
// import { Picker } from '@react-native-picker/picker';
// import { useTranslation } from 'react-i18next';
// import { windowWidth, windowHeight, fontSizes } from '@theme/appConstant';
// import { useTheme } from '@react-navigation/native';
// import { useValues } from '@App';

// export const DropDown = (props) => {
//   const { isRTL } = useValues();
//   const { t } = useTranslation();
//   const { colors } = useTheme();
//   const {
//     selectedItem,
//     data,
//     name,
//     SelectedItem,
//     width,
//     left,
//     height,
//     fontSize,
//     error,
//     placeholder,
//   } = props;

//   // Get the display label for selected item
//   const getSelectedLabel = () => {
//     if (!SelectedItem) return placeholder || name || 'Select';
//     // If SelectedItem is an object with name property
//     if (typeof SelectedItem === 'object' && SelectedItem.name) {
//       return SelectedItem.name;
//     }
//     // If SelectedItem is a string
//     return String(SelectedItem);
//   };

//   return (
//     <View>
//       <View
//         style={[
//           styles.input,
//           {
//             height: height ? height : windowHeight(40),
//             backgroundColor: name ? colors.background : colors.brandsBg,
//             borderColor: error ? '#ff0000' : colors.border || '#ccc',
//             borderWidth: error ? 1 : 0,
//           },
//         ]}>
//         {name ? (
//           <Text
//             style={[
//               styles.placeholder,
//               {
//                 fontSize: props.fontSize ? props.fontSize : fontSizes.FONT19,
//                 color: colors.subText,
//                 backgroundColor: colors.background,
//               },
//               isRTL
//                 ? {
//                   right: props.right ? props.right : windowWidth(16),
//                 }
//                 : {
//                   left: props.left ? props.left : windowWidth(16),
//                 },
//             ]}>
//             {name}
//           </Text>
//         ) : null}

//         <Picker
//           style={[
//             styles.dropdown,
//             {
//               color: colors.text,
//               marginTop: props.top ? props.top : windowHeight(7),
//             },
//           ]}
//           dropdownIconColor={colors.text}
//           selectedValue={getSelectedLabel()}
//           onValueChange={(itemValue, itemIndex) => {
//             // Call the callback with the selected value
//             if (selectedItem && typeof selectedItem === 'function') {
//               selectedItem(itemValue);
//             }
//           }}>
//           {data && Array.isArray(data) && data.length > 0 ? (
//             data.map((item, key) => {
//               // Handle both object and string items
//               let label = '';
//               let value = '';

//               if (typeof item === 'string') {
//                 label = item;
//                 value = item;
//               } else if (typeof item === 'object' && item.name) {
//                 label = item.name;
//                 value = item.name;
//               }

//               return (
//                 <Picker.Item
//                   key={key}
//                   label={t(label) || label}
//                   value={value}
//                 />
//               );
//             })
//           ) : null}
//         </Picker>
//       </View>
//       {error ? (
//         <Text style={{
//           color: '#ff0000',
//           fontSize: fontSizes.FONT14,
//           marginTop: windowHeight(5),
//           marginHorizontal: windowWidth(5)
//         }}>
//           {error}
//         </Text>
//       ) : null}
//     </View>
//   );
// };



import React, { useContext } from 'react';
import { View, Text, Appearance } from 'react-native';
import styles from './styles';
import { Picker } from '@react-native-picker/picker';
import { useTranslation } from 'react-i18next';
import { windowWidth, windowHeight, fontSizes } from '@theme/appConstant';
import { useTheme } from '@react-navigation/native';
import { useValues } from '@App';
import appColors from '@theme/appColors';
import { CommonContext } from '@App';

export const DropDown = (props) => {
  const { isRTL } = useValues();
  const { t } = useTranslation();
  const { colors } = useTheme();
  const commonContext = useContext(CommonContext);

  const {
    selectedItem,
    data,
    name,
    SelectedItem,
    width,
    left,
    height,
    fontSize,
    error,
    placeholder,
  } = props;

  const colorScheme = Appearance.getColorScheme();

  // Get the display label for selected item
  const getSelectedLabel = () => {
    if (!SelectedItem) return placeholder || name || 'Select';
    // If SelectedItem is an object with name property
    if (typeof SelectedItem === 'object' && SelectedItem.name) {
      return SelectedItem.name;
    }
    // If SelectedItem is a string
    return String(SelectedItem);
  };

  return (
    <View style={{ marginTop: props.top ? props.top : windowHeight(20) }}>
      <View
        style={[
          styles.input,
          {
            width: props.width ? props.width : '100%',
            backgroundColor: commonContext.isDark
              ? appColors.card
              : appColors.white,
            height: height ? height : windowHeight(45),
            borderColor: error ? appColors.error : appColors.border,
            borderWidth: 1.5,
          },
        ]}>
        <Picker
          style={[
            styles.dropdown,
            {
              color: colors.text,
            },
          ]}
          dropdownIconColor={appColors.border}
          selectedValue={getSelectedLabel()}
          onValueChange={(itemValue, itemIndex) => {
            // Call the callback with the selected value
            if (selectedItem && typeof selectedItem === 'function') {
              selectedItem(itemValue);
            }
          }}>
          {data && Array.isArray(data) && data.length > 0 ? (
            data.map((item, key) => {
              // Handle both object and string items
              let label = '';
              let value = '';

              if (typeof item === 'string') {
                label = item;
                value = item;
              } else if (typeof item === 'object' && item.name) {
                label = item.name;
                value = item.name;
              }

              return (
                <Picker.Item
                  key={key}
                  label={t(label) || label}
                  value={value}
                />
              );
            })
          ) : null}
        </Picker>
      </View>

      {/* Floating Label - Same as Input */}
      <Text
        style={[
          styles.placeholder,
          {
            fontSize: props.fontSize ? props.fontSize : fontSizes.FONT17,
            color: colors.subText,
            backgroundColor: colors.background,
          },
          isRTL
            ? {
              right: props.right ? props.right : windowWidth(16),
            }
            : {
              left: props.left ? props.left : windowWidth(16),
            },
        ]}>
        {name || placeholder}
      </Text>

      {/* Error Message - Same as Input */}
      {error && (
        <Text style={[styles.error]}>
          {error}
        </Text>
      )}
    </View>
  );
};