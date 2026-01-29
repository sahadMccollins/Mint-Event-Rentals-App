import React, { useContext, useRef, useState } from 'react';
import { View, Text } from 'react-native';
import PhoneInput from 'react-native-phone-number-input';
import { useTheme } from '@react-navigation/native';
import { CommonContext, useValues } from '@App';
import { windowHeight, windowWidth, fontSizes } from '@theme/appConstant';
import appColors from '@theme/appColors';
import styles from './styles';

export function InputPhone(props) {
  const { colors } = useTheme();
  const commonContext = useContext(CommonContext);
  const { textRTLStyle, isRTL } = useValues();

  const phoneRef = useRef(null);
  const [value, setValue] = useState(props.value || '');
  const [formattedValue, setFormattedValue] = useState('');

  return (
    <View style={{ marginTop: props.top || windowHeight(20) }}>
      <View
        style={[
          styles.input,
          {
            width: props.width || '100%',
            height: props.height || windowHeight(45),
            backgroundColor: commonContext.isDark
              ? appColors.card
              : appColors.white,
            paddingLeft: windowWidth(10),
          },
        ]}
      >
        <PhoneInput
          ref={phoneRef}
          defaultValue={value}
          defaultCode={props.defaultCountry || 'IN'}
          layout={isRTL ? 'first' : 'second'}
          onChangeText={(text) => {
            setValue(text);
            props.onChangeText && props.onChangeText(text);
          }}
          onChangeFormattedText={(text) => {
            setFormattedValue(text);
            props.onChangeFormattedText &&
              props.onChangeFormattedText(text);
          }}
          containerStyle={{
            backgroundColor: 'transparent',
            borderWidth: 0,
            height: windowHeight(45),
          }}
          textContainerStyle={{
            backgroundColor: 'transparent',
            paddingVertical: 0,
          }}
          textInputStyle={{
            color: colors.text,
            fontSize: fontSizes.FONT16,
            fontFamily: 'Lato-Regular',
            textAlign: textRTLStyle,
          }}
          codeTextStyle={{
            color: colors.text,
            fontSize: fontSizes.FONT16,
          }}
          flagButtonStyle={{
            marginRight: isRTL ? 0 : windowWidth(8),
            marginLeft: isRTL ? windowWidth(8) : 0,
          }}
        />
      </View>

      {props.error && (
        <Text style={[styles.error, { textAlign: textRTLStyle }]}>
          {props.error}
        </Text>
      )}

      {/* Floating label */}
      <Text
        style={[
          styles.placeholder,
          {
            fontSize: props.fontSize || fontSizes.FONT17,
            color: colors.subText,
            backgroundColor: colors.background,
          },
          isRTL
            ? { right: props.right || windowWidth(16) }
            : { left: props.left || windowWidth(16) },
        ]}
      >
        {props.label || 'Phone Number'}
      </Text>
    </View>
  );
}
