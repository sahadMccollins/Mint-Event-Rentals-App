import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './styles';
import { Users } from '@assets/icons/users';
import { Stores } from '@assets/icons/stores';
import { Order } from '@assets/icons/order';
import { Brands } from '@assets/icons/brands';
import { windowHeight, fontSizes, SCREEN_WIDTH } from '@theme/appConstant';
import { useValues } from '@App';
import images from '@utils/images/images';

export default contentSection = props => {
  const { t, colors } = props;
  const { viewRTLStyle, textRTLStyle } = useValues();
  return (
    <>
      <View>
        <View style={styles.imageWrapper}>
          <Image
            source={images.aboutUs}
            style={{
              width: SCREEN_WIDTH,
              height: SCREEN_WIDTH * 1.2,
              resizeMode: 'cover',
            }}
            cacheControl="force-cache" />
          <View style={styles.overlay} />
        </View>
        <View style={styles.txtView}>
          <Text style={[styles.heading]}>
            About us
          </Text>
          <Text style={[styles.title, { color: "#fff" }]}>
            Distinctive. Elegant.{'\n'}Sophisticated
          </Text>
          <Text style={[styles.content, { color: "#fff" }]}>
            That’s how our clients describe our furniture rental services based in Dubai, United Arab Emirates. It’s our passion, and a promise to provide the highest level of customer service, goods and products for your event. Our consultants are experienced in the realms of event planning and are up-to-date with the latest trends in this ever-growing industry. This knowledge base proves to be a valuable component in our client relationships. For us, our clients are our partners whose trust we’ve gained, commitment we’ve kept and excellent customer service we’ve delivered. From an intimate gathering in your home to a large corporate function in your area’s most prestigious venues, Mint Event Rentals can accommodate all your rental needs. With a commitment to high-end design and white glove service, we are your go-to choice for the industry’s top event planners.
          </Text>
        </View>
      </View>
      <View style={styles.card}>
        <Image
          source={images.aboutUs1}
          style={styles.cardImage}
        />

        <View style={styles.numberRow}>
          <View style={styles.line} />
          <Text style={styles.number}>01</Text>
        </View>

        <Text style={styles.cardHeading}>Quality Control</Text>

        <Text style={styles.cardTitle}>
          Vast and Well{'\n'}Maintained Inventory
        </Text>

        <Text style={styles.cardContent}>
          We have the modes of transportation to deliver on our promise of quality
          furniture throughout the region. Choose your theme and let us do the rest.
          We have the modes of transportation to deliver on our promise of quality
          furniture throughout the region. Choose your theme and let us do the rest. With a team full of experience, skills and vast technical knowledge our people are passionate about delivering consistently memorable events for our clients.
        </Text>
      </View>


      <View style={styles.card}>
        <Image
          source={images.aboutUs2}
          style={styles.cardImage2}
        />

        <View style={styles.numberRow}>
          <View style={styles.line} />
          <Text style={styles.number}>02</Text>
        </View>

        <Text style={styles.cardHeading}>Delighting Customers {'\n'}Faster</Text>

        <Text style={styles.cardContent}>
          Time is the single most important thing when it comes to event rentals and we’re known for making sure things go smoothly and in time.With a fleet of vehicles ranging from big to small, we deliver all event rental furniture and goods to our clients as fast as possible, no matter where they are in the GCC. We provide the most distinctive, elegant and sophisticated rentals in Dubai, United Arab Emirates.
        </Text>
      </View>

    </>
  );
};
