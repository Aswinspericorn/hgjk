import React, {useEffect, useState} from 'react';
import {Box, Text, TouchableBox} from '../../../../theme/theme';
import EmailAndPasswordInput from '../../EmailSignUp/components/EmailAndPasswordInput';
import ButtonContainer from '../../EmailSignUp/components/ButtonContainer';
import SigninAccountHelper from '../../../../helper/EmailSignIn.helper';
import {useDispatch} from 'react-redux';
import {changeAuthStatus} from '../../../../store/redux/AuthStatus';
import {getSingleUserDetails} from '../../../../helper/Firebase.helper';
import {changeUserData} from '../../../../store/redux/UserData';
import {useTranslation} from 'react-i18next';

const EmailSignIn = ({navigation}) => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [emailError, setEmailError] = useState<boolean>(false);
  const [passwordError, setPasswordError] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [success, setSucces] = useState<boolean>(false);

  const dispatch = useDispatch();
  const {t} = useTranslation();

  useEffect(() => {
    if (success) {
      const checkIsNewUser = async () => {
        const result = await getSingleUserDetails();
        if (result === undefined) {
          navigation.navigate('SetupPersonalizationOne');
        } else {
          dispatch(changeUserData(result));
          dispatch(changeAuthStatus(true));
        }
      };
      checkIsNewUser();
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
          <Text variant="interMedium" lineHeight={18}>
            {t('EmailAndPassword.ForgotPassword')}
          </Text>
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
