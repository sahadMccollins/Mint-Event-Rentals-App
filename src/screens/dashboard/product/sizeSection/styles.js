import { StyleSheet } from 'react-native';
import { fontSizes, windowHeight, windowWidth } from '@theme/appConstant';
import appColors from '@theme/appColors';
import appFonts from '@theme/appFonts';

export default sizeSectionStyles = StyleSheet.create({
  container: {
    // margin: windowWidth(18),
    margin: windowWidth(8),
    marginHorizontal: windowHeight(20),
    marginBottom: windowHeight(20),
  },
  row: {
    marginHorizontal: windowHeight(12),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  text: {
    color: appColors.primary,
    fontSize: fontSizes.FONT18,
    fontFamily: appFonts.LatoRegular,
  },
  title: {
    fontFamily: appFonts.LatoBold,
    fontSize: fontSizes.FONT17,
    color: appColors.black,
    marginBottom: windowHeight(10),
  },
  sizeList: {
    marginTop: windowHeight(15),
  },
  size: {
    backgroundColor: appColors.styleBackground,
    paddingVertical: windowHeight(8),
    paddingHorizontal: windowWidth(18),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: windowWidth(6),
    marginLeft: windowWidth(14),
  },
  name: {
    fontSize: fontSizes.FONT19,
    fontFamily: appFonts.LatoMedium,
  },

  sizeBox: {
    paddingVertical: windowHeight(5),
    paddingHorizontal: windowWidth(15),
    borderWidth: 1,
    borderColor: '#dedede',
    borderRadius: windowWidth(50)
  },
  sizeText: {
    fontSize: fontSizes.FONT18,
    fontFamily: appFonts.LatoMedium,
    color: '#5e5e5e'
  },
  selectedSizeBox: {
    borderWidth: 2,
    borderColor: '#000'
  },
  selectedSizeText: {
    color: '#000'
  }
});
