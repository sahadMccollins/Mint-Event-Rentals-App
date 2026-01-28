import { StyleSheet } from 'react-native';
import { fontSizes, windowHeight, windowWidth } from '@theme/appConstant';
import appColors from '@theme/appColors';
import appFonts from '@theme/appFonts';

export default productStyles = StyleSheet.create({
  img: {
    // height: windowHeight(170),
    aspectRatio: 1,
    width: windowWidth(200),
    borderRadius: windowWidth(6),
    resizeMode: 'contain',
    marginHorizontal: windowWidth(10),
  },
  
  title: {
    fontSize: fontSizes.FONT18,
    fontWeight: 700,
    fontFamily: appFonts.LatoBold,
  },
});
