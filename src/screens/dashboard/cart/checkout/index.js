// import React, { useRef, useState } from 'react';
// import { Alert, Keyboard, KeyboardAvoidingView, Platform, ScrollView, Text, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native';
// import { Header, Divider } from '@commonComponents';
// import { useTheme } from '@react-navigation/native';
// import { useTranslation } from 'react-i18next';
// import { windowHeight, windowWidth, fontSizes } from '@theme/appConstant';
// import OrderDetails from '../orderDetails';
// import ButtonContainer from '@commonComponents/buttonContainer';
// import appColors from '@theme/appColors';
// import { useValues } from '@App';
// import { SafeAreaView } from 'react-native-safe-area-context';
// import { useCart } from '../../../../context/cartContext';
// import { useCustomer } from '../../../../context/customerContext';
// import { Input, DropDown, TextArea } from '@commonComponents';

// export default function payment({ navigation }) {
//   const { colors } = useTheme();
//   const { t } = useTranslation();
//   const scrollViewRef = useRef();
//   const { currSymbol, currValue } = useValues();
//   const { cart } = useCart();
//   const { customer } = useCustomer();
//   const [form, setForm] = useState({});
//   const [errors, setErrors] = useState({});
//   const [submitting, setSubmitting] = useState(false);

//   const validateForm = () => {
//     const newErrors = {};

//     // Validate name
//     if (!form.name || form.name.trim() === "") {
//       newErrors.name = t('requestQuoteModal.nameError') || 'Name is required';
//     }

//     // Validate email
//     if (!form.email || form.email.trim() === "") {
//       newErrors.email = t('requestQuoteModal.emailError') || 'Email is required';
//     } else if (!isValidEmail(form.email)) {
//       newErrors.email = t('requestQuoteModal.emailInvalid') || 'Please enter a valid email';
//     }

//     // Validate phone number
//     if (!form.phoneNumber || form.phoneNumber.trim() === "") {
//       newErrors.phoneNumber = t('requestQuoteModal.phoneError') || 'Phone number is required';
//     }

//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const isValidEmail = (email) => {
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     return emailRegex.test(email);
//   };

//   const submitQuoteForm = async () => {
//     if (!validateForm()) {
//       return;
//     }
//     try {
//       setSubmitting(true);

//       // Success alert
//       Alert.alert(
//         t('requestQuoteModal.success') || 'Success',
//         t('requestQuoteModal.successMessage') || 'Your quote request has been submitted successfully',
//         [
//           {
//             text: 'OK',
//             onPress: () => {
//               setForm({});
//               setErrors({});
//               navigation.goBack();
//             },
//           },
//         ]
//       );
//     } catch (error) {
//       Alert.alert(
//         t('requestQuoteModal.error') || 'Error',
//         error.message || t('requestQuoteModal.errorMessage') || 'Failed to submit quote request'
//       );
//     } finally {
//       setSubmitting(false);
//     }
//   };

//   return (
//     <SafeAreaView style={{ flex: 1 }}>
//       <Header
//         text="Checkout"
//         showText
//         navigation={navigation}
//         subText="Step 2 of 2"
//       />

//       <KeyboardAvoidingView
//         behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
//         keyboardVerticalOffset={Platform.OS === 'ios' ? 80 : 0} // adjust if header exists
//       >
//         <TouchableWithoutFeedback onPress={Keyboard.dismiss}>


//           <ScrollView contentContainerStyle={{ paddingBottom: windowHeight(20) }} showsVerticalScrollIndicator={false}>

//             <View style={{ paddingHorizontal: windowWidth(30) }}>

//               <Text style={{ fontSize: fontSizes.FONT23, fontWeight: 'bold', marginBottom: windowHeight(5), marginTop: windowHeight(15), textAlign: 'center' }}>Hire Details</Text>
//               <Text style={{ fontSize: fontSizes.FONT16, color: '#5e5e5e', textAlign: 'center' }}>Complete the form to hire</Text>

//               <Input
//                 placeholder="Full Name"
//                 value={form.fullName}
//                 onChangeText={value => {
//                   onChange({ name: 'fullName', value });
//                 }}
//                 error={errors.fullName}
//               />

//               <Input
//                 placeholder="E-mail"
//                 value={form.email}
//                 onChangeText={value => {
//                   onChange({ name: 'email', value });
//                 }}
//                 error={errors.email}
//               />

//               <Input
//                 placeholder="Phone"
//                 value={form.phone}
//                 onChangeText={value => {
//                   onChange({ name: 'phone', value });
//                 }}
//                 error={errors.phone}
//               />

//               {/* Business Details Section */}
//               {/* <SectionTitle title={t('bulkOrder.businessDetails')} /> */}

