import { StyleSheet } from 'react-native';
import { fontSizes, windowHeight, windowWidth } from '@theme/appConstant';
import appColors from '@theme/appColors';
import appFonts from '@theme/appFonts';

export default biggestDealStyles = StyleSheet.create({
  mainView: {
    marginTop: windowHeight(30),
    marginBottom: windowHeight(10)
  },
  biggestDeals: {
    fontSize: fontSizes.FONT25,
    fontWeight: 700,
    fontFamily: appFonts.LatoBold,
    marginHorizontal: windowWidth(20),
    textAlign: 'center'
  },
  biggestDealsSub: {
    fontSize: fontSizes.FONT16,
    // fontFamily: appFonts.LatoMedium,
    marginHorizontal: windowWidth(23),
    marginVertical: windowHeight(12),
    lineHeight: windowHeight(15),
    textAlign: 'center'
  },
  container: {
    paddingHorizontal: windowWidth(10),
    marginTop: windowHeight(14),
    flexDirection: 'row',
  },
  imageView: {
    marginLeft: windowWidth(10),
    backgroundColor: appColors.divider,
    // padding: windowWidth(14),
    padding: windowWidth(8),
    borderRadius: windowWidth(4),
  },
  image: {
    // width: windowWidth(100),
    // height: windowHeight(20),
    // resizeMode: 'contain',
    width: windowWidth(200),
    height: windowHeight(80),
    resizeMode: 'contain'
  },


  mainViewTwo: {
    height: windowHeight(220),
    width: '100%',
    // marginTop: windowHeight(12),
  },
  pagination: {
    // marginBottom: windowHeight(-10),
  },
  dot: {
    width: windowHeight(9),
    height: windowHeight(2),
    borderRadius: windowHeight(4.5),
    margin: windowWidth(3),
  },
  activeDot: {
    // width: windowHeight(39),
    // height: windowHeight(7),
    width: windowHeight(9),
    height: windowHeight(2),
    borderRadius: windowHeight(4),
    margin: windowWidth(3),
    backgroundColor: 'black'
  },
  containerTwo: {
    width: windowWidth(460),
    marginLeft: windowWidth(20),
  },

  imageWrapper: {
    height: windowHeight(180),
    backgroundColor: '#f2f2f2',
    width: windowWidth(440),
    // borderRadius: windowHeight(7),
    paddingVertical: windowHeight(25),
    paddingHorizontal: windowWidth(20)
  },

  img: {
    height: '100%',
    width: '100%',
  },
  name: {
    fontSize: fontSizes.FONT17,
    color: "grey",
    marginBottom: windowHeight(10)
  },
  title: {
    fontSize: fontSizes.FONT17,
    color: "black",
    fontWeight: 600,
    marginBottom: windowHeight(7)
  },
  content: {
    fontSize: fontSizes.FONT17,
    color: "black",
    marginBottom: windowHeight(5),
    lineHeight: windowHeight(15)
  },
  myStarStyle: {
    color: appColors.rating,
    backgroundColor: 'transparent',
    marginBottom: windowHeight(3)
  },
});
