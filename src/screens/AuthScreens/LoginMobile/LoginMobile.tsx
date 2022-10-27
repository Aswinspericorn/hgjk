import React, {useState} from 'react';
import {Box, Text, TextInput, TouchableBox} from '../../../theme/theme';
import PrimaryButton from '../../../components/PrimaryButton';
import {Alert, Pressable, StyleSheet} from 'react-native';
import auth from '@react-native-firebase/auth';

import Flag from '../../../assets/icons/Svg/indian.svg';
import {useTranslation} from 'react-i18next';
import {useSelector} from 'react-redux';
import {ArrowDown} from '../../../assets/icons/Svg/Icons';
interface Props {
  navigation: any;
}
const LoginMobile = ({navigation}: Props) => {
  // If null, no SMS has been sent
  const [phno, setPhno] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const mode = useSelector(
    (state: any) => state.AppReducer.DarkModeStatus.mode,
  );
  const {t} = useTranslation();
  async function signInWithPhoneNumber() {
    try {
      if (phno.length !== 10) {
        setError(true);
      }
      setIsLoading(true);
      if (phno.length === 10) {
        await auth()
          .signInWithPhoneNumber(`+91${phno}`)
          .then(confirmation => {
            setIsLoading(false);
            navigation.navigate('AuthenticateOtp', {
              data: confirmation,
              phno: phno,
            });
          })
          .catch(err => {
            if (err.code === 'auth/too-many-requests') {
              Alert.alert('Something went wrong.Please try again later');
              return;
            }
            if (err.code === 'auth/network-request-failed') {
              Alert.alert(
                'Network error, please check your internet connection',
              );
              return;
            }
          });
      }
      setIsLoading(false);
    } catch (err) {
      setIsLoading(false);
      Alert.alert('Something went wrong, please try again later');
    }
  }
  return (
    <Box flex={1} backgroundColor="secondaryBackground" paddingHorizontal="m">
      <Box height={150} justifyContent="flex-end" paddingTop="xs">
        <Box justifyContent="center">
          <Text variant="header">{t('LoginMobile.WelcomeBack')}</Text>
        </Box>
        <Box paddingTop="xs">
          <Text variant="TextButtonTitle">
            {t('LoginMobile.LogInToYourAccount')}
          </Text>
        </Box>
      </Box>
      <Box flex={3} paddingTop="m">
        <Box
          flexDirection="row"
          borderWidth={1}
          borderColor={error ? 'errorColor' : 'pointerFill'}
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
                <ArrowDown
                  color={mode === 'dark' ? 'white' : 'black'}
                  fill="none"
                />
              </Box>
            </TouchableBox>
          </Box>
          <Box flex={3}>
            <TextInput
              keyboardType="phone-pad"
              placeholderTextColor="#6C7072"
              style={styles.width}
              variant="TextButtonTitle"
              placeholder={t('LoginMobile.MobileNumber')}
              onChangeText={value => {
                setError(false);
                setPhno(value);
              }}
            />
          </Box>
        </Box>
        <Box paddingVertical="s">
          <Text variant="TextButtonTitle" fontSize={12} color="smallTextLogin">
            {t('LoginMobile.YouWillReceive')}
          </Text>
        </Box>
      </Box>
      <Box flex={1}>
        <Box justifyContent="center" alignItems="center">
          <PrimaryButton
            disabled={isLoading}
            title={isLoading ? 'Sending...' : 'Login'}
            onPress={signInWithPhoneNumber}
          />
        </Box>
        <Box justifyContent="center" marginTop="s" alignItems="center">
          <Pressable
            onPress={() => {
              navigation.navigate('EmailSignin');
            }}>
            <Text variant="interMedium">
              {t('LoginMobile.UseEmailInstead')}
            </Text>
          </Pressable>
        </Box>
      </Box>
    </Box>
  );
};
export default LoginMobile;
const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  width: {
    width: '100%',
  },
});
