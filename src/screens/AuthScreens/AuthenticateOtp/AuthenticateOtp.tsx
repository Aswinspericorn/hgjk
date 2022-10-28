/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import {Alert, LogBox, StyleSheet} from 'react-native';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import {Box, Text} from '../../../theme/theme';
import auth from '@react-native-firebase/auth';
import {changeAuthStatus} from '../../../store/redux/actions/AuthStatus';
import RNOtpVerify from 'react-native-otp-verify';
import PrimaryButton from '../../../components/PrimaryButton';
import {getSingleUserDetails} from '../../../helper/Firebase.helper';
import {useTranslation} from 'react-i18next';
import {changeUserData} from '../../../store/redux/actions/UserData';
import {getDarkModeStatus} from '../../../store/redux/selectors/AllSelector';
import {useAppDispatch} from '../../../store/redux/store';

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
  const dispatch = useAppDispatch();
  const {t} = useTranslation();

  LogBox.ignoreLogs([
    'Non-serializable values were found in the navigation state',
  ]);
  const mode = useSelector(getDarkModeStatus);

  useEffect(() => {
    RNOtpVerify.getHash().then().catch();

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
      otp = message.match(/\d{6}/ || [false])[0];
    }
    setCode(otp);
    RNOtpVerify.removeListener();
  };

  function onAuthStateChanged(userr: any) {
    if (userr) {
      if (userr.phoneNumber === `+91${AuthData.phno}`) {
        checkIsNewUser();
      } else {
        return;
      }
    }
  }

  const checkCurrentUser = () => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  };
  const checkIsNewUser = async () => {
    const result = await getSingleUserDetails();
    if (result === undefined) {
      navigation.navigate('SetupPersonalizationOne');
    } else {
      dispatch(changeUserData(result));
      dispatch(changeAuthStatus(true));
    }
  };
  async function confirmCode() {
    setIsLoading(true);
    await AuthData.data
      .confirm(code)
      .then(() => {
        checkCurrentUser();
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
          checkCurrentUser();
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
          <Text variant="subHeader">
            {t('AuthenticateOtp.EnterAuthenticationCode')}
          </Text>
        </Box>
        <Box paddingTop="xs" alignItems="flex-start">
          <Text variant="TextButtonTitle" lineHeight={24} textAlign="center">
            {t('AuthenticateOtp.Enter4digit')} {AuthData.phno}
          </Text>
        </Box>
        <Box paddingTop="s">
          <OTPInputView
            style={styles.OTPInput}
            pinCount={6}
            code={code}
            autoFocusOnLoad={false}
            codeInputFieldStyle={{
              ...styles.underlineStyleBase,
              color: mode === 'dark' ? 'white' : 'black',
            }}
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
