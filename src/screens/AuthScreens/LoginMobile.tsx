import React, {useState} from 'react';
import {Box, Text, TextInput, TouchableBox} from '../../theme/theme';
import Arrow from '../../assets/icons/Svg/downArrow.svg';
import Flag from '../../assets/icons/Svg/indian.svg';
import PrimaryButton from '../../components/PrimaryButton';
import {KeyboardAvoidingView, Pressable, StyleSheet} from 'react-native';

import auth from '@react-native-firebase/auth';
interface Props {
  navigation: any;
}
const LoginMobile = ({navigation}: Props) => {
  // If null, no SMS has been sent
  const [phno, setPhno] = useState<string>('');

  // Handle the button press
  async function signInWithPhoneNumber() {
    const confirmation = await auth().signInWithPhoneNumber(`+91${phno}`);
    console.log('confirm', confirmation);
    // setConfirm(confirmation);
    navigation.navigate('AuthenticateOtp', {confirmation});
  }

  return (
    <KeyboardAvoidingView style={styles.screen} behavior="height">
      <Box flex={1} backgroundColor="secondaryBackground" paddingHorizontal="m">
        <Box flex={1} justifyContent="flex-end" paddingTop="xs">
          <Box justifyContent="center">
            <Text variant="header">Welcome back.</Text>
          </Box>
          <Box paddingTop="xs">
            <Text variant="TextButtonTitle">Log in to your account</Text>
          </Box>
        </Box>
        <Box flex={3} paddingTop="m">
          <Box
            flexDirection="row"
            borderWidth={1}
            borderColor="pointerFill"
            height={48}
            borderRadius="xs"
            alignItems="center">
            <Box alignItems="center" flex={1}>
              <TouchableBox onPress={() => {}} flexDirection="row">
                <Box>
                  <Flag width={25} height={10} fill="none" />
                </Box>
                <Box>
                  <Text variant="TextButtonTitle" color="primaryTitleText">
                    +91
                  </Text>
                </Box>
                <Box paddingHorizontal="xs">
                  <Arrow width={10} height={13} fill="none" />
                </Box>
              </TouchableBox>
            </Box>
            <Box flex={3}>
              <TextInput
                variant="TextButtonTitle"
                placeholder="Mobile number"
                onChangeText={value => setPhno(value)}
              />
            </Box>
          </Box>
          <Box paddingVertical="s">
            <Text
              variant="TextButtonTitle"
              fontSize={12}
              color="smallTextLogin">
              You will receive an SMS verification that may apply{'\n'} message
              and data rates.
            </Text>
          </Box>
        </Box>
        <Box flex={1}>
          <Box justifyContent="center" alignItems="center">
            <PrimaryButton title="Login" onPress={signInWithPhoneNumber} />
          </Box>
          <Box justifyContent="center" marginTop="s" alignItems="center">
            <Pressable
              onPress={() => {
                navigation.navigate('EmailSignin');
              }}>
              <Text variant="interMedium">Use Email, instead</Text>
            </Pressable>
          </Box>
        </Box>
      </Box>
    </KeyboardAvoidingView>
  );
};
export default LoginMobile;
const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
