// import React from 'react';
// import { View, Text, StyleSheet, ScrollView } from 'react-native';
// import { WebView } from 'react-native-webview';
// import { useValues } from '@App';
// import { fontSizes, windowHeight } from '@theme/appConstant';

// export default function ContentSection(props) {
//   const { textRTLStyle } = useValues();

//   return (
//     <ScrollView contentContainerStyle={styles.container}>
//       {/* Warehouse */}
//       <Text style={[styles.title, { textAlign: textRTLStyle }]}>
//         Warehouse Location
//       </Text>

//       <Text style={[styles.address, { textAlign: textRTLStyle }]}>
//         Mint Gulf Furniture Rental LLC, PO Box 503005, Phase 2, Block N,
//         Warehouse 16 and 17, Dubai Industrial City, Dubai - UAE
//       </Text>

//       <View style={styles.mapContainer}>
//         <WebView
//           originWhitelist={['*']}
//           source={{
//             html: `<html>
//           <body>
//             <iframe width="100%" height="550" frameborder="0" style="border:0"
//       src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7240.630345664296!2d55.07103300000001!3d24.853083!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f0bc0fc7bac0d%3A0xe2bbe34ca4953f13!2sMint%20Event%20Rentals%20DIC!5e0!3m2!1sen!2sae!4v1740143425145!5m2!1sen!2sae" allowfullscreen></iframe>
//           </body>
//       </html>` }}
//           style={styles.map}
//         />
//       </View>

//       <View style={{ height: windowHeight(25) }} />

//       {/* Office */}
//       <Text style={[styles.title, { textAlign: textRTLStyle }]}>
//         Office Location
//       </Text>

//       <Text style={[styles.address, { textAlign: textRTLStyle }]}>
//         Mint Gulf Furniture Rental LLC, PO Box 503005, 301 Office,
//         Al Asmawi Building, Dubai Investment Park 1, Dubai - UAE
//       </Text>

//       <View style={styles.mapContainer}>
//         <WebView
//           originWhitelist={['*']}
//           source={{
//             html: `<html>
//           <body>
//             <iframe width="100%" height="550" frameborder="0" style="border:0"
//       src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3616.054124036579!2d55.16973447537526!3d24.99827677783967!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjTCsDU5JzUzLjgiTiA1NcKwMTAnMjAuMyJF!5e0!3m2!1sen!2sae!4v1740144019937!5m2!1sen!2sae" allowfullscreen></iframe>
//           </body>
//       </html>` }}
//           style={styles.map}
//         />
//       </View>
//     </ScrollView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     paddingTop: windowHeight(20),
//   },
//   title: {
//     fontSize: fontSizes.FONT20,
//     fontWeight: 'bold',
//     marginBottom: windowHeight(10),
//   },
//   address: {
//     fontSize: fontSizes.FONT17,
//     lineHeight: windowHeight(15),
//     color: '#666',
//     marginBottom: 12,
//   },
//   map: {
//     flex: 1,
//     width: '100%',
//     height: '100%',
//   },
//   mapContainer: {
//     height: 220,
//     overflow: 'hidden',
//   },
// });



import React, { useMemo, useCallback } from 'react';
import { View, Text, StyleSheet, ScrollView, ActivityIndicator } from 'react-native';
import { WebView } from 'react-native-webview';
import { useValues } from '@App';
import { fontSizes, windowHeight } from '@theme/appConstant';

const LOCATIONS = [
  {
    id: 'warehouse',
    title: 'Warehouse Location',
    address: 'Mint Gulf Furniture Rental LLC, PO Box 503005, Phase 2, Block N, Warehouse 16 and 17, Dubai Industrial City, Dubai - UAE',
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7240.630345664296!2d55.07103300000001!3d24.853083!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f0bc0fc7bac0d%3A0xe2bbe34ca4953f13!2sMint%20Event%20Rentals%20DIC!5e0!3m2!1sen!2sae!4v1740143425145!5m2!1sen!2sae',
  },
  {
    id: 'office',
    title: 'Office Location',
    address: 'Mint Gulf Furniture Rental LLC, PO Box 503005, 301 Office, Al Asmawi Building, Dubai Investment Park 1, Dubai - UAE',
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3616.054124036579!2d55.16973447537526!3d24.99827677783967!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjTCsDU5JzUzLjgiTiA1NcKwMTAnMjAuMyJF!5e0!3m2!1sen!2sae!4v1740144019937!5m2!1sen!2sae',
  },
];

const MapHtml = ({ mapUrl }) => `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>*{margin:0;padding:0}body{width:100%;height:100%}iframe{width:100%;height:350px;border:none}</style>
</head>
<body>
  <iframe src="${mapUrl}" allowfullscreen="" loading="lazy"></iframe>
</body>
</html>`;

const LocationCard = React.memo(({ location, textRTLStyle }) => (
  <View key={location.id} >
    <Text style={[styles.title, { textAlign: textRTLStyle }]}>
      {location.title}
    </Text>

    <Text style={[styles.address, { textAlign: textRTLStyle }]}>
      {location.address}
    </Text>

    <View style={styles.mapContainer}>
      <WebView
        originWhitelist={['*']}
        source={{ html: MapHtml({ mapUrl: location.mapUrl }) }}
        style={styles.map}
        scrollEnabled={false}
        bounces={false}
        startInLoadingState
        renderLoading={() => (
          <View style={styles.loadingContainer}>
            <ActivityIndicator size="small" color="#999" />
          </View>
        )}
      />
    </View>

    <View style={{ height: windowHeight(25) }} />
  </View>
));

LocationCard.displayName = 'LocationCard';

export default function ContentSection() {
  const { textRTLStyle } = useValues();

  const locationCards = useMemo(
    () =>
      LOCATIONS.map((location) => (
        <LocationCard
          key={location.id}
          location={location}
          textRTLStyle={textRTLStyle}
        />
      )),
    [textRTLStyle]
  );

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}
      scrollEventThrottle={16}
    >
      {locationCards}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: windowHeight(20),
  },
  title: {
    fontSize: fontSizes.FONT20,
    fontWeight: 'bold',
    marginBottom: windowHeight(10),
  },
  address: {
    fontSize: fontSizes.FONT17,
    lineHeight: windowHeight(15),
    color: '#666',
    marginBottom: 12,
  },
  map: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  mapContainer: {
    height: 350,
    overflow: 'hidden',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
});