import { StyleSheet } from 'react-native';
import { fontSizes, windowHeight, windowWidth } from '@theme/appConstant';
import appColors from '@theme/appColors';
import appFonts from '@theme/appFonts';

export default contentSectionStyles = StyleSheet.create({
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.20)', // adjust opacity
    borderRadius: 8,
  },
  txtView: {
    position: 'absolute',
    justifyContent: 'center',
    height: '100%',
    width: '100%',
    paddingVertical: windowHeight(50),
    top: - 4,
    flex: 1,
  },
  title: {
    fontSize: fontSizes.FONT30,
    fontWeight: 800,
    textAlign: 'center',
    marginVertical: windowHeight(13),
  },
  card: {
    marginHorizontal: windowWidth(20),
    marginVertical: windowHeight(5),
  },
  cardImage: {
    width: '100%',
    height: windowHeight(350),
    borderRadius: 8,
    resizeMode: 'cover',
    overflow: 'hidden',
  },
});
