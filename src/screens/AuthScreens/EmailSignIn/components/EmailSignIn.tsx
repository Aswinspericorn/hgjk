import React, {useEffect, useState} from 'react';
import {KeyboardAvoidingView, StyleSheet} from 'react-native';
import {Box, Text, TouchableBox} from '../../../../theme/theme';
import EmailAndPasswordInput from '../../EmailSignUp/components/EmailAndPasswordInput';
import ButtonContainer from '../../EmailSignUp/components/ButtonContainer';
import SigninAccountHelper from '../../../../helper/EmailSignIn.helper';
import {useDispatch} from 'react-redux';
import {changeAuthStatus} from '../../../../store/redux/AuthStatus';

const EmailSignIn = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [emailError, setEmailError] = useState<boolean>(false);
  const [passwordError, setPasswordError] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [success, setSucces] = useState<boolean>(false);

  const dispatch = useDispatch();

  useEffect(() => {
    if (success) {
      dispatch(changeAuthStatus(true));
      setSucces(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [success]);
  const signInAccount = () => {
    SigninAccountHelper({
      email,
      password,
      isLoading: setIsLoading,
      emailError: setEmailError,
      passwordError: setPasswordError,
      setSucces: setSucces,
    });
  };
  return (
    <Box
      flex={1}
      backgroundColor="secondaryBackground"
      paddingHorizontal="m"
      paddingTop="l">
      <EmailAndPasswordInput
        emailError={emailError}
        passwordError={passwordError}
        setEmailError={setEmailError}
        setEmail={setEmail}
        setPassword={setPassword}
        setPasswordError={setPasswordError}
      />
      <Box flex={1}>
        <TouchableBox>
          <Text variant="interMedium">Forgot password?</Text>
        </TouchableBox>
      </Box>
      <ButtonContainer
        title="Sign in"
        onPress={signInAccount}
        isLoading={isLoading}
      />
    </Box>
  );
};
export default EmailSignIn;
