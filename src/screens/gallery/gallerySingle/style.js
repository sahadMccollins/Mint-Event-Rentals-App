import { StyleSheet } from 'react-native';
import { fontSizes, windowHeight, windowWidth } from '@theme/appConstant';
import appColors from '@theme/appColors';

export default biggestDealStyles = StyleSheet.create({

    button: {
        marginTop: windowHeight(15),
        backgroundColor: '#FFFFFF',
        paddingVertical: windowHeight(10),
        paddingHorizontal: windowWidth(20),
        borderRadius: 50,
        borderWidth: 1,
        borderColor: '#000000',
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        color: '#000000',
        fontSize: fontSizes.FONT15,
        fontWeight: '800',
    },

});
