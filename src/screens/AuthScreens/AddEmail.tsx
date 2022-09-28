import React, {useEffect, useState} from 'react';
import {StyleSheet} from 'react-native';
import PrimaryButton from '../../components/PrimaryButton';
import {Box, Text, TextInput, TouchableBox} from '../../theme/theme';
import {EmailValidation} from '../../utils/regex';
import auth from '@react-native-firebase/auth';
import Arrow from '../../assets/icons/Svg/downArrow.svg';
import Flag from '../../assets/icons/Svg/indian.svg';
interface Props {
  navigation: any;
  route: any;
}
const AddEmail = ({navigation, route}: Props) => {
  const [email, setEmail] = useState<string>('');
  const [phno, setPhno] = useState<string>('');
  const [error, setError] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isPhone, setIsPhone] = useState<boolean>(false); //for display phno input
  useEffect(() => {
    const tempEmail = auth().currentUser?.email;
    setEmail(tempEmail ? tempEmail : '');
    const tempPhno = auth().currentUser?.phoneNumber?.slice(-10);
    setPhno(tempPhno ? tempPhno : '');
  }, []);
  const AddHandler = () => {
    if (!isPhone) {
      const emailIsValid = EmailValidation(email);
      if (!emailIsValid) {
        setError(true);
        return;
      }
      setIsPhone(true);
    } else {
      if (phno.length !== 10) {
        setError(true);
        return;
      }
      navigation.navigate('SetupLocation', {
        email: email,
        phno: `+91${phno}`,
        ...route.params,
      });
      setIsLoading(false);
    }
  };
  return (
    <Box
      flex={1}
      backgroundColor="secondaryBackground"
      justifyContent="space-between"
      paddingHorizontal="m"
      paddingTop="xl">
      <Box flex={2} paddingTop="xs" paddingHorizontal="m">
        <Box
          width={'90%'}
          height={4}
          backgroundColor="pointerFill"
          borderRadius="s">
          <Box
            width={isPhone ? '100%' : '50%'}
            height={'100%'}
            backgroundColor="blueTitleText"
            borderRadius="s"
          />
        </Box>
        <Box paddingTop="l" paddingBottom="s">
          <Text variant="header" fontSize={18} lineHeight={18} textAlign="left">
            {!isPhone ? 'What’s your email address?' : 'What’s your Phone?'}
          </Text>
        </Box>
        {!isPhone ? (
          <Box
            flexDirection="row"
            borderWidth={1}
            borderColor={error ? 'errorColor' : 'pointerFill'}
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
                setError(false);
                setEmail(value);
              }}
            />
          </Box>
        ) : (
          <Box
            flexDirection="row"
            borderWidth={1}
            borderColor={error ? 'errorColor' : 'pointerFill'}
            height={48}
            borderRadius="xs"
            marginVertical="s"
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
                keyboardType="phone-pad"
                placeholderTextColor="#6C7072"
                style={styles.width}
                variant="TextButtonTitle"
                placeholder="Mobile number"
                onChangeText={value => {
                  setError(false);
                  setPhno(value);
                }}
              />
            </Box>
          </Box>
        )}
      </Box>
      <Box paddingBottom="m">
        <PrimaryButton
          disabled={isLoading}
          title="Continue"
          onPress={() => AddHandler()}
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
