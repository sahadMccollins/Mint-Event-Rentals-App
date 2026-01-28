import { StyleSheet } from 'react-native';
import { fontSizes, windowHeight, windowWidth } from '@theme/appConstant';
import appColors from '@theme/appColors';
import appFonts from '@theme/appFonts';

export default quantitySectionStyles = StyleSheet.create({
  container: {
    // margin: windowWidth(7),
    marginHorizontal: windowHeight(20),
    marginBottom: windowHeight(10),
  },
  title: {
    fontFamily: appFonts.LatoBold,
    fontSize: fontSizes.FONT17,
    color: appColors.black,
  },
  row: {
    flexDirection: 'row',
    backgroundColor: appColors.styleBackground,
    marginVertical: windowHeight(12),
    width: '35%',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderRadius: windowHeight(35),
    borderWidth: 1,
    borderColor: "#dedede",
  },
  mainView: {
    margin: windowHeight(2),
    marginVertical: windowHeight(5),
    height: windowHeight(22),
    width: windowWidth(29),
    // borderColor: appColors.black,
    // borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: windowHeight(2.5),
  },
  text: {
    fontSize: fontSizes.FONT20,
    alignSelf: 'center',
    justifyContent: 'center',
    color: appColors.black,
  },




  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.4)',
    justifyContent: 'center',
    alignItems: 'center',
  },

  modalContent: {
    width: '80%',
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 20,
  },

  modalTitle: {
    fontSize: fontSizes.FONT16,
    fontFamily: appFonts.LatoBold,
    marginBottom: 12,
    color: appColors.black,
  },

  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 12,
    fontSize: fontSizes.FONT18,
    textAlign: 'center',
    marginBottom: 20,
    color: appColors.black,
  },

  modalActions: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    gap: 24,
  },

  cancel: {
    fontSize: fontSizes.FONT15,
    color: '#888',
  },

  confirm: {
    fontSize: fontSizes.FONT15,
    color: appColors.primary,
    fontFamily: appFonts.LatoBold,
  },

});
