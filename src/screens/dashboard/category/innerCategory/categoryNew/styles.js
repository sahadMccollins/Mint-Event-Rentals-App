import { StyleSheet } from "react-native";
import {
    fontSizes,
    windowHeight,
    windowWidth
} from "@theme/appConstant";
import appColors from "@theme/appColors";
import appFonts from "@theme/appFonts";

export default categoryStyles = StyleSheet.create({
    // main: {
    //     paddingHorizontal: windowWidth(24),
    //     // borderRadius: windowWidth(7),
    //     justifyContent: 'space-between',
    //     backgroundColor: appColors.divider,
    //     alignItems: 'center',
    //     flexDirection: 'row'
    // },
    // category: {
    //     fontFamily: appFonts.LatoBold,
    //     fontSize: fontSizes.FONT22,
    // },
    // subCategory: {
    //     fontSize: fontSizes.FONT19,
    //     color: appColors.grey,
    //     fontFamily: appFonts.LatoMedium,
    //     maxWidth: windowWidth(250),
    // },
    // categoryImage: {
    //     width: windowWidth(110),
    //     height: windowHeight(100)
    // },

    main: {
        // paddingHorizontal: windowWidth(24),
        // paddingVertical: windowHeight(16),
        borderRadius: windowWidth(10),
        overflow: 'hidden', // 🔥 required for overlay + radius
    },

    bgImage: {
        borderRadius: windowWidth(10),
    },

    overlay: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.45)', // 👈 adjust opacity
        paddingHorizontal: windowWidth(24),
        paddingVertical: windowHeight(16),
        justifyContent: 'center',
    },

    category: {
        fontFamily: appFonts.LatoBold,
        fontSize: fontSizes.FONT24,
        color: '#fff',
        marginVertical: windowHeight(5),
        fontWeight: 800
    },

    subCategory: {
        fontSize: fontSizes.FONT17,
        color: '#ffffffff',
        fontFamily: appFonts.LatoMedium,
        fontWeight: 600,
        lineHeight: windowHeight(15),
        marginBottom: windowHeight(8)
        // maxWidth: windowWidth(250),
    },

    smallText: {
        fontSize: fontSizes.FONT14,
        color: '#F5F5F5',
        marginBottom: windowHeight(4),
        textTransform: "uppercase",
        backgroundColor: appColors.primary,
        paddingHorizontal: windowWidth(9),
        paddingVertical: windowWidth(2),
        borderRadius: 12,
        alignSelf: 'flex-start', 
    },

    divider: {
        height: 1,
        width: '100%',
        backgroundColor: '#fff',
        marginVertical: windowHeight(8)
    },

    countWrapper: {
        // marginTop: windowHeight(10),
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: windowWidth(5)
    },

    totalText: {
        fontSize: fontSizes.FONT14,
        color: '#F5F5F5',
        textTransform: "uppercase",
    },

    countText: {
        fontSize: fontSizes.FONT26,
        fontFamily: appFonts.LatoBold,
        fontWeight: 800,
        color: '#fff',
    },

    arrowBtn: {
        width: windowWidth(55),
        height: windowWidth(55),
        borderRadius: windowWidth(65),
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',

        // optional shadow
        shadowColor: '#000',
        shadowOpacity: 0.15,
        shadowRadius: 4,
        shadowOffset: { width: 0, height: 2 },
        elevation: 4, // Android shadow
    },

})