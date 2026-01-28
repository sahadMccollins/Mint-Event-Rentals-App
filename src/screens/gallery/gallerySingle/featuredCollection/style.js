// import { StyleSheet } from 'react-native';
// import { fontSizes, windowHeight, windowWidth } from '@theme/appConstant';
// import appColors from '@theme/appColors';
// import appFonts from '@theme/appFonts';

// export default kidsCornerStyles = StyleSheet.create({
//   mainView: {
//     marginHorizontal: windowWidth(14),
//     marginVertical: windowHeight(10),
//     paddingBottom: windowHeight(10),
//   },
//   kidsCorner: {
//     // fontSize: fontSizes.FONT22,
//     // fontFamily: appFonts.LatoBold,
//     fontSize: fontSizes.FONT25,
//     fontWeight: 700,
//     fontFamily: appFonts.LatoBold,
//     // marginHorizontal: windowWidth(20),
//     textAlign: 'center'
//   },
//   seeAll: {
//     fontSize: fontSizes.FONT16,
//     marginTop: windowHeight(7),
//     fontFamily: appFonts.LatoBold,
//     // marginHorizontal: windowWidth(20),
//   },
//   arrowView: {
//     width: 22,
//     height: 22,
//     borderRadius: 16,
//     backgroundColor: '#dedede',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   row: {
//     flexDirection: 'row',
//     gap: windowWidth(12),
//     alignItems: 'baseline',
//     paddingLeft: windowWidth(10),
//   },
//   clothing: {
//     fontSize: fontSizes.FONT19,
//     fontFamily: appFonts.LatoMedium,
//     color: appColors.grey,
//     marginBottom: windowHeight(20),
//   },

//   img: {
//     height: windowHeight(220),
//     aspectRatio: 1,
//     // width: windowWidth(400),
//     borderRadius: windowWidth(15),
//     resizeMode: 'contain',
//     // marginHorizontal: windowWidth(10),
//   },

//   title: {
//     fontSize: fontSizes.FONT18,
//     fontWeight: 700,
//     fontFamily: appFonts.LatoBold,
//   },
// });



import { StyleSheet } from 'react-native';
import { fontSizes, windowHeight, windowWidth } from '@theme/appConstant';
import appFonts from '@theme/appFonts';

export default StyleSheet.create({
  mainView: {
    marginHorizontal: windowWidth(14),
    marginVertical: windowHeight(10),
    paddingBottom: windowHeight(10),
  },

  kidsCorner: {
    fontSize: fontSizes.FONT25,
    fontFamily: appFonts.LatoBold,
    fontWeight: '700',
    marginBottom: windowHeight(10),
  },

  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: windowWidth(10),
    paddingHorizontal: windowWidth(8),
    marginBottom: windowHeight(14),
  },

  seeAll: {
    fontSize: fontSizes.FONT16,
    fontFamily: appFonts.LatoBold,
  },

  arrowView: {
    width: 22,
    height: 22,
    borderRadius: 11,
    backgroundColor: '#dedede',
    justifyContent: 'center',
    alignItems: 'center',
  },

  card: {
    height: windowHeight(260),
    borderRadius: windowWidth(10),
    overflow: 'hidden',
  },

  img: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },

  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.25)',
  },

  textContainer: {
    position: 'absolute',
    bottom: windowHeight(18),
    left: windowWidth(16),
    right: windowWidth(16),
  },

  badge: {
    color: '#fff',
    fontSize: fontSizes.FONT14,
    fontFamily: appFonts.LatoBold,
    marginBottom: 4,
  },

  title: {
    color: '#fff',
    fontSize: fontSizes.FONT22,
    fontFamily: appFonts.LatoBold,
    fontWeight: '700',
  },
});
