import { StyleSheet } from 'react-native';
import { fontSizes, windowHeight, windowWidth } from '@theme/appConstant';
import appColors from '@theme/appColors';
import appFonts from '@theme/appFonts';

export default contentSectionStyles = StyleSheet.create({


  view: {
    marginBottom: windowHeight(80)
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.40)', // adjust opacity
  },
  txtView: {
    position: 'absolute',
    justifyContent: 'center',
    height: '100%',
    paddingVertical: windowHeight(50),
    top: - 4,
    flex: 1
  },
  heading: {
    textAlign: 'center',
    color: "#fff",
    fontSize: fontSizes.FONT15,
    fontWeight: 700,
  },
  title: {
    fontSize: fontSizes.FONT30,
    fontWeight: 800,
    textAlign: 'center',
    marginVertical: windowHeight(13)
  },
  content: {
    fontWeight: 500,
    fontSize: fontSizes.FONT16,
    textAlign: 'center',
    paddingHorizontal: windowWidth(10),
    lineHeight: windowHeight(15)
  },

  card: {
    marginHorizontal: 20,
    marginVertical: 20,
  },

  cardImage: {
    width: '100%',
    height: windowHeight(400),
    borderRadius: 12,
    resizeMode: 'cover',
  },

  cardImage2: {
    width: '100%',
    height: windowHeight(150),
    borderRadius: 12,
    resizeMode: 'cover',
  },

  numberRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: windowHeight(18),
    marginBottom: windowHeight(10),
  },

  line: {
    width: windowWidth(25),
    height: 2,
    backgroundColor: '#000',
    marginRight: 10,
  },

  number: {
    fontSize: fontSizes.FONT16,
    fontWeight: '600',
    // color: '#000',
  },

  cardHeading: {
    fontSize: fontSizes.FONT30,
    fontWeight: '800',
    marginBottom: windowHeight(10),
  },

  cardTitle: {
    fontSize: fontSizes.FONT24,
    fontWeight: '700',
    marginBottom: windowHeight(12),
    lineHeight: windowHeight(20)
  },

  cardContent: {
    fontSize: fontSizes.FONT16,
    fontWeight: '400',
    lineHeight: windowHeight(15),
  },
});
