import { StyleSheet } from 'react-native';
import { fontSizes, windowHeight, windowWidth } from '@theme/appConstant';
import appColors from '@theme/appColors';
import appFonts from '@theme/appFonts';

export default colorSectionStyles = StyleSheet.create({
  container: {
    margin: windowWidth(8),
    marginHorizontal: windowHeight(20),
    marginBottom: windowHeight(20),
  },
  title: {
    fontFamily: appFonts.LatoBold,
    fontSize: fontSizes.FONT17,
    color: appColors.black,
    marginBottom: windowHeight(10),
  },
  // circle: {
  //   // height: windowHeight(27),
  //   height: windowWidth(40),
  //   width: windowWidth(40),
  //   // borderRadius: windowHeight(22),
  //   backgroundColor: 'red',
  //   marginHorizontal: windowHeight(5),
  // },
  Separator: {
    height: windowHeight(5),
  },
  checkIcon: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 7,
  },

  outerSquare: {
    padding: 2,              // space between border and color
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#dedede',
  },

  selectedOuterSquare: {
    borderWidth: 2,
    borderColor: '#000',
  },

  innerSquare: {
    width: 26,
    height: 26,
  },



});
