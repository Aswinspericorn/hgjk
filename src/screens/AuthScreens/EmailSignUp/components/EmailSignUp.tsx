import React, {useEffect, useState} from 'react';
import {KeyboardAvoidingView, StyleSheet} from 'react-native';
import {Box} from '../../../../theme/theme';
import CreateAccountHelper from '../../../../helper/EmailSignUp.helper';
import EmailAndPasswordInput from './EmailAndPasswordInput';
import ButtonContainer from './ButtonContainer';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

type StackParamList = {
  Home: {foo: string};
};
type NavigationProps = NativeStackNavigationProp<StackParamList>;
interface Props {
  navigation: NavigationProps;
}

const EmailSignUp = ({navigation}: Props) => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [emailError, setEmailError] = useState<boolean>(false);
  const [passwordError, setPasswordError] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [success, setSucces] = useState<boolean>(false);

  const createAccount = () => {
    CreateAccountHelper({
      email,
      password,
      isLoading: setIsLoading,
      emailError: setEmailError,
      passwordError: setPasswordError,
      setSucces: setSucces,
    });
  };
  useEffect(() => {
    if (success) {
      navigation.navigate('SetupPersonalizationOne');
      setSucces(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [success]);
  return (
    <KeyboardAvoidingView style={styles.screen} behavior="height">
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
        <ButtonContainer onPress={createAccount} isLoading={isLoading} />
      </Box>
    </KeyboardAvoidingView>
  );
};
export default EmailSignUp;
const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
