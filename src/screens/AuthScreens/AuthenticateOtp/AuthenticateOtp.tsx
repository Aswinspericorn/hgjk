import React, {useEffect, useState} from 'react';
import {useDispatch} from 'react-redux';
import {Alert, LogBox, StyleSheet} from 'react-native';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import {Box, Text} from '../../../theme/theme';
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';
import {changeAuthStatus} from '../../../store/redux/AuthStatus';
import RNOtpVerify from 'react-native-otp-verify';
import PrimaryButton from '../../../components/PrimaryButton';

interface AuthProps {
  data: {
    confirm: (a: string) => any;
  };
  phno: string;
}
interface Props {
  navigation: any;
  route: {
    params: AuthProps;
  };
}
const AuthenticateOtp = ({navigation, route}: Props) => {
  const [code, setCode] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const AuthData = route.params;
  const dispatch = useDispatch();

  LogBox.ignoreLogs([
    'Non-serializable values were found in the navigation state',
  ]);

  useEffect(() => {
    RNOtpVerify.getHash().then(console.log).catch(console.log);

    RNOtpVerify.getOtp()
      .then(() => RNOtpVerify.addListener(otpHandler))
      .catch(() => {
        return;
      });
  }, []);

  const otpHandler = (message: string) => {
    if (message.includes('Error')) {
      return;
    }
    let otp = '';
    if (message.length > 0) {
      // otp = /(d{6})/g.exec(message)[1];
      otp = `${message}.match(/\d{6}/ || [false])[0]`;
    }
    setCode(otp);
    RNOtpVerify.removeListener();
  };

  function onAuthStateChanged(userr: any) {
    if (userr) {
      checkIsNewUser();
    }
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const checkIsNewUser = () => {
    const userId = auth().currentUser?.uid;
    const userRef = database()
      .ref(`/user/${userId}`)
      .once('value', snapshot => {
        if (snapshot.val() === null) {
          navigation.navigate('SetupPersonalizationOne');
        } else {
          dispatch(changeAuthStatus(true));
        }
      });
    return userRef;
  };
  async function confirmCode() {
    setIsLoading(true);
    await AuthData.data
      .confirm(code)
      .then(() => {
        setIsLoading(false);
        checkIsNewUser();
        setIsLoading(false);
      })
      .catch((err: any) => {
        setIsLoading(false);
        if (err.code === 'auth/invalid-verification-code') {
          Alert.alert('Invalid otp');
          return;
        }
        if (err.code === 'auth/session-expired') {
          Alert.alert('The sms code has expired');
          return;
        }
      });
  }
  return (
    <Box
      flex={1}
      backgroundColor="secondaryBackground"
      paddingHorizontal="m"
      justifyContent="space-between"
      paddingTop="xl">
      <Box height={300}>
        <Box justifyContent="center" paddingTop="l" paddingHorizontal="xs">
          <Text variant="subHeader">Enter authentication code</Text>
        </Box>
        <Box paddingTop="xs" alignItems="flex-start">
          <Text variant="TextButtonTitle" lineHeight={24} textAlign="center">
            Enter the 4-digit that we have sent via the{'\n'}
            phone number +91 {AuthData.phno}
          </Text>
        </Box>
        <Box paddingTop="s">
          <OTPInputView
            style={styles.OTPInput}
            pinCount={6}
            code={code}
            autoFocusOnLoad={false}
            codeInputFieldStyle={styles.underlineStyleBase}
            codeInputHighlightStyle={styles.underlineStyleHighLighted}
            onCodeChanged={value => {
              setCode(value);
            }}
          />
        </Box>
      </Box>
      <Box justifyContent="flex-end" flex={1}>
        <PrimaryButton
          disabled={isLoading}
          title={isLoading ? 'Sending...' : 'Continue'}
          onPress={confirmCode}
        />
      </Box>
    </Box>
  );
};
export default AuthenticateOtp;
const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  underlineStyleBase: {
    width: 48,
    borderRadius: 64,
    height: 48,
    borderWidth: 1,
    color: 'black',
    borderColor: '#E3E5E5',
  },
  opacity: {
    opacity: 0.5,
  },

  underlineStyleHighLighted: {
    borderColor: '#6B4EFF',
    width: 50,
    borderRadius: 64,
    height: 50,
  },
  OTPInput: {height: 100, width: '100%', backgroundColor: 'transparent'},
});