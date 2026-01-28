// import React, { useEffect, useRef, useState } from 'react';
// import { ActivityIndicator, ScrollView, Text, View } from 'react-native';
// import { Header } from '@commonComponents';
// import { windowHeight } from '@theme/appConstant';
// import { useTranslation } from 'react-i18next';
// import { useRoute, useTheme } from '@react-navigation/native';
// import { SafeAreaView } from 'react-native-safe-area-context';
// import { useShopifyProduct } from '../../../hooks/useShopifyProduct';

// const data = [
//   {
//     name: 'Elm Collection',
//     titleCard: {
//       image: 'https://cdn.shopify.com/s/files/1/0919/2957/5735/files/Gemini_Generated_Image_enk3cdenk3cdenk3.png?v=1765522831',
//       subText: "Elm",
//       title: "Dining Seating",
//       content: 'Elm Dining Table and Elm Dining Chair. Natural wood tones, understated elegance, and a design that complements every occasion.'
//     },
//     images: [
//       'https://cdn.shopify.com/s/files/1/0919/2957/5735/files/Gemini_Generated_Image_nnr9jonnr9jonnr9.png?v=1765525834',
//       'https://cdn.shopify.com/s/files/1/0919/2957/5735/files/Elm_dining_chair_table_1.png?v=1765525984'
//     ],
//     events: [
//       {
//         image: 'https://cdn.shopify.com/s/files/1/0919/2957/5735/files/ChatGPT_Image_Dec_12_2025_10_42_48_AM.png?v=1765522128',
//         title: 'Event Photo',
//         content: 'Our Elm Dining Table and Elm Dining Chairs deliver effortless sophistication through natural finishes and timeless design — a go-to choice for curated events and elevated dining settings.'
//       }
//     ]
//   },
//   {
//     name: 'Como Collection',
//     titleCard: {
//       image: 'https://cdn.shopify.com/s/files/1/0919/2957/5735/files/WhatsApp_Image_2025-12-20_at_3.02.23_PM.jpg?v=1766380308',
//       subText: "Como",
//       title: "Lounge Seating",
//       content: 'Experience Comfort in Style with our Como Wood Sofas Featuring White Cushions.'
//     },
//     images: [
//       'https://cdn.shopify.com/s/files/1/0919/2957/5735/files/WhatsApp_Image_2025-12-20_at_3.02.23_PM..jpg?v=1766380333',
//       'https://cdn.shopify.com/s/files/1/0919/2957/5735/files/WhatsApp_Image_2025-12-20_at_3.02.23_PM.jpg?v=1766380308',
//       'https://cdn.shopify.com/s/files/1/0919/2957/5735/files/WhatsApp_Image_2025-12-20_at_3.02.22_PM.jpg?v=1766380661'
//     ],
//     events: [
//       {
//         image: 'https://cdn.shopify.com/s/files/1/0919/2957/5735/files/TPC-05764.png?v=1769355392',
//         title: 'Event Photo',
//         content: 'Experience Comfort and Elegance with the Como Lounge Set for Your Next Event.'
//       }
//     ]
//   }
// ]


// export default function GallerySingle({ navigation }) {
//   const { t } = useTranslation();
//   const { colors } = useTheme();
//   const route = useRoute();
//   const scrollViewRef = useRef(null);

//   const { fetchProductData, product, loading } = useShopifyProduct();

//   /* Fetch product */
//   useEffect(() => {
//     if (route.params?.collectionId) {
//       fetchProductData(route.params.collectionId);
//       scrollViewRef.current?.scrollTo({ y: 0, animated: true });
//     }
//   }, [route.params?.collectionId]);


//   if (loading && !product) {
//     return (
//       <SafeAreaView style={{ flex: 1, justifyContent: 'center' }}>
//         <ActivityIndicator size="large" color={colors.primary} />
//       </SafeAreaView>
//     );
//   }

//   return (
//     <SafeAreaView style={{ paddingBottom: windowHeight(48) }}>
//       <Header
//         text="Gallery"
//         subText="Captured highlights"
//         showText
//         navigation={navigation}
//       />

//       <ScrollView
//         ref={scrollViewRef}
//         contentContainerStyle={{ paddingBottom: windowHeight(40) }}
//       >
//         <Text>{route.params?.name}</Text>

//       </ScrollView>
//     </SafeAreaView>
//   );
// }


