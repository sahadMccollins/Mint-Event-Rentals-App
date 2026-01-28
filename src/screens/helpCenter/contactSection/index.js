import React from 'react';
import {
    View,
    Image,
    Text,
    TouchableOpacity,
    UIManager,
    Platform,
    Linking,
} from 'react-native';
import styles from './styles';
import { useValues } from '@App';

// icons
import {
    callIcon,
    emailIcon,
    whatsappIcon,
    websiteIcon,
    facebookIcon,
    instagramIcon,
} from '@utils/images';

if (Platform.OS === 'android' && UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
}

export default function ContactSection(props) {
    const { t, colors } = props;
    const { viewRTLStyle, imageRTLStyle, textRTLStyle } = useValues();

    const contactItems = [
        {
            id: 'call',
            title: "Call Us",
            icon: callIcon,
            url: 'tel:+97142243543',
        },
        {
            id: 'email',
            title: "Email Us",
            icon: emailIcon,
            url: 'mailto:sales@minteventrentals.com',
        },
        {
            id: 'whatsapp',
            title: "Whatsapp",
            icon: whatsappIcon,
            url: 'https://api.whatsapp.com/send/?phone=971507699798&text=Hi%2C+I+would+like+to+know+more+about+mint+event+rentals&type=phone_number&app_absent=0',
        },
        {
            id: 'website',
            title: "Website",
            icon: websiteIcon,
            url: 'https://www.minteventrentals.com/',
        },
        {
            id: 'facebook',
            title: "Facebook",
            icon: facebookIcon,
            url: 'https://www.facebook.com/MintEventRentals',
        },
        {
            id: 'instagram',
            title: "Instagram",
            icon: instagramIcon,
            url: 'https://www.instagram.com/minteventrentals',
        },
    ];

    const handlePress = async (url) => {
        try {
            const supported = await Linking.canOpenURL(url);
            if (supported) {
                await Linking.openURL(url);
            }
        } catch (e) {
            console.warn('Failed to open URL:', url);
        }
    };

    return (
        <View style={styles.routeContainer}>
            {contactItems.map(item => (
                <TouchableOpacity
                    key={item.id}
                    style={[styles.container, { flexDirection: viewRTLStyle }]}
                    onPress={() => handlePress(item.url)}
                    activeOpacity={0.7}
                    accessibilityRole="button"
                    accessibilityLabel={item.title}
                >
                    <Image
                        source={item.icon}
                        resizeMode="contain"
                        style={[styles.icon, imageRTLStyle]}
                    />

                    <Text
                        style={[
                            styles.content,
                            { color: colors.subText, textAlign: textRTLStyle },
                        ]}
                    >
                        {item.title}
                    </Text>
                </TouchableOpacity>
            ))}
        </View>
    );
}
