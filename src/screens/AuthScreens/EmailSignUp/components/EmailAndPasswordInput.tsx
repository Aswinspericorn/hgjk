import React, {Dispatch, SetStateAction} from 'react';
import {StyleSheet} from 'react-native';
import {Box, TextInput} from '../../../../theme/theme';
import {useTranslation} from 'react-i18next';

interface Props {
  setEmailError: Dispatch<SetStateAction<boolean>>;
  setPasswordError: Dispatch<SetStateAction<boolean>>;
  setPassword: Dispatch<SetStateAction<string>>;
  setEmail: Dispatch<SetStateAction<string>>;
  passwordError: boolean;
  emailError: boolean;
}
const EmailAndPasswordInput = ({
  emailError,
  passwordError,
  setEmailError,
  setEmail,
  setPasswordError,
  setPassword,
}: Props) => {
  const {t} = useTranslation();

  return (
    <Box height={200} justifyContent="center" paddingTop="m">
      <Box
        flexDirection="row"
        borderWidth={1}
        borderColor={emailError ? 'errorColor' : 'pointerFill'}
        height={48}
        borderRadius="xs"
        marginVertical="s"
        alignItems="center">
        <TextInput
          keyboardType="email-address"
          placeholderTextColor="#6C7072"
          style={styles.width}
          paddingHorizontal="s"
          variant="TextButtonTitle"
          placeholder={t('EmailAndPassword.Email')}
          onChangeText={(value: string) => {
            setEmailError(false);
            setEmail(value);
          }}
        />
      </Box>
      <Box
        flexDirection="row"
        borderWidth={1}
        borderColor={passwordError ? 'errorColor' : 'pointerFill'}
        height={48}
        borderRadius="xs"
        alignItems="center">
        <TextInput
          secureTextEntry={true}
          placeholderTextColor="#6C7072"
          style={styles.width}
          paddingLeft="s"
          variant="TextButtonTitle"
          placeholder={t('EmailAndPassword.Password')}
          textContentType="password"
          onChangeText={value => {
            setPasswordError(false);
            setPassword(value);
          }}
        />
      </Box>
    </Box>
  );
};
export default EmailAndPasswordInput;
const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  width: {
    width: '100%',
  },
});
