import { StyleSheet } from 'react-native';
import { fontSizes, windowHeight, windowWidth } from '@theme/appConstant';
import appColors from '@theme/appColors';
import appFonts from '@theme/appFonts';

export default subCategoryStyles = StyleSheet.create({
  mainView: {
    marginBottom: windowWidth(20),
  },
  category: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingHorizontal: windowWidth(10),
    marginTop: windowHeight(12),
    alignItems: 'center',
  },
  categoryName: {
    fontSize: fontSizes.FONT20,
    fontFamily: appFonts.LatoBold,
  },
  innerCat: {
    fontSize: fontSizes.FONT19,
    marginLeft: windowWidth(30),
    marginTop: windowHeight(10),
  },
  column: {
    justifyContent: 'space-between',
    paddingHorizontal: windowWidth(16),
    marginTop: windowHeight(20),
  },
  itemContainer: {
    width: '48%', // 👈 ensures 2 items per row
    // marginBottom: windowHeight(5),
    borderColor: '#e6e6e6',
    borderWidth: 1,
    borderRadius: 10
  },
  image: {
    width: '100%', // 👈 full width
    aspectRatio: 1, // 👈 keeps image square
    // borderRadius: 10,
    // overflow: "hidden"
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10
  },
  title: {
    fontSize: fontSizes.FONT19,
    fontWeight: '600',
    // marginTop: windowHeight(6),
  },
  subTitle: {
    fontSize: fontSizes.FONT15,
    color: 'grey',
    marginTop: windowHeight(4),
  },
  textWrapper: {
    paddingHorizontal: windowWidth(12),
    paddingVertical: windowWidth(10),
    borderTopWidth: 1,
    borderTopColor: "#e6e6e6"
  }
});
