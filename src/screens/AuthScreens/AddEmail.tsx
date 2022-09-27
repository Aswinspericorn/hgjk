import React, {useEffect, useState} from 'react';
import {Alert, StyleSheet} from 'react-native';
import PrimaryButton from '../../components/PrimaryButton';
import {Box, Text, TextInput} from '../../theme/theme';
import {EmailValidation} from '../../utils/regex';
import auth from '@react-native-firebase/auth';

interface Props {
  navigation: any;
  route: any;
}
const AddEmail = ({navigation, route}: Props) => {
  const [email, setEmail] = useState<string>('');
  const [emailError, setEmailError] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const temp = auth().currentUser?.email;
    setEmail(temp ? temp : '');
  }, []);
  const AddEmailHandler = () => {
    const emailIsValid = EmailValidation(email);
    if (!emailIsValid) {
      setEmailError(true);
      return;
    }
    setIsLoading(true);
    auth()
      .currentUser?.updateEmail(email)
      .then(() => {
        navigation.navigate('SetupLocation', {email: email, ...route.params});
      })
      .catch(err => {
        if (err.code === 'auth/email-already-in-use') {
          Alert.alert('The email address is already in use by another account');
          return;
        }
        Alert.alert('Something went wrong');
      });
    setIsLoading(false);
  };
  return (
    <Box
      flex={1}
      backgroundColor="secondaryBackground"
      justifyContent="space-between"
      paddingTop="xl">
      <Box flex={2} paddingTop="xs" paddingHorizontal="m">
        <Box
          width={'90%'}
          height={4}
          backgroundColor="pointerFill"
          borderRadius="s">
          <Box
            width={'10%'}
            height={'100%'}
            backgroundColor="blueTitleText"
            borderRadius="s"
          />
        </Box>
        <Box paddingTop="l">
          <Text variant="header" fontSize={18} lineHeight={18} textAlign="left">
            What’s your email address?
          </Text>
        </Box>
        <Box
          flexDirection="row"
          borderWidth={1}
          borderColor={emailError ? 'errorColor' : 'pointerFill'}
          height={48}
          borderRadius="xs"
          marginVertical="s"
          alignItems="center">
          <TextInput
            value={email}
            keyboardType="email-address"
            placeholderTextColor="#6C7072"
            style={styles.width}
            paddingHorizontal="s"
            variant="TextButtonTitle"
            placeholder="Email"
            onChangeText={value => {
              setEmailError(false);
              setEmail(value);
            }}
          />
        </Box>
      </Box>
      <Box paddingBottom="m">
        <PrimaryButton
          disabled={isLoading}
          title="Sign Up"
          onPress={() => AddEmailHandler()}
        />
      </Box>
    </Box>
  );
};
export default AddEmail;
const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  width: {
    width: '100%',
  },
});
