import { StyleSheet } from 'react-native';
import { fontSizes, windowHeight, windowWidth } from '@theme/appConstant';
import appColors from '@theme/appColors';
import appFonts from '@theme/appFonts';

export default sliderStyles = StyleSheet.create({
  mainView: {
    // height: windowHeight(380),
    height: windowHeight(250),
    width: '100%',
  },
  pagination: {
    marginBottom: windowHeight(-22),
  },
  dot: {
    backgroundColor: appColors.divider,
    width: windowHeight(9),
    height: windowHeight(9),
    borderRadius: windowHeight(4.5),
    margin: windowWidth(3),
  },
  activeDot: {
    backgroundColor: appColors.divider,
    width: windowHeight(39),
    height: windowHeight(7),
    borderRadius: windowHeight(4),
    margin: windowWidth(3),
  },
  container: {
    width: windowWidth(440),
    // width: windowWidth(300),
    marginLeft: windowWidth(20),
  },
  img: {
    height: windowHeight(250),
    // aspectRatio: 1,
    // width: windowWidth(420),
  },
  scrollView: {
    overflow: 'visible',
  },
  shopNow: {
    width: windowWidth(134),
    height: windowHeight(30),
    backgroundColor: appColors.primary,
  },
});
