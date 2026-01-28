// import React, {useState} from 'react';
// import {View, Text, TouchableOpacity} from 'react-native';
// import styles from './styles';
// import Icon from 'react-native-vector-icons/AntDesign';
// import {useValues} from '@App';

// export default quantitySection = props => {
//   const {t} = props;
//   const [numQuantity, setNumQuantity] = useState(1);
//   const {viewRTLStyle, textRTLStyle, viewSelfRTLStyle} = useValues();

//   return (
//     <View style={styles.container}>
//       <Text
//         style={[
//           styles.title,
//           {color: props.colors.text, textAlign: textRTLStyle},
//         ]}>
//         {t('product.quantity')}:
//       </Text>
//       <View
//         style={[
//           styles.row,
//           {
//             backgroundColor: props.colors.styleBackground,
//             flexDirection: viewRTLStyle,
//             alignSelf: viewSelfRTLStyle,
//           },
//         ]}>
//         <TouchableOpacity
//           activeOpacity={1}
//           style={[styles.mainView, {borderColor: props.colors.text}]}
//           onPress={() => {
//             numQuantity > 1 && setNumQuantity(numQuantity - 1);
//           }}>
//           <Icon name={'minus'} size={16} color={props.colors.text} />
//         </TouchableOpacity>
//         <Text style={[styles.text, {color: props.colors.text}]}>
//           {numQuantity}
//         </Text>
//         <TouchableOpacity
//           activeOpacity={1}
//           style={[styles.mainView, {borderColor: props.colors.text}]}
//           onPress={() => {
//             setNumQuantity(numQuantity + 1);
//           }}>
//           <Icon name={'plus'} size={16} color={props.colors.text} />
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// };




import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  TextInput,
} from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/AntDesign';
import { useValues } from '@App';

const quantitySection = props => {
  const { t, colors, numQuantity, setNumQuantity } = props;
  const { viewRTLStyle, textRTLStyle, viewSelfRTLStyle } = useValues();

  const [modalVisible, setModalVisible] = useState(false);
  const [tempQuantity, setTempQuantity] = useState('1');

  const openModal = () => {
    setTempQuantity(String(numQuantity));
    setModalVisible(true);
  };

  const confirmQuantity = () => {
    const value = parseInt(tempQuantity, 10);
    if (!isNaN(value) && value > 0) {
      setNumQuantity(value);
    }
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      {/* Title */}
      <Text
        style={[
          styles.title,
          { color: colors.text, textAlign: textRTLStyle },
        ]}>
        {t('product.quantity')}:
      </Text>

      {/* Quantity Selector */}
      <View
        style={[
          styles.row,
          {
            backgroundColor: colors.styleBackground,
            flexDirection: viewRTLStyle,
            alignSelf: viewSelfRTLStyle,
          },
        ]}>
        {/* Minus */}
        <TouchableOpacity
          activeOpacity={0.7}
          style={[styles.mainView, { borderColor: colors.text }]}
          onPress={() => {
            numQuantity > 1 && setNumQuantity(numQuantity - 1);
          }}>
          <Icon name="minus" size={16} color={colors.text} />
        </TouchableOpacity>

        {/* Quantity (tap to open dialer) */}
        <TouchableOpacity activeOpacity={0.7} onPress={openModal}>
          <Text style={[styles.text, { color: colors.text }]}>
            {numQuantity}
          </Text>
        </TouchableOpacity>

        {/* Plus */}
        <TouchableOpacity
          activeOpacity={0.7}
          style={[styles.mainView, { borderColor: colors.text }]}
          onPress={() => setNumQuantity(numQuantity + 1)}>
          <Icon name="plus" size={16} color={colors.text} />
        </TouchableOpacity>
      </View>

      {/* Quantity Input Modal */}
      <Modal
        visible={modalVisible}
        transparent
        animationType="fade"
        onRequestClose={() => setModalVisible(false)}>
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>
              Enter Quantity
            </Text>

            <TextInput
              value={tempQuantity}
              onChangeText={setTempQuantity}
              keyboardType="number-pad"
              maxLength={5}
              autoFocus
              style={styles.input}
            />

            <View style={styles.modalActions}>
              <TouchableOpacity onPress={() => setModalVisible(false)}>
                <Text style={styles.cancel}>Cancel</Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={confirmQuantity}>
                <Text style={styles.confirm}>OK</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default quantitySection;
