// import React, { useState } from 'react';
// import { View, ScrollView, TouchableOpacity, Text } from 'react-native';
// import { Header } from '@commonComponents';
// import { useTranslation } from 'react-i18next';
// import ContentSection from './contentSection';
// import ContactSection from './contactSection';
// import { windowWidth } from '@theme/appConstant';
// import TopSection from './topSection';
// import { useTheme } from '@react-navigation/native';
// import { SafeAreaView } from 'react-native-safe-area-context';

// export default function helpCenter({ navigation }) {
//   const { t } = useTranslation()
//   const { colors } = useTheme();
//   const [activeTab, setActiveTab] = useState('find');

//   return (
//     <SafeAreaView>
//       <Header text={t('helpCenter.helpCenter')} navigation={navigation} />

//       <View style={{ flexDirection: 'row', marginHorizontal: windowWidth(20), marginTop: 1 }}>

//         <TouchableOpacity
//           onPress={() => setActiveTab('contact')}
//           style={{
//             flex: 1,
//             paddingVertical: 12,
//             borderBottomWidth: 2,
//             borderBottomColor: activeTab === 'contact' ? colors.primary : 'transparent',
//           }}
//         >
//           <Text
//             style={{
//               textAlign: 'center',
//               color: activeTab === 'contact' ? colors.primary : colors.text,
//               // fontWeight: '600',
//             }}
//           >
//             {t('helpCenter.contact')}
//           </Text>
//         </TouchableOpacity>

//         <TouchableOpacity
//           onPress={() => setActiveTab('find')}
//           style={{
//             flex: 1,
//             paddingVertical: 12,
//             borderBottomWidth: 2,
//             borderBottomColor: activeTab === 'find' ? colors.primary : 'transparent',
//           }}
//         >
//           <Text
//             style={{
//               textAlign: 'center',
//               color: activeTab === 'find' ? colors.primary : colors.text,
//               // fontWeight: '600',
//             }}
//           >
//             Find us
//           </Text>
//         </TouchableOpacity>
//       </View>

//       <ScrollView showsVerticalScrollIndicator={false} style={{ marginHorizontal: windowWidth(20), marginBottom: windowWidth(90) }}>
//         {/* <TopSection t={t} colors={colors} /> */}
//         {activeTab === 'contact' ? (
//           <ContactSection t={t} colors={colors} />
//         ) : (
//           <ContentSection t={t} colors={colors} />
//         )}
//       </ScrollView>
//     </SafeAreaView>
//   )
// }


import React, { useState, useCallback, useMemo } from 'react';
import { View, ScrollView, TouchableOpacity, Text } from 'react-native';
import { Header } from '@commonComponents';
import { useTranslation } from 'react-i18next';
import ContentSection from './contentSection';
import ContactSection from './contactSection';
import { windowWidth } from '@theme/appConstant';
import { useTheme } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';

const TAB_ITEMS = [
  { id: 'contact', key: 'helpCenter.contact' },
  { id: 'find', key: 'helpCenter.find' },
];

const TabButton = React.memo(({ tab, activeTab, onPress, colors, label }) => (
  <TouchableOpacity
    onPress={onPress}
    activeOpacity={0.7}
    style={{
      flex: 1,
      paddingVertical: 12,
      borderBottomWidth: 2,
      borderBottomColor: activeTab === tab.id ? colors.primary : 'transparent',
    }}
  >
    <Text
      style={{
        textAlign: 'center',
        color: activeTab === tab.id ? colors.primary : colors.text,
      }}
    >
      {label}
    </Text>
  </TouchableOpacity>
));

TabButton.displayName = 'TabButton';

export default function HelpCenter({ navigation }) {
  const { t } = useTranslation();
  const { colors } = useTheme();
  const [activeTab, setActiveTab] = useState('find');

  const handleTabPress = useCallback((tabId) => {
    setActiveTab(tabId);
  }, []);

  const renderedComponent = useMemo(() => {
    return activeTab === 'contact' ? (
      <ContactSection t={t} colors={colors} />
    ) : (
      <ContentSection t={t} colors={colors} />
    );
  }, [activeTab, t, colors]);

  const tabButtons = useMemo(
    () =>
      TAB_ITEMS.map((tab) => (
        <TabButton
          key={tab.id}
          tab={tab}
          activeTab={activeTab}
          onPress={() => handleTabPress(tab.id)}
          colors={colors}
          label={tab.id === 'find' ? 'Find us' : t(tab.key)}
        />
      )),
    [activeTab, colors, handleTabPress, t]
  );

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Header text={t('helpCenter.helpCenter')} navigation={navigation} />

      <View style={{ flexDirection: 'row', marginHorizontal: windowWidth(20), marginTop: 1 }}>
        {tabButtons}
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        scrollEventThrottle={16}
        style={{ marginHorizontal: windowWidth(20), marginBottom: windowWidth(8) }}
      >
        {renderedComponent}
      </ScrollView>
    </SafeAreaView>
  );
}