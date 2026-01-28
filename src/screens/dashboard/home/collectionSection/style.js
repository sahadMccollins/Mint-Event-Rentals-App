import { StyleSheet } from 'react-native';
import { fontSizes, windowHeight, windowWidth } from '@theme/appConstant';
import appColors from '@theme/appColors';
import appFonts from '@theme/appFonts';

export default biggestDealStyles = StyleSheet.create({
  wrapper: {
    padding: 14,
    marginTop: windowHeight(20)
  },

  /* IMAGE SECTION */
  imageRow: {
    flexDirection: 'row',
    gap: 7,
  },

  left: {
    flex: 2,
  },

  right: {
    flex: 1,
    justifyContent: 'space-between',
  },

  mainImage: {
    width: '100%',
    height: 260,
    borderRadius: 5,
  },

  /* TEXT SECTION */
  textContainer: {
    marginTop: windowHeight(20),
    paddingHorizontal: windowWidth(15)
  },

  badge: {
    fontSize: fontSizes.FONT15,
    fontWeight: '800',
    // marginBottom: 6,
  },

  title: {
    fontSize: fontSizes.FONT25,
    fontWeight: '800',
    marginVertical: windowHeight(10),
    // color: '#111',
    // marginBottom: 8,
  },

  description: {
    fontSize: fontSizes.FONT17,
    lineHeight: windowHeight(15),
    marginBottom: windowHeight(10),
  },

  buttonWrapper: {
    alignSelf: 'flex-start',
  },

  button: {
    backgroundColor: appColors.primary,
    borderRadius: "50%",
    fontSize: fontSizes.FONT18,
    fontWeight: '800',
    paddingHorizontal: windowWidth(20),
    paddingVertical: windowHeight(10),
  }

});
