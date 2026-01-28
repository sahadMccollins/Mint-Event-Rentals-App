import React, { useRef, useState } from 'react';
import { Alert, Keyboard, KeyboardAvoidingView, Platform, ScrollView, Text, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native';
import { Header, Divider } from '@commonComponents';
import { useTheme } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';
import { windowHeight, windowWidth, fontSizes } from '@theme/appConstant';
import OrderDetails from '../orderDetails';
import ButtonContainer from '@commonComponents/buttonContainer';
import appColors from '@theme/appColors';
import { useValues } from '@App';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useCart } from '../../../../context/cartContext';
import { useCustomer } from '../../../../context/customerContext';
import { Input, Button, TextArea } from '@commonComponents';

export default function payment({ navigation }) {
  const { colors } = useTheme();
  const { t } = useTranslation();
  const scrollViewRef = useRef();
  const { currSymbol, currValue } = useValues();
  const { cart } = useCart();
  const { customer } = useCustomer();
  const [form, setForm] = useState({});
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);

  const validateForm = () => {
    const newErrors = {};

    // Validate name
    if (!form.name || form.name.trim() === "") {
      newErrors.name = t('requestQuoteModal.nameError') || 'Name is required';
    }

    // Validate email
    if (!form.email || form.email.trim() === "") {
      newErrors.email = t('requestQuoteModal.emailError') || 'Email is required';
    } else if (!isValidEmail(form.email)) {
      newErrors.email = t('requestQuoteModal.emailInvalid') || 'Please enter a valid email';
    }

    // Validate phone number
    if (!form.phoneNumber || form.phoneNumber.trim() === "") {
      newErrors.phoneNumber = t('requestQuoteModal.phoneError') || 'Phone number is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const submitQuoteForm = async () => {
    if (!validateForm()) {
      return;
    }
    try {
      setSubmitting(true);
      // Prepare form data


      // Success alert
      Alert.alert(
        t('requestQuoteModal.success') || 'Success',
        t('requestQuoteModal.successMessage') || 'Your quote request has been submitted successfully',
        [
          {
            text: 'OK',
            onPress: () => {
              setForm({});
              setErrors({});
              navigation.goBack();
            },
          },
        ]
      );
    } catch (error) {
      Alert.alert(
        t('requestQuoteModal.error') || 'Error',
        error.message || t('requestQuoteModal.errorMessage') || 'Failed to submit quote request'
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
        keyboardVerticalOffset={Platform.OS === 'ios' ? 80 : 0} // adjust if header exists
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>


          <ScrollView contentContainerStyle={{ paddingBottom: windowHeight(20) }} showsVerticalScrollIndicator={false}>

            <View style={{ paddingHorizontal: windowWidth(30) }}>

              <Text style={{ fontSize: fontSizes.FONT23, fontWeight: 'bold', marginBottom: windowHeight(5), marginTop: windowHeight(15), textAlign: 'center' }}>Hire Details</Text>
              <Text style={{ fontSize: fontSizes.FONT16, color: '#5e5e5e', textAlign: 'center' }}>Complete the form to hire</Text>

              <Input
                placeholder="Full Name"
                value={form.fullName}
                onChangeText={value => {
                  onChange({ name: 'fullName', value });
                }}
                error={errors.fullName}
              />

              <Input
                placeholder="E-mail"
                value={form.email}
                onChangeText={value => {
                  onChange({ name: 'email', value });
                }}
                error={errors.email}
              />

              <Input
                placeholder="Phone"
                value={form.phone}
                onChangeText={value => {
                  onChange({ name: 'phone', value });
                }}
                error={errors.phone}
              />

              {/* Business Details Section */}
              {/* <SectionTitle title={t('bulkOrder.businessDetails')} /> */}

              <Input
                placeholder="Company Name"
                value={form.company}
                onChangeText={value => {
                  onChange({ name: 'company', value });
                }}
                error={errors.company}
              />

              <TextArea
                placeholder="Address"
                value={form.address}
                onChangeText={value => {
                  onChange({ name: 'address', value });
                }}
                error={errors.address}
              />

              <Input
                placeholder="Event Location (Emirate)"
                value={form.eventLocation}
                onChangeText={value => {
                  onChange({ name: 'eventLocation', value });
                }}
                error={errors.eventLocation}
              />

              <Input
                placeholder="Event Type"
                value={form.eventType}
                onChangeText={value => {
                  onChange({ name: 'eventType', value });
                }}
                error={errors.eventType}
              />

              <Input
                placeholder="Select the Date Range"
                value={form.dateRange}
                onChangeText={value => {
                  onChange({ name: 'dateRange', value });
                }}
                error={errors.dateRange}
              />

              {/* Submit Button */}
              <TouchableOpacity
                onPress={submitQuoteForm}
                disabled={submitting}
                style={{
                  backgroundColor: appColors.primary,
                  borderRadius: 8,
                  paddingVertical: windowHeight(15),
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexDirection: 'row',
                  marginTop: windowHeight(40),
                }}
              >
                {submitting ? (
                  <ActivityIndicator size="small" color={appColors.white} />
                ) : (
                  <Text style={{
                    fontSize: fontSizes.FONT19,
                    fontWeight: '600',
                    color: appColors.white,
                    marginLeft: windowWidth(8)
                  }}>
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
