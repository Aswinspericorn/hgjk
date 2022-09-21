import React, {useEffect, useState} from 'react';
import {useDispatch} from 'react-redux';
import {LogBox, StyleSheet} from 'react-native';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import {Box, Text} from '../../theme/theme';
import PrimaryButton from '../../components/PrimaryButton';
import auth from '@react-native-firebase/auth';
import {changeAuthStatus} from '../../store/redux/AuthStatus';
import RNOtpVerify from 'react-native-otp-verify';

interface Props {
  route: any;
}
const AuthenticateOtp = ({route}: Props) => {
  const [code, setCode] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [user, setUser] = useState<object>({});
  const confirm = route.params;
  const dispatch = useDispatch();

  LogBox.ignoreLogs([
    'Non-serializable values were found in the navigation state',
  ]);
  useEffect(() => {
    RNOtpVerify.getHash().then(console.log).catch(console.log);

    RNOtpVerify.getOtp()
      .then(() => RNOtpVerify.addListener(otpHandler))
      .catch(p => console.log(p));
  }, []);

  const otpHandler = (message: any = {}) => {
    console.log('message==', message);
    const otp = `/(d{6})/g.exec(${message})[1]`;
    setCode(otp);
    RNOtpVerify.removeListener();
  };

  function onAuthStateChanged(userr: any) {
    console.log(userr);
    if (userr) {
      setUser(userr);
    }
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);
  async function confirmCode() {
    if (user) {
      dispatch(changeAuthStatus(true));
    } else {
      try {
        setIsLoading(true);
        await confirm.confirm(code);
        setIsLoading(false);
      } catch (error) {
        console.log('Invalid code.');
      }
    }
  }
  console.log(code, 'code');
  return (
    <Box
      flex={1}
      backgroundColor="secondaryBackground"
      paddingHorizontal="m"
      paddingTop="xl">
      <Box justifyContent="center" paddingTop="l" paddingHorizontal="xs">
        <Text variant="subHeader">Enter authentication code</Text>
      </Box>
      <Box paddingTop="xs" alignItems="flex-start">
        <Text variant="TextButtonTitle" lineHeight={24} textAlign="center">
          Enter the 4-digit that we have sent via the{'\n'}
          phone number +62 813-8172-5977
        </Text>
      </Box>
      <Box flex={1} paddingTop="s">
        <OTPInputView
          style={styles.OTPInput}
          pinCount={6}
          // code={this.state.code} //You can supply this prop or not. The component will be used as a controlled / uncontrolled component respectively.
          // onCodeChanged = {code => { this.setState({code})}}
          code={code}
          autoFocusOnLoad={false}
          codeInputFieldStyle={styles.underlineStyleBase}
          codeInputHighlightStyle={styles.underlineStyleHighLighted}
          onCodeChanged={value => {
            setCode(value);
          }}
        />
      </Box>
      <Box>
        <PrimaryButton
          disabled={isLoading}
          title="Continue"
          onPress={confirmCode}
        />
      </Box>
    </Box>
  );
};
export default AuthenticateOtp;
const styles = StyleSheet.create({
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