//               <Input
//                 placeholder="Company Name"
//                 value={form.company}
//                 onChangeText={value => {
//                   onChange({ name: 'company', value });
//                 }}
//                 error={errors.company}
//               />

//               <TextArea
//                 placeholder="Address"
//                 value={form.address}
//                 onChangeText={value => {
//                   onChange({ name: 'address', value });
//                 }}
//                 error={errors.address}
//               />

//               <Input
//                 placeholder="Event Location (Emirate)"
//                 value={form.eventLocation}
//                 onChangeText={value => {
//                   onChange({ name: 'eventLocation', value });
//                 }}
//                 error={errors.eventLocation}
//               />

//               <DropDown
//                 name="Event Location (Emirate)"
//                 data={[
//                   {
//                     id: 0,
//                     name: 'Event Location (Emirate)',
//                   },
//                   {
//                     id: 1,
//                     name: 'Abu Dhabi',
//                   },
//                   {
//                     id: 2,
//                     name: 'Dubai',
//                   },
//                   {
//                     id: 4,
//                     name: 'Sharjah',
//                   },
//                   {
//                     id: 5,
//                     name: 'Ajman',
//                   },
//                   {
//                     id: 6,
//                     name: 'Umm Al Quwain',
//                   },
//                   {
//                     id: 7,
//                     name: 'Fujairah',
//                   },
//                   {
//                     id: 8,
//                     name: 'Ras Al Khaimah',
//                   },
//                 ]}
//                 SelectedItem={"Dubai"}
//                 selectedItem={(value) => console.log(value)}
//                 height={windowHeight(45)}
//               />

//               <Input
//                 placeholder="Event Type"
//                 value={form.eventType}
//                 onChangeText={value => {
//                   onChange({ name: 'eventType', value });
//                 }}
//                 error={errors.eventType}
//               />

//               <Input
//                 placeholder="Select the Date Range"
//                 value={form.dateRange}
//                 onChangeText={value => {
//                   onChange({ name: 'dateRange', value });
//                 }}
//                 error={errors.dateRange}
//               />


//               {/* Submit Button */}
//               <TouchableOpacity
//                 onPress={submitQuoteForm}
//                 disabled={submitting}
//                 style={{
//                   backgroundColor: appColors.primary,
//                   borderRadius: 8,
//                   paddingVertical: windowHeight(15),
//                   alignItems: 'center',
//                   justifyContent: 'center',
//                   flexDirection: 'row',
//                   marginTop: windowHeight(40),
//                 }}
//               >
//                 {submitting ? (
//                   <ActivityIndicator size="small" color={appColors.white} />
//                 ) : (
//                   <Text style={{
//                     fontSize: fontSizes.FONT19,
//                     fontWeight: '600',
//                     color: appColors.white,
//                     marginLeft: windowWidth(8)
//                   }}>
//                     Get A Quote
//                   </Text>
//                 )}
//               </TouchableOpacity>
//             </View>
//           </ScrollView>

//         </TouchableWithoutFeedback>
//       </KeyboardAvoidingView>
//     </SafeAreaView>
//   );
// }





import React, { useRef, useState } from 'react';
import {
  Alert,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
  ActivityIndicator,
} from 'react-native';
import { Header } from '@commonComponents';
import { useTheme } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';
import { windowHeight, windowWidth, fontSizes } from '@theme/appConstant';
import appColors from '@theme/appColors';
import { useValues } from '@App';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useCart } from '../../../../context/cartContext';
import { useCustomer } from '../../../../context/customerContext';
import { Input, DropDown, TextArea } from '@commonComponents';
import { splitName } from '../../../../utils/helper/helper';
import { useShopifyCart } from '../../../../hooks/useShopifyCart';

