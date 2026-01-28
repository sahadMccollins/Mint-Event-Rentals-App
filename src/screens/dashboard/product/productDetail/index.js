import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { GlobalStyle } from '@style';
import styles from './styles';
import { useValues } from '@App';
import RenderHtml from 'react-native-render-html';
import { fontSizes, windowHeight, windowWidth } from '@theme/appConstant';
import appColors from '@theme/appColors';
import appFonts from '@theme/appFonts';

export default productDetail = props => {
  const { t, productDescription, specifications } = props;
  const { viewRTLStyle, textRTLStyle, isRTL } = useValues();

  return (
    <View style={[GlobalStyle.container]}>
      {/* <Text
        style={[
          styles.title,
          { color: props.colors.text, textAlign: textRTLStyle },
        ]}>
        {t('productDetail.productDetails')}
      </Text> */}
      <RenderHtml
        // contentWidth={SIZES.width}
        source={{ html: productDescription || '' }}
        baseStyle={{
          // color: props.colors.subText,
          color: 'black',
          // marginVertical: windowHeight(6),
          fontSize: fontSizes.FONT17,
          fontFamily: appFonts.LatoMidum,
          lineHeight: windowHeight(18),
          textAlign: textRTLStyle,
        }}

        tagsStyles={{
          h3: {
            fontSize: fontSizes.FONT20,
            // fontWeight: 900,
            marginVertical: windowHeight(6),
            color: '#000',
          },
          strong: {
            fontWeight: '500',
          },
          ul: {
            // paddingLeft: windowWidth(15),
            // marginVertical: 3,
            lineHeight: windowHeight(18),

            paddingLeft: isRTL ? 0 : windowWidth(15),
            paddingRight: isRTL ? windowWidth(15) : 0,
            // alignSelf: isRTL ? 'flex-end' : 'flex-start',
          },
          li: {
            // marginBottom: 4,
            // lineHeight: 33,
          },
          p: {
            marginBottom: 5,
          },
        }}
      />
    </View>
  );
};
