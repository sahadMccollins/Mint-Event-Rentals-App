import { StyleSheet } from "react-native";
import {
    windowHeight,
    windowWidth,
    fontSizes
} from "@theme/appConstant";

export default homeStyles = StyleSheet.create({
    divider: {
        width: '100%',
        marginVertical: windowHeight(20)
    },
    view: {
        marginBottom: windowHeight(80)
    },
    overlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(0,0,0,0.50)', // adjust opacity
    },
    txtView: {
        position: 'absolute',
        justifyContent: 'center',
        height: '100%',
        top: -4,
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
    }
});