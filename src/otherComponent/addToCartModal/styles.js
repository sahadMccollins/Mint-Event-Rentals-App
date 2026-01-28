import { StyleSheet } from "react-native";
import {
    fontSizes,
    windowHeight,
    windowWidth
} from "@theme/appConstant";
import appFonts from "@theme/appFonts";
import appColors from "@theme/appColors";

export default StyleSheet.create({
    /* ---------- HEADER ---------- */
    headerRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        gap: windowWidth(20),
        // marginBottom: windowHeight(5),
    },
    thumb: {
        width: windowWidth(80),
        height: windowHeight(60),
        borderRadius: 8,
        resizeMode: 'cover',
    },
    title: {
        flex: 1,
        fontSize: fontSizes.FONT18,
        fontWeight: '600',
        fontFamily: appFonts.MEDIUM,
    },
    quantityContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: windowWidth(10),
    },
    quantityButton: {
        width: windowWidth(30),
        height: windowHeight(20),
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#E0E0E0',
        borderRadius: 4,
    },
    quantityInput: {
        width: windowWidth(30),
        textAlign: 'center',
        fontSize: fontSizes.FONT16,
        fontWeight: '600',
        fontFamily: appFonts.MEDIUM,
    },

    /* ---------- SECTIONS ---------- */
    section: {
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: windowHeight(14),
    },

    label: {
        fontSize: fontSizes.FONT14,
        fontWeight: '600',
        marginBottom: windowHeight(12),
        fontFamily: appFonts.MEDIUM,
    },

    /* ---------- COLOR SWATCHES ---------- */
    outerSquare: {
        width: 38,
        height: 38,
        borderWidth: 1,
        borderColor: '#E0E0E0',
        justifyContent: 'center',
        alignItems: 'center',
    },

    selectedOuterSquare: {
        borderColor: '#000',
        borderWidth: 2,
    },

    innerSquare: {
        width: 30,
        height: 30,
        backgroundColor: '#000',
    },

    /* ---------- SIZE PILLS ---------- */
    sizeBox: {
        paddingVertical: windowHeight(10),
        paddingHorizontal: windowWidth(18),
        borderRadius: 999,
        borderWidth: 2,
        borderColor: '#E0E0E0',
        justifyContent: 'center',
        alignItems: 'center',
        minWidth: windowWidth(80),
    },

    selectedSizeBox: {
        borderColor: '#000',
        borderWidth: 2,
        backgroundColor: '#F5F5F5',
    },

    sizeText: {
        fontSize: fontSizes.FONT15,
        color: '#666',
        fontFamily: appFonts.REGULAR,
    },

    selectedSizeText: {
        color: '#000',
        fontWeight: '600',
        fontFamily: appFonts.MEDIUM,
    },

    /* ---------- SPACING HELPERS ---------- */
    sectionSpacing: {
        marginBottom: windowHeight(20),
    },

    buttonSpacing: {
        marginTop: windowHeight(24),
    },

    rowContainer: {
        flexDirection: 'row',
    },

    cartText: {
        color: appColors.primary,
        fontFamily: appFonts.LatoMedium,
        fontSize: fontSizes.FONT16,
        marginHorizontal: windowHeight(10),
        marginTop: windowHeight(3),
        top: windowHeight(5),
    },
});