import React, { useEffect, useRef } from 'react';
import { ActivityIndicator, Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { Header } from '@commonComponents';
import { useTranslation } from 'react-i18next';
import { useRoute, useTheme } from '@react-navigation/native';
import { fontSizes, windowHeight, windowWidth } from '@theme/appConstant';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './style';
import FeaturedCollection from './featuredCollection';
import { Button } from '@commonComponents';

const data = [
  {
    name: 'Elm Collection',
    titleCard: {
      image:
        'https://cdn.shopify.com/s/files/1/0919/2957/5735/files/Gemini_Generated_Image_enk3cdenk3cdenk3.png?v=1765522831',
      subText: 'Elm',
      title: 'Dining Seating',
      content:
        'Elm Dining Table and Elm Dining Chair. Natural wood tones, understated elegance, and a design that complements every occasion.',
    },
    images: [
      'https://cdn.shopify.com/s/files/1/0919/2957/5735/files/Gemini_Generated_Image_nnr9jonnr9jonnr9.png?v=1765525834',
      'https://cdn.shopify.com/s/files/1/0919/2957/5735/files/Elm_dining_chair_table_1.png?v=1765525984',
    ],
    events: [
      {
        image:
          'https://cdn.shopify.com/s/files/1/0919/2957/5735/files/ChatGPT_Image_Dec_12_2025_10_42_48_AM.png?v=1765522128',
        title: 'Event Photo',
        content:
          'Our Elm Dining Table and Elm Dining Chairs deliver effortless sophistication through natural finishes and timeless design — a go-to choice for curated events and elevated dining settings.',
      },
    ],
  },
  {
    name: 'Como Collection',
    titleCard: {
      image:
        'https://cdn.shopify.com/s/files/1/0919/2957/5735/files/WhatsApp_Image_2025-12-20_at_3.02.23_PM.jpg?v=1766380308',
      subText: 'Como',
      title: 'Lounge Seating',
      content:
        'Experience Comfort in Style with our Como Wood Sofas Featuring White Cushions.',
    },
    images: [
      'https://cdn.shopify.com/s/files/1/0919/2957/5735/files/WhatsApp_Image_2025-12-20_at_3.02.23_PM..jpg?v=1766380333',
      'https://cdn.shopify.com/s/files/1/0919/2957/5735/files/WhatsApp_Image_2025-12-20_at_3.02.23_PM.jpg?v=1766380308',
      'https://cdn.shopify.com/s/files/1/0919/2957/5735/files/WhatsApp_Image_2025-12-20_at_3.02.22_PM.jpg?v=1766380661',
    ],
    events: [
      {
        image:
          'https://cdn.shopify.com/s/files/1/0919/2957/5735/files/TPC-05764.png?v=1769355392',
        title: 'Event Photo',
        content:
          'Experience Comfort and Elegance with the Como Lounge Set for Your Next Event.',
      },
    ],
  },
  {
    name: 'Emerson Collection',
    titleCard: {
      image:
        'https://cdn.shopify.com/s/files/1/0919/2957/5735/files/Gemini_Generated_Image_enk3cdenk3cdenk3.png?v=1765522831',
      subText: 'Emerson',
      title: 'Lounge Seating',
      content:
        'Transform Your Space with a Stylish Pink Cushion on a Plush Velvet Sofa',
    },
    images: [
      'https://cdn.shopify.com/s/files/1/0919/2957/5735/files/emerson_72d910b6-47e1-42c0-98ac-68519824496c.jpg?v=1736837396',
      'https://cdn.shopify.com/s/files/1/0919/2957/5735/files/EMERSON...jpg?v=1737985803',
      'https://cdn.shopify.com/s/files/1/0919/2957/5735/files/EMERSON3..jpg?v=1737021205'
    ],
    events: [
      {
        image:
          'https://cdn.shopify.com/s/files/1/0919/2957/5735/files/EMERSONCURVED..jpg?v=1737021348',
        title: 'Event Photo',
        content:
          'Discover the Perfect Balance of Comfort and Style with Emerson Curve Sofa Collection.',
      },
    ],
    images2: [
      'https://cdn.shopify.com/s/files/1/0919/2957/5735/files/emersonstool..jpg?v=1739002191',
      'https://cdn.shopify.com/s/files/1/0919/2957/5735/files/Emerson_Curved_Sofas_and_Belle_Coffee_tables_1.jpg?v=1741687436',
      'https://cdn.shopify.com/s/files/1/0919/2957/5735/files/Scandinavian_two_seater_beige_with_Emerson_lotus_ottoman_2_1.jpg?v=1741687618'
    ],
  },
  {
    name: 'Madeline Collection',
    titleCard: {
      image:
        'https://cdn.shopify.com/s/files/1/0919/2957/5735/files/madeline....jpg?v=1739616506',
      subText: 'Madeline',
      title: 'Lounge Seating',
      content:
        'Experience Luxury Comfort in our Exquisite Classic Vintage Lounge Set Designs.',
    },
    images: [
      'https://cdn.shopify.com/s/files/1/0919/2957/5735/files/Madeline_sofa_copy.jpg?v=1741689595',
      'https://cdn.shopify.com/s/files/1/0919/2957/5735/files/Copy_of_Madeline_furniture_setup_images_2.jpg?v=1741689510',
      'https://cdn.shopify.com/s/files/1/0919/2957/5735/files/madeline_2e3125e0-9520-49be-9378-6539a2345b2b.jpg?v=1738935381'
    ],
    events: [
      {
        image:
          'https://cdn.shopify.com/s/files/1/0919/2957/5735/files/madeline..jpg?v=1737380715',
        title: 'Dining Setting',
        content:
          'Elevate Your Dining Experience with the Madeline Classic Collection',
      },
      {
        image:
          'https://cdn.shopify.com/s/files/1/0919/2957/5735/files/Untitled-3_86e6eb00-05d3-450f-b010-3944f81aec77.jpg?v=1759559481',
        title: 'The Madeline Dining Chair',
        content:
          'Where Comfort and Sophistication Converge in High-End Design',
      },
    ],
    images2: [
      'https://cdn.shopify.com/s/files/1/0919/2957/5735/files/Madeline_chair_with_Madeline_dining_tables.jpg?v=1741689453',
      'https://cdn.shopify.com/s/files/1/0919/2957/5735/files/Madeline_57fef6bf-1253-48e0-99a9-8c72d9a1027a.jpg?v=1741689435',
      'https://cdn.shopify.com/s/files/1/0919/2957/5735/files/Madeline_cocktail_tablles_with_Vintage_Louis_bar_stools_3_1.jpg?v=1741689479'
    ],
  },

  {
    name: 'Belle Collection',
    titleCard: {
      image:
        'https://cdn.shopify.com/s/files/1/0919/2957/5735/files/belle_collection_49f2c641-8dcd-4c95-9144-3bd79c22c8df.jpg?v=1739886913',
      subText: 'Belle',
      title: 'Lounge Seating',
      content:
        'Upgrade Your Cozy Game with the Belle Blue Velvet Lounge Setting. Exceptional Quality, Timeless Elegance.',
    },
    images: [
      'https://cdn.shopify.com/s/files/1/0919/2957/5735/files/belle_1._a3192797-c933-4404-8abe-71dcd62075c8.jpg?v=1738158962',
      'https://cdn.shopify.com/s/files/1/0919/2957/5735/files/belle..jpg?v=1738936361',
      'https://cdn.shopify.com/s/files/1/0919/2957/5735/files/BELLE3..jpg?v=1737020830'
    ],
    events: [
      {
        image:
          'https://cdn.shopify.com/s/files/1/0919/2957/5735/files/Belle_Barstool_Blue_1.png?v=1769406810',
        title: 'Bar Stools',
        content:
          'Experience Comfort and Style with Belle Blue Leather Bar Stools.',
      },
      {
        image:
          'https://cdn.shopify.com/s/files/1/0919/2957/5735/files/Belle_Epoque_chair_clear_1_copy.jpg?v=1741691538',
        title: 'Belle Epoque',
        content:
          'Choose The Perfect Combination of Classic and Modern with Our belle Epoque Dining Chairs.',
      },
    ],
  },
  {
    name: 'Amalfi Collection',
    titleCard: {
      image:
        'https://cdn.shopify.com/s/files/1/0919/2957/5735/files/amalfi_oval_coffee..jpg?v=1737788361',
      subText: 'Amalfi',
      title: 'Lounge Seating',
      content:
        'Experience Superior Comfort and Stylish Design with Our Amalfi Lounge Sofas Adorned with Plush Cream Cushions.',
    },
    images: [
      'https://cdn.shopify.com/s/files/1/0919/2957/5735/files/amalfi_single_seater_10174b1d-9951-4f39-8892-efb300218a47.jpg?v=1737028585',
      'https://cdn.shopify.com/s/files/1/0919/2957/5735/files/amalfi_7cecdd12-9664-4006-bd30-2c70adc023b3.jpg?v=1737181790',
      'https://cdn.shopify.com/s/files/1/0919/2957/5735/files/amalfi_oval_coffee..jpg?v=1737788361'
    ],
    events: [
      {
        image:
          'https://cdn.shopify.com/s/files/1/0919/2957/5735/files/Amalfi_Oval_Dining_Table._2b3d0469-50d9-488c-862f-0cc7371110e9.jpg?v=1742305053',
        title: 'Dining Setting',
        content:
          'Experience the Elegance of Round Wood Dining Tables with Boucle Chairs.',
      }
    ],
    images2: [
      'https://cdn.shopify.com/s/files/1/0919/2957/5735/files/Art_Dubai_2025-236.jpg?v=1759560850',
      'https://cdn.shopify.com/s/files/1/0919/2957/5735/files/Art_Dubai_2025-240.jpg?v=1759561348'
    ],
  },

  {
    name: 'Hamilton Collection',
    titleCard: {
      image:
        'https://cdn.shopify.com/s/files/1/0919/2957/5735/files/amalfi_oval_coffee..jpg?v=1737788361',
      subText: 'Hamilton',
      title: 'Lounge Seating',
      content:
        'Elevate Your Lounge Experience with the Hamilton Lounge Set - Now Available in Multiple Cushion Color Options.',
    },
    images: [
      'https://cdn.shopify.com/s/files/1/0919/2957/5735/files/DSC06638-min.jpg?v=1742289185',
      'https://cdn.shopify.com/s/files/1/0919/2957/5735/files/DSC06651-min.jpg?v=1742289210',
      'https://cdn.shopify.com/s/files/1/0919/2957/5735/files/DSC06618-min.jpg?v=1742289233'
    ],
    events: [
      {
        image:
          'https://cdn.shopify.com/s/files/1/0919/2957/5735/files/Hamilton_Dining_Table_with_Hamilton_DIning_Chair_2__jpg.jpg?v=1759585612',
        title: 'Dining Setting',
        content:
          'Explore the Impressive Elegance of the Hamilton Dining Set in Black Wood and Brown Mesh.',
      },
      {
        image:
          'https://cdn.shopify.com/s/files/1/0919/2957/5735/files/Hamilton_sofa_Black_with_round_ottoman_black_4.jpg?v=1759585204',
        title: 'Event Lounge Seating',
        content:
          'Move beyond standard seating. Our Hamilton Collection creates chic, comfortable zones where conversations flow and guests linger.',
      }
    ],
    images2: [
      'https://cdn.shopify.com/s/files/1/0919/2957/5735/files/Hamilton_sofa_Black_with_round_ottoman_black_6.jpg?v=1759585503',
      'https://cdn.shopify.com/s/files/1/0919/2957/5735/files/Art_Dubai_2025-205.png?v=1769408037',
      'https://cdn.shopify.com/s/files/1/0919/2957/5735/files/hamilton_bar..jpg?v=1759585823'
    ],
  },

  {
    name: 'Arrow Collection',
    titleCard: {
      image:
        'https://cdn.shopify.com/s/files/1/0919/2957/5735/files/White_arrow_dining_chair.jpg?v=1742901498',
      subText: 'Arrow',
      title: 'Dining Setting',
      content:
        'Enhance Your Dining Experience with Arrow Style Chairs.',
    },
    images: [
      'https://cdn.shopify.com/s/files/1/0919/2957/5735/files/arrow_0f52244a-e75a-4304-a929-3eb62eafaf8b.jpg?v=1742901314',
      'https://cdn.shopify.com/s/files/1/0919/2957/5735/files/arrow_black..jpg?v=1738156492',
      'https://cdn.shopify.com/s/files/1/0919/2957/5735/files/Whitewash_hairpin_cocktail_tables_with_Arrow_bar_stools_white_1.jpg?v=1742902228'
    ],
    events: [
      {
        image:
          'https://cdn.shopify.com/s/files/1/0919/2957/5735/files/wirewhiteseat..jpg?v=1739015953',
        title: 'Event Photo',
        content:
          'Sleek and Stylish Wire Barstools Available in Opulent Gold.',
      }
    ],
    images2: [
      'https://cdn.shopify.com/s/files/1/0919/2957/5735/files/munich_d513bbee-6d79-4bae-ac09-9237e7157e6e.jpg?v=1742902601',
      'https://cdn.shopify.com/s/files/1/0919/2957/5735/files/Munich_chairs_gold.jpg?v=1742902453',
    ],
  },

  {
    name: 'Sophie Collection',
    titleCard: {
      image:
        'https://cdn.shopify.com/s/files/1/0919/2957/5735/files/EMERSON..._e25b8c38-3b92-4988-913b-de364d35df81.jpg?v=1741686972',
      subText: 'Emerson',
      title: 'Lounge Seating',
      content:
        'Transform Your Space with a Stylish Pink Cushion on a Plush Velvet Sofa',
    },
    images: [
      'https://cdn.shopify.com/s/files/1/0919/2957/5735/files/emerson_72d910b6-47e1-42c0-98ac-68519824496c.jpg?v=1736837396',
      'https://cdn.shopify.com/s/files/1/0919/2957/5735/files/EMERSON...jpg?v=1737985803',
      'https://cdn.shopify.com/s/files/1/0919/2957/5735/files/EMERSON3..jpg?v=1737021205'
    ],
    events: [
      {
        image:
          'https://cdn.shopify.com/s/files/1/0919/2957/5735/files/EMERSONCURVED..jpg?v=1737021348',
        title: 'Event Photo',
        content:
          'Discover the Perfect Balance of Comfort and Style with Emerson Curve Sofa Collection.',
      }
    ],
    images2: [
      'https://cdn.shopify.com/s/files/1/0919/2957/5735/files/emersonstool..jpg?v=1739002191',
      'https://cdn.shopify.com/s/files/1/0919/2957/5735/files/Emerson_Curved_Sofas_and_Belle_Coffee_tables_1.jpg?v=1741687436',
      'https://cdn.shopify.com/s/files/1/0919/2957/5735/files/Scandinavian_two_seater_beige_with_Emerson_lotus_ottoman_2_1.jpg?v=1741687618'
    ],
  },

  {
    name: 'Pallet Collection',
    titleCard: {
      image:
        'https://cdn.shopify.com/s/files/1/0919/2957/5735/files/pallet_9adc2354-2313-4ca9-a3a1-21e6c381699b.jpg?v=1739523220',
      subText: 'Pallet',
      title: 'Lounge Seating',
      content:
        'Transform Your Outdoor Space with Sleek and Versatile Pallet Lounge Seating.',
    },
    images: [
      'https://cdn.shopify.com/s/files/1/0919/2957/5735/files/PALLET_COFFEE..jpg?v=1739525460',
      'https://cdn.shopify.com/s/files/1/0919/2957/5735/files/pallet_collection.jpg?v=1739541856',
      'https://cdn.shopify.com/s/files/1/0919/2957/5735/files/pallet_2.jpg?v=1739523692'
    ],
    events: [
      {
        image:
          'https://cdn.shopify.com/s/files/1/0919/2957/5735/files/pallet.jpg?v=1736414704',
        title: 'Event Photo',
        content:
          'Chill Out at Your Event with our Hip Pallet Lounge Seating Options.',
      }
    ]
  },

  {
    name: 'Scandinavian Collection',
    titleCard: {
      image:
        'https://cdn.shopify.com/s/files/1/0919/2957/5735/files/IMG_6549_JPEG.jpg?v=1762777565',
      subText: 'Scandinavian',
      title: 'Lounge Seating',
      content:
        'Get Comfy and Chic with Our Scandinavian-Inspired Lounge Seating.',
    },
    images: [
      'https://cdn.shopify.com/s/files/1/0919/2957/5735/files/SCANDIGREY..jpg?v=1737024325',
      'https://cdn.shopify.com/s/files/1/0919/2957/5735/files/scandinaviancream..jpg?v=1737031893',
      'https://cdn.shopify.com/s/files/1/0919/2957/5735/files/SCANDICREAM..jpg?v=1737024356'
    ],
    events: [
      {
        image:
          'https://cdn.shopify.com/s/files/1/0919/2957/5735/files/Scandinavian_barstool_Scandinavian_cocktail_table.jpg?v=1742385447',
        title: 'Cocktail Table & Barstool',
        content:
          'Sip in Style with our Scandi-chic cocktail tables and trendy barstools!',
      }
    ],
    images2: [
      'https://cdn.shopify.com/s/files/1/0919/2957/5735/files/scandi_round.jpg?v=1737705159',
      'https://cdn.shopify.com/s/files/1/0919/2957/5735/files/scandistool..jpg?v=1739002348',
      'https://cdn.shopify.com/s/files/1/0919/2957/5735/files/scandi_b9370fa1-17b9-4d19-93d8-a9126c55ba73.jpg?v=1737704864'
    ],
  },

  {
    name: 'Bordeaux Collection',
    titleCard: {
      image:
        'https://cdn.shopify.com/s/files/1/0919/2957/5735/files/Bordeaux_three_seater_provincial_single_seater_Madeline_coffee_tables_and_logs_1_1.jpg?v=1742374276',
      subText: 'Bordeaux',
      title: 'Lounge Seating',
      content:
        'Savor the Opulence of Bordeaux Lounge Seating - Where Luxury Meets Comfort.',
    },
    images: [
      'https://cdn.shopify.com/s/files/1/0919/2957/5735/files/Madeline_cocktail_tablles_with_Vintage_Louis_bar_stools_3_1.jpg?v=1741689479',
      'https://cdn.shopify.com/s/files/1/0919/2957/5735/files/BORDEAUX_2_SEATER_yjikn.jpg?v=1737020130',
      'https://cdn.shopify.com/s/files/1/0919/2957/5735/files/Copy_of_Bordeaux_Lounge_sofa_Kosha.png?v=1742303362'
    ],
    events: [
      {
        image:
          'https://cdn.shopify.com/s/files/1/0919/2957/5735/files/bordeuax.png?v=1742303330',
        title: 'Event Photo',
        content:
          'Discover the Art of Bordeaux Event Photo Set Up with Expert Advice.',
      }
    ]
  },

  {
    name: 'Zelda Collection',
    titleCard: {
      image:
        'https://cdn.shopify.com/s/files/1/0919/2957/5735/files/Osaka_Accent_Chair_and_Zelda_Coffee_Table.jpg?v=1742306132',
      subText: 'Zelda',
      title: 'Coffee Table',
      content:
        'The Perfect Blend of Elegance and Functionality: Zelda Gold Frame Coffee Table',
    },
    images: [
      'https://cdn.shopify.com/s/files/1/0919/2957/5735/files/Zelda_cocktail_table_Konig_barstool.jpg?v=1742306166',
      'https://cdn.shopify.com/s/files/1/0919/2957/5735/files/Copy_of_Black_Arrow_Dining_Chair_Zelda_black_Dining_Table.jpg?v=1742306173',
      'https://cdn.shopify.com/s/files/1/0919/2957/5735/files/Madeline_dining_chairs_with_Zelda_Rectangle_coffee_table_gold_2.jpg?v=1742306520'
    ],
    events: [
      {
        image:
          'https://cdn.shopify.com/s/files/1/0919/2957/5735/files/Copy_of_Pink_Elle_Lounge_Sofa_Zelda_Gold_Coffee_Table.jpg?v=1742373062',
        title: 'Lounge Seating',
        content:
          'Discover the Perfect Match to your Zelda Collection:  Elle Two Seater Sofa!',
      },
      {
        image:
          'https://cdn.shopify.com/s/files/1/0919/2957/5735/files/Hugo_Accent_Chair_and_Zelda_Rectangular_Cocktail_Table.jpg?v=1742306161',
        title: 'Dining Table',
        content:
          'Elevate Your Dining Space with the Zelda Dining Table.',
      },
      {
        image:
          'https://cdn.shopify.com/s/files/1/0919/2957/5735/files/Zelda_rectangle_cocktail_table_gold_with_Gold_Arrow_Bar_stools.jpg?v=1742306492',
        title: 'Cocktail Table',
        content:
          'Luxurious Living Room Upgrade: Zelda Cocktail Tables.',
      }
    ],
    images2: [
      'https://cdn.shopify.com/s/files/1/0919/2957/5735/files/Copy_of_Elle_sofas_pink_event..jpg?v=1742373467',
      'https://cdn.shopify.com/s/files/1/0919/2957/5735/files/Copy_of_Elle_sofas_pink_event_copy.jpg?v=1742373467',
      'https://cdn.shopify.com/s/files/1/0919/2957/5735/files/Copy_of_Elle_sofas_pink_event.jpg?v=1742373467',
      'https://cdn.shopify.com/s/files/1/0919/2957/5735/files/Copy_of_Elle_sofas_pink_event_copy....jpg?v=1742373467',
      'https://cdn.shopify.com/s/files/1/0919/2957/5735/files/Copy_of_Elle_sofas_pink_event_copy...jpg?v=1742373468'
    ],
  },

  {
    name: 'Kosha Collection',
    titleCard: {
      image:
        'https://cdn.shopify.com/s/files/1/0919/2957/5735/files/Copy_of_Sophie_lounge_Kosha_f2ff3d83-b5ce-4ccf-ba1a-3da535868acc.png?v=1741763517',
      subText: 'Kosha',
      title: 'Lounge Seating',
      content:
        'Elevate Your Relaxing Moments with our Luxurious Lounge Collection.',
    },
    images: [
      'https://cdn.shopify.com/s/files/1/0919/2957/5735/files/Kosha_Windsor_lounge_sofa_1.jpg?v=1741762828',
      'https://cdn.shopify.com/s/files/1/0919/2957/5735/files/Bordeaux_single_seater_event_1.jpg?v=1741762891',
      'https://cdn.shopify.com/s/files/1/0919/2957/5735/files/Vintage_Brown_Chesterfield_Sofa_2.jpg?v=1741762869'
    ],
    events: [
      {
        image:
          'https://cdn.shopify.com/s/files/1/0919/2957/5735/files/Deconstructed_chesterfield_makan_coffee_table_2.jpg?v=1741761367',
        title: 'Event Photo',
        content:
          'Create an Atmosphere of Classic Elegance with Stylish Vintage Lounge Settings.',
      },
    ],
  },

  {
    name: 'Industrial',
    titleCard: {
      image:
        'https://cdn.shopify.com/s/files/1/0919/2957/5735/files/Red_Drum_cocktail_table_with_Black_and_white_Tolix_bar_stools_1.jpg?v=1742382843',
      subText: '',
      title: 'Industrial',
      content:
        'Funky Finds: Brighten Up Your Space with a Colorful Drum High Table and Trendy Tolix Bar stool Combo!',
    },
    images: [
      'https://cdn.shopify.com/s/files/1/0919/2957/5735/files/Barrels_Logs_1_773b797a-5d5c-4820-967a-3d4dbb92a5eb.jpg?v=1742382842',
      'https://cdn.shopify.com/s/files/1/0919/2957/5735/files/Barrels_Logs_1.jpg?v=1742382842',
      'https://cdn.shopify.com/s/files/1/0919/2957/5735/files/Barrel_Table.jpg?v=1742382843'
    ],
    events: [],
    images2: [
      'https://cdn.shopify.com/s/files/1/0919/2957/5735/files/Red_Drum_cocktail_table_with_red_tolix_bar_stools_1.jpg?v=1742382842',
      'https://cdn.shopify.com/s/files/1/0919/2957/5735/files/DSC09244-Edit_copy.jpg?v=1742383464',
      'https://cdn.shopify.com/s/files/1/0919/2957/5735/files/Red_Drum_cocktail_table_with_Black_and_Yellow_Tolix_bar_stools_1.jpg?v=1742382923',
      'https://cdn.shopify.com/s/files/1/0919/2957/5735/files/DSC09193_copy.jpg?v=1742383363',
      'https://cdn.shopify.com/s/files/1/0919/2957/5735/files/DSC09247_copy.jpg?v=1742383324'
    ]
  },

  {
    name: 'Hairpin Collection',
    titleCard: {
      image:
        'https://cdn.shopify.com/s/files/1/0919/2957/5735/files/EMERSON..._e25b8c38-3b92-4988-913b-de364d35df81.jpg?v=1741686972',
      subText: 'Emerson',
      title: 'Lounge Seating',
      content:
        'Transform Your Space with a Stylish Pink Cushion on a Plush Velvet Sofa',
    },
    images: [
      'https://cdn.shopify.com/s/files/1/0919/2957/5735/files/emerson_72d910b6-47e1-42c0-98ac-68519824496c.jpg?v=1736837396',
      'https://cdn.shopify.com/s/files/1/0919/2957/5735/files/EMERSON...jpg?v=1737985803',
      'https://cdn.shopify.com/s/files/1/0919/2957/5735/files/EMERSON3..jpg?v=1737021205'
    ],
    events: [
      {
        image: 'https://cdn.shopify.com/s/files/1/0919/2957/5735/files/EMERSONCURVED..jpg?v=1737021348',
        title: 'Event Photo',
        content: 'Discover the Perfect Balance of Comfort and Style with Emerson Curve Sofa Collection.',
      }
    ],
    images2: [
      'https://cdn.shopify.com/s/files/1/0919/2957/5735/files/emersonstool..jpg?v=1739002191',
      'https://cdn.shopify.com/s/files/1/0919/2957/5735/files/Emerson_Curved_Sofas_and_Belle_Coffee_tables_1.jpg?v=1741687436',
      'https://cdn.shopify.com/s/files/1/0919/2957/5735/files/Scandinavian_two_seater_beige_with_Emerson_lotus_ottoman_2_1.jpg?v=1741687618'
    ]
  },

  {
    name: 'Corporate',
    titleCard: {
      image:
        'https://cdn.shopify.com/s/files/1/0919/2957/5735/files/Marina_Sofa_Alpha_Rectangle_Coffee_Table_1.jpg?v=1742467642',
      subText: 'Marina',
      title: 'Lounge Seating',
      content:
        'Maximize your Event Space with Top-Quality Marina Lounge Seating Options.',
    },
    images: [
      'https://cdn.shopify.com/s/files/1/0919/2957/5735/files/Knoll_sofa_black.jpg?v=1742467642',
      'https://cdn.shopify.com/s/files/1/0919/2957/5735/files/Newport_Three_and_Two_seater_sofas_1.jpg?v=1742904956',
      'https://cdn.shopify.com/s/files/1/0919/2957/5735/files/Marina_sofas.jpg?v=1742467642'
    ],
    events: [
      {
        image: 'https://cdn.shopify.com/s/files/1/0919/2957/5735/files/Knoll_Single_Seater_sofas.jpg?v=1742467642',
        title: 'Event Photo',
        content: 'Knoll Lounge Seating: Discover the Ultimate Comfort Solution for Your Space.',
      }
    ],
    images2: [
      'https://cdn.shopify.com/s/files/1/0919/2957/5735/files/DSC09159-Edit_copy.jpg?v=1742905180',
      'https://cdn.shopify.com/s/files/1/0919/2957/5735/files/DSC09213-Edit_copy.jpg?v=1742905470',
      'https://cdn.shopify.com/s/files/1/0919/2957/5735/files/DSC09140-Edit_copy.png?v=1769412873',
      'https://cdn.shopify.com/s/files/1/0919/2957/5735/files/DSC09177-Edit_copy.jpg?v=1742905433',
      'https://cdn.shopify.com/s/files/1/0919/2957/5735/files/DSC09217-Edit_copy.jpg?v=1742905450'
    ]
  },
  {
    name: 'Arabic Seating',
    titleCard: {
      image:
        'https://cdn.shopify.com/s/files/1/0919/2957/5735/files/IMG_9769_2.png?v=1769413140',
      subText: '',
      title: 'Arabic Seating',
      content:
        'Enhance the Cultural Experience of Your Event with Stylish Arabic Seating.',
    },
    images: [
      'https://cdn.shopify.com/s/files/1/0919/2957/5735/files/1_DSC05842.png?v=1769413225',
      'https://cdn.shopify.com/s/files/1/0919/2957/5735/files/Moroccan_Pouffs_Moroccan_Coffee_table_1.jpg?v=1742903658',
      'https://cdn.shopify.com/s/files/1/0919/2957/5735/files/IMG_9797.jpg?v=1742903300'
    ],
    events: [
      {
        image: 'https://cdn.shopify.com/s/files/1/0919/2957/5735/files/Mason_Majlis_and_Moroccan_Poufs1_1.jpg?v=1742903697',
        title: 'Event Photo',
        content: 'Elevate Your Living Space with Exquisite Mason Majlis Furniture.',
      }
    ]
  },
  {
    name: 'Outdoor Seating',
    titleCard: {
      image:
        'https://cdn.shopify.com/s/files/1/0919/2957/5735/files/MATHILDA_SETUP.png?v=1769413490',
      subText: 'Emerson',
      title: 'Lounge Seating',
      content:
        'Transform Your Space with a Stylish Pink Cushion on a Plush Velvet Sofa',
    },
    images: [
      'https://cdn.shopify.com/s/files/1/0919/2957/5735/files/LYLIA_SETUP_DETAIL_2_copy.png?v=1769413607',
      'https://cdn.shopify.com/s/files/1/0919/2957/5735/files/ABEL_SETUP_2.png?v=1769413669',
      'https://cdn.shopify.com/s/files/1/0919/2957/5735/files/BRUNO_SETUP.png?v=1769413734'
    ],
    events: []
  },
];

export default function GallerySingle({ navigation }) {
  const { t } = useTranslation();
  const { colors } = useTheme();
  const route = useRoute();
  const scrollViewRef = useRef(null);

  const selectedCollection = data.find(
    item => item.name === route.params?.name
  );

  useEffect(() => {
    scrollViewRef.current?.scrollTo({ y: 0, animated: false });
  }, [route.params?.name]);

  if (!selectedCollection) {
    return (
      <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>No gallery found</Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Header
        text="Gallery"
        subText="Captured highlights"
        showText
        navigation={navigation}
      />

      <ScrollView
        ref={scrollViewRef}
      // contentContainerStyle={{ paddingBottom: windowHeight(10) }}
      >
        <View style={{ padding: 16 }}>
          <Text style={{ fontSize: fontSizes.FONT25, fontWeight: 'bold', marginTop: windowHeight(15), textAlign: 'center' }} >{route.params?.name}</Text>
          {/* Title Card */}
          <View style={{ marginTop: windowHeight(15), borderRadius: windowHeight(10), overflow: 'hidden' }}>
            <Image
              source={{ uri: selectedCollection.titleCard.image }}
              style={{ width: '100%', height: windowHeight(190) }}
            />
            <View style={{ backgroundColor: '#000', flexDirection: 'column', gap: windowHeight(8), alignItems: 'center', paddingVertical: windowHeight(30) }}>
              <Text style={{ fontSize: fontSizes.FONT15, color: '#fff' }}>
                {t(selectedCollection.titleCard.subText)}
              </Text>
              <Text style={{ fontSize: fontSizes.FONT25, color: '#fff', fontWeight: 'bold' }}>
                {t(selectedCollection.titleCard.title)}
              </Text>
              <Text style={{ fontSize: fontSizes.FONT17, color: '#fff', maxWidth: windowWidth(400), textAlign: 'center', lineHeight: windowHeight(15) }}>
                {t(selectedCollection.titleCard.content)}
              </Text>

              <TouchableOpacity
                activeOpacity={0.85}
                onPress={() => {
                  navigation.navigate('ShopPageCollection', {
                    collectionId: route.params?.collectionId,
                  });
                }}
                style={styles.button}
              >
                <Text style={styles.buttonText}>Rent This Look</Text>
              </TouchableOpacity>

            </View>
          </View>

          <FeaturedCollection
            collectionId={route.params?.collectionId}
            navigation={navigation}
            colors={colors}
            t={t}
          />

          {/* Images */}
          <View style={{ flexDirection: 'column', gap: windowHeight(8), marginVertical: windowHeight(18) }} >
            {selectedCollection.images.map((img, index) => (
              <Image
                key={index}
                source={{ uri: img }}
                style={{ width: '100%', height: windowHeight(190), borderRadius: windowHeight(10) }}
              />
            ))}
          </View>

          {/* Events */}
          <View style={{ flexDirection: 'column', gap: windowHeight(8) }} >
            {selectedCollection.events.map((event, index) => (
              <View key={index} style={{ marginTop: windowHeight(1), borderRadius: windowHeight(10), overflow: 'hidden' }}>
                <Image
                  source={{ uri: event.image }}
                  style={{ width: '100%', height: windowHeight(350) }}
                />
                <View style={{ backgroundColor: '#000', flexDirection: 'column', gap: windowHeight(8), alignItems: 'center', paddingVertical: windowHeight(30) }}>
                  <Text style={{ fontSize: fontSizes.FONT25, color: '#fff', fontWeight: 'bold' }}>
                    {event.title}
                  </Text>
                  <Text style={{ fontSize: fontSizes.FONT17, color: '#fff', maxWidth: windowWidth(400), textAlign: 'center', lineHeight: windowHeight(15) }}>
                    {event.content}
                  </Text>
                </View>
              </View>
            ))}
          </View>

          {selectedCollection.images2 && (
            <View style={{ flexDirection: 'column', gap: windowHeight(8), marginVertical: windowHeight(18) }} >
              {selectedCollection.images2.map((img, index) => (
                <Image
                  key={index}
                  source={{ uri: img }}
                  style={{ width: '100%', height: windowHeight(190), borderRadius: windowHeight(10) }}
                />
              ))}
            </View>
          )}

        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