export default function Payment({ navigation }) {
  const { colors } = useTheme();
  const { t } = useTranslation();
  const scrollViewRef = useRef();
  const { currSymbol, currValue } = useValues();
  const { cart } = useCart();
  const { clearCart } = useShopifyCart();
  const { customer } = useCustomer();
  const [form, setForm] = useState({
    fullName: '',
    email: '',
    phone: '',
    company: '',
    address: '',
    eventLocation: 'Abu Dhabi',
    eventType: 'Corporate Event',
    dateRange: '',
    deliveryType: 'delivery',
  });
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);

  // Event location options
  const eventLocationOptions = [
    { id: 1, name: 'Abu Dhabi' },
    { id: 2, name: 'Dubai' },
    { id: 3, name: 'Sharjah' },
    { id: 4, name: 'Ajman' },
    { id: 5, name: 'Umm Al Quwain' },
    { id: 6, name: 'Fujairah' },
    { id: 7, name: 'Ras Al Khaimah' },
  ];

  // Event type options
  const eventTypeOptions = [
    { id: 1, name: 'Corporate Event' },
    { id: 2, name: 'Exhibition' },
    { id: 3, name: 'Mega Event' },
    { id: 4, name: 'Private Event' },
    { id: 5, name: 'Wedding' },
    { id: 6, name: 'Other' },
  ];

  const onChange = ({ name, value }) => {
    setForm(prev => ({
      ...prev,
      [name]: value,
    }));
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined,
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    // Validate name
    if (!form.fullName || form.fullName.trim() === '') {
      newErrors.fullName = t('requestQuoteModal.nameError') || 'Name is required';
    }

    // Validate email
    if (!form.email || form.email.trim() === '') {
      newErrors.email = t('requestQuoteModal.emailError') || 'Email is required';
    } else if (!isValidEmail(form.email)) {
      newErrors.email = t('requestQuoteModal.emailInvalid') || 'Please enter a valid email';
    }

    // Validate phone number
    if (!form.phone || form.phone.trim() === '') {
      newErrors.phone = t('requestQuoteModal.phoneError') || 'Phone number is required';
    }

    // Validate company
    if (!form.company || form.company.trim() === '') {
      newErrors.company = 'Company name is required';
    }

    // Validate address
    if (!form.address || form.address.trim() === '') {
      newErrors.address = 'Address is required';
    }

    // Validate event location
    if (!form.eventLocation || form.eventLocation.trim() === '') {
      newErrors.eventLocation = 'Event location is required';
    }

    // Validate event type
    if (!form.eventType || form.eventType.trim() === '') {
      newErrors.eventType = 'Event type is required';
    }

    // Validate date range
    if (!form.dateRange || form.dateRange.trim() === '') {
      newErrors.dateRange = 'Date range is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const submitQuoteForm = async () => {
    if (!validateForm()) return;

    try {
      setSubmitting(true);

      const { first_name, last_name } = splitName(form.fullName);

      // 🔹 Build Shopify-style payload
      const orderData = {
        email: form.email,
        customer: {
          first_name,
          last_name,
        },
        phone: form.phone,
        billing_address: {
          first_name,
          last_name,
          address1: form.address,
          company: form.company,
          city: form.eventLocation,
          country: 'United Arab Emirates',
          zip: '12345',
        },
        note: `Delivery Date: ${form.dateRange}, Event Type: ${form.eventType}`,
        line_items: cart.items.map(item => ({
          variant_id: item.variantId,
          quantity: item.quantity,
        })),
      };

      // 🔹 Send to SAME backend as website
      const response = await fetch(
        // 'https://mccollins-server.vercel.app/api/create-order',
        'http://localhost:3000/api/create-order',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(orderData),
        }
      );

      if (!response.ok) {
        throw new Error('Failed to create order');
      }

      const order = await response.json();

      // 🔹 Clear cart (your context method)
      // clearCart();

      Alert.alert(
        'Success',
        'Order placed successfully!',
        [
          {
            text: 'OK',
            onPress: () => {
              navigation.navigate('ThankYou'); // or goBack()
            },
          },
        ]
      );
    } catch (error) {
      console.error(error);
      Alert.alert(
        'Error',
        error.message || 'Something went wrong while placing order'
      );
    } finally {
      setSubmitting(false);
    }
  };


  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Header
        text="Checkout"
        showText
        navigation={navigation}
        subText="Step 2 of 2"
      />

      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 80 : 0}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <ScrollView
            contentContainerStyle={{ paddingBottom: windowHeight(20) }}
            showsVerticalScrollIndicator={false}
            ref={scrollViewRef}
          >
            <View style={{ paddingHorizontal: windowWidth(30) }}>

              <Text
                style={{
                  fontSize: fontSizes.FONT23,
                  fontWeight: 'bold',
                  marginBottom: windowHeight(5),
                  marginTop: windowHeight(15),
                  textAlign: 'center',
                  color: colors.text,
                }}
              >
                Hire Details
              </Text>
              <Text
                style={{
                  fontSize: fontSizes.FONT16,
                  color: '#5e5e5e',
                  textAlign: 'center',
                  marginBottom: windowHeight(20),
                }}
              >
                Complete the form to hire
              </Text>

              {/* Personal Information Section */}
              <Input
                placeholder="Full Name"
                value={form.fullName}
                onChangeText={value => onChange({ name: 'fullName', value })}
                error={errors.fullName}
              />

              <Input
                placeholder="E-mail"
                value={form.email}
                onChangeText={value => onChange({ name: 'email', value })}
                error={errors.email}
                keyboardType="email-address"
              />

              <Input
                placeholder="Phone"
                value={form.phone}
                onChangeText={value => onChange({ name: 'phone', value })}
                error={errors.phone}
                keyboardType="phone-pad"
              />

              {/* Business Details Section */}
              <Input
                placeholder="Company Name"
                value={form.company}
                onChangeText={value => onChange({ name: 'company', value })}
                error={errors.company}
              />

              <TextArea
                placeholder="Address"
                value={form.address}
                onChangeText={value => onChange({ name: 'address', value })}
                error={errors.address}
              />

              {/* Event Location Dropdown */}
              <DropDown
                name="Event Location"
                placeholder="Select Event Location"
                data={eventLocationOptions}
                SelectedItem={form.eventLocation}
                selectedItem={(itemValue) => {
                  onChange({ name: 'eventLocation', value: itemValue });
                }}
                height={windowHeight(50)}
              />
              {errors.eventLocation && (
                <Text
                  style={{
                    color: '#ff0000',
                    fontSize: fontSizes.FONT14,
                    marginTop: windowHeight(5),
                    marginHorizontal: windowWidth(5),
                  }}
                >
                  {errors.eventLocation}
                </Text>
              )}

              {/* Event Type Dropdown */}
              <DropDown
                name="Event Type"
                placeholder="Select Event Type"
                data={eventTypeOptions}
                SelectedItem={form.eventType}
                selectedItem={(itemValue) => {
                  onChange({ name: 'eventType', value: itemValue });
                }}
                height={windowHeight(50)}
              />
              {errors.eventType && (
                <Text
                  style={{
                    color: '#ff0000',
                    fontSize: fontSizes.FONT14,
                    marginTop: windowHeight(5),
                    marginHorizontal: windowWidth(5),
                  }}
                >
                  {errors.eventType}
                </Text>
              )}

              {/* Date Range Input */}
              <Input
                placeholder="Select the Date Range"
                value={form.dateRange}
                onChangeText={value => onChange({ name: 'dateRange', value })}
                error={errors.dateRange}
              />

              {/* Delivery Method Input */}
              <View style={{ flexDirection: 'row', gap: windowWidth(20), marginTop: windowHeight(20) }}>
                {/* Delivery */}
                <TouchableOpacity
                  onPress={() => onChange({ name: 'deliveryType', value: 'delivery' })}
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}
                >
                  <View
                    style={{
                      height: 20,
                      width: 20,
                      borderRadius: 10,
                      borderWidth: 2,
                      borderColor:
                        form.deliveryType === 'delivery'
                          ? appColors.primary
                          : '#999',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginRight: 8,
                    }}
                  >
                    {form.deliveryType === 'delivery' && (
                      <View
                        style={{
                          height: 10,
                          width: 10,
                          borderRadius: 5,
                          backgroundColor: appColors.primary,
                        }}
                      />
                    )}
                  </View>
                  <Text style={{ fontSize: fontSizes.FONT15, color: colors.text }}>
                    Delivery
                  </Text>
                </TouchableOpacity>

                {/* Pickup */}
                <TouchableOpacity
                  onPress={() => onChange({ name: 'deliveryType', value: 'pickup' })}
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}
                >
                  <View
                    style={{
                      height: 20,
                      width: 20,
                      borderRadius: 10,
                      borderWidth: 2,
                      borderColor:
                        form.deliveryType === 'pickup'
                          ? appColors.primary
                          : '#999',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginRight: 8,
                    }}
                  >
                    {form.deliveryType === 'pickup' && (
                      <View
                        style={{
                          height: 10,
                          width: 10,
                          borderRadius: 5,
                          backgroundColor: appColors.primary,
                        }}
                      />
                    )}
                  </View>
                  <Text style={{ fontSize: fontSizes.FONT15, color: colors.text }}>
                    Pickup
                  </Text>
                </TouchableOpacity>
              </View>



              {/* Submit Button */}
              <TouchableOpacity
                onPress={submitQuoteForm}
                disabled={submitting}
                style={{
                  backgroundColor: submitting ? appColors.grey : appColors.primary,
                  borderRadius: 8,
                  paddingVertical: windowHeight(15),
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexDirection: 'row',
                  marginTop: windowHeight(25),
                  marginBottom: windowHeight(30),
                  opacity: submitting ? 0.6 : 1,
                }}
              >
                {submitting ? (
                  <ActivityIndicator size="small" color={appColors.white} />
                ) : (
                  <Text
                    style={{
                      fontSize: fontSizes.FONT19,
                      fontWeight: '600',
                      color: appColors.white,
                    }}
                  >
                    Get A Quote
                  </Text>
                )}
              </TouchableOpacity>
            </View>
          </ScrollView>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}