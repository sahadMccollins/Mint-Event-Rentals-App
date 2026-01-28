// import {StyleSheet} from 'react-native';
// import {fontSizes, windowHeight, windowWidth} from '@theme/appConstant';
// import appFonts from '@theme/appFonts';
// import appColors from '@theme/appColors';

// export default dropDownStyle = StyleSheet.create({
//   placeholder: {
//     position: 'absolute',
//     backgroundColor: appColors.white,
//     paddingHorizontal: windowWidth(10),
//     fontFamily: appFonts.LatoMedium,
//     fontSize: fontSizes.FONT18,
//     top: -14,
//   },
//   input: {
//     justifyContent: 'center',
//     borderRadius: windowHeight(6),
//     borderWidth: 1.5,
//     borderColor: appColors.border,
//     alignSelf: 'center',
//     fontSize: fontSizes.FONT19,
//     fontFamily: appFonts.LatoRegular,
//     marginTop: windowHeight(10),
//     width: '100%',
//     height: windowHeight(40),
//     paddingLeft: windowWidth(20),
//   },
//   inputView: {
//     width: '100%',
//     marginTop: windowHeight(8),
//   },
//   dropdown: {
//     height: windowHeight(20),
//     marginStart: -5,
//     marginTop: windowHeight(7),
//   },
// });


import { StyleSheet } from 'react-native';
import { fontSizes, windowHeight, windowWidth } from '@theme/appConstant';
import appFonts from '@theme/appFonts';
import appColors from '@theme/appColors';

export default dropDownStyle = StyleSheet.create({
  placeholder: {
    position: 'absolute',
    backgroundColor: appColors.white,
    paddingHorizontal: windowWidth(10),
    fontFamily: appFonts.LatoMedium,
    fontSize: fontSizes.FONT17,
  },
  input: {
    justifyContent: 'center',
    borderRadius: windowHeight(6),
    borderWidth: 1.5,
    borderColor: appColors.border,
    alignSelf: 'center',
    fontSize: fontSizes.FONT16,
    fontFamily: appFonts.LatoRegular,
    marginTop: windowHeight(4),
    bottom: -6,
    paddingLeft: windowWidth(20),
    width: '100%',
  },
  dropdown: {
    height: windowHeight(45),
    marginStart: -5,
    marginTop: 0,
    color: appColors.black,
    fontSize: fontSizes.FONT16,
  },
  error: {
    fontSize: fontSizes.FONT16,
    marginLeft: windowWidth(22),
    marginTop: windowHeight(10),
    color: appColors.error,
    fontFamily: appFonts.LatoRegular,
  },
});