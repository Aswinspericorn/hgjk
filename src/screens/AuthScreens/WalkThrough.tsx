import React, {useState} from 'react';
import {Alert, Image, Pressable, StyleSheet} from 'react-native';
import {useDispatch} from 'react-redux';
import {Box, Text, TouchableBox} from '../../theme/theme';
import Facebook from '../../assets/icons/Svg/facebook.svg';
import {LoginManager, AccessToken} from 'react-native-fbsdk-next';
import Google from '../../assets/icons/Svg/google.svg';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';

import {changeAuthStatus} from '../../store/redux/AuthStatus';
interface Props {
  navigation: any;
}
const WalkThrough = ({navigation}: Props) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const dispatch = useDispatch();
  GoogleSignin.configure({
    webClientId:
      '719758580576-1hgli2r1blk86hgd8n861tfs755e6sii.apps.googleusercontent.com',
  });
  async function onGoogleButtonPress() {
    // Get the users ID token
    try {
      const {idToken} = await GoogleSignin.signIn();
      await GoogleSignin.signOut();
      // Create a Google credential with the token
      const googleCredential = auth.GoogleAuthProvider.credential(idToken);
      await auth()
        .signInWithCredential(googleCredential)
        .then(user => {
          console.log(user);
          dispatch(changeAuthStatus(true));
          return;
        })
        .catch(err => {
          console.log('err=', err);
          return;
        });
    } catch (err) {
      console.log('ERRR=', err);
      return;
    }
  }

  async function onFacebookButtonPress() {
    // Attempt login with permissions
    setIsLoading(true);
    try {
      const result = await LoginManager.logInWithPermissions([
        'public_profile',
        'email',
      ]);

      if (result.isCancelled) {
        // console.log('User cancelled the login process');
        result;
      }

      // Once signed in, get the users AccesToken
      const data = await AccessToken.getCurrentAccessToken();

      if (!data) {
        Alert.alert('Something went wrong obtaining access token');
        setIsLoading(false);
        return;
      }

      // Create a Firebase credential with the AccessToken
      const facebookCredential = auth.FacebookAuthProvider.credential(
        data?.accessToken,
      );

      // Sign-in the user with the credential
      await auth()
        .signInWithCredential(facebookCredential)
        .then(() => {
          setIsLoading(false);
          dispatch(changeAuthStatus(true));
        })
        .catch(err => {
          setIsLoading(false);
          console.log(err);
          return;
        });
    } catch (err) {
      setIsLoading(false);
      Alert.alert('Something went wrong');
      return;
    }
  }
  return (
    <Box flex={1} backgroundColor="secondaryBackground" paddingHorizontal="m">
      <Box
        flex={1}
        flexDirection="row"
        alignItems="center"
        paddingTop="xl"
        paddingBottom="l"
        justifyContent="center">
        <Text variant="body" color="primaryTitleText">
          You
        </Text>
        <Text variant="body" color="blueTitleText">
          Learn
        </Text>
      </Box>
      <Box
        flex={4}
        justifyContent="center"
        alignItems="center"
        paddingHorizontal="m"
        paddingVertical="s">
        <Image
          source={require('../../assets/images/youlearn.png')}
          style={styles.image}
        />
      </Box>
      <Box flex={2} justifyContent="flex-end">
        <Text
          variant="body"
          lineHeight={32}
          color="primaryTitleText"
          textAlign="center"
          paddingBottom="xs">
          Create brilliant learning {'\n'} pathways
        </Text>
      </Box>
      <Box
        flex={0.9}
        flexDirection="row"
        paddingVertical="xs"
        justifyContent="center"
        alignItems="center">
        <Box
          marginRight="xs"
          width={7}
          height={7}
          borderRadius="xxl"
          backgroundColor="pointerFill"
        />
        <Box
          marginRight="xs"
          width={7}
          height={7}
          borderRadius="xxl"
          backgroundColor="pointerFill"
        />
        <Box
          marginRight="xs"
          width={7}
          height={7}
          borderRadius="xxl"
          backgroundColor="pointerFill"
        />
        <Box
          marginRight="xs"
          width={7}
          height={7}
          borderRadius="xxl"
          backgroundColor="blueTitleText"
        />
      </Box>
      <Box justifyContent="center" alignItems="center">
        <TouchableBox
          disabled={isLoading}
          justifyContent="center"
          backgroundColor="blueTitleText"
          borderRadius="xl"
          paddingVertical="s"
          marginBottom="s"
          width="60%"
          onPress={() => navigation.navigate('EmailSignup')}>
          <Text
            variant="buttonTitle"
            textAlign="center"
            color="secondaryBackground">
            Create account
          </Text>
        </TouchableBox>
      </Box>
      <Box
        justifyContent="center"
        marginTop="s"
        alignItems="center"
        paddingBottom="s">
        <Box
          flexDirection="row"
          justifyContent="center"
          alignItems="center"
          paddingBottom="m">
          <Box
            flex={0.7}
            borderBottomColor="pointerFill"
            borderWidth={1}
            height={1}
            width="100%"
          />
          <Box flex={1} alignItems="center">
            <Text
              variant="TextButtonTitle"
              color="smallTextLogin"
              textAlign="center">
              or continue with{' '}
            </Text>
          </Box>
          <Box
            flex={0.7}
            borderBottomColor="pointerFill"
            borderWidth={1}
            height={1}
            width="100%"
          />
        </Box>
        <Box flexDirection="row" overflow="hidden">
          <Pressable
            onPress={()=>{}}
            disabled={isLoading}
            android_ripple={{color: 'black', borderless: true}}>
            <Box
              marginHorizontal="xs"
              paddingHorizontal="m"
              paddingVertical="xs"
              borderWidth={2}
              borderRadius="xs"
              borderColor="pointerFill">
              <Facebook width={40} height={30} fill="none" />
            </Box>
          </Pressable>
          <Pressable
            onPress={onGoogleButtonPress}
            disabled={isLoading}
            android_ripple={{color: 'black', borderless: true}}>
            <Box
              marginHorizontal="xs"
              paddingHorizontal="m"
              paddingVertical="xs"
              borderWidth={2}
              borderRadius="xs"
              borderColor="pointerFill">
              <Google width={40} height={30} fill="none" />
            </Box>
          </Pressable>
        </Box>
      </Box>
      <Box
        flexDirection="row"
        justifyContent="center"
        alignItems="center"
        marginBottom="s"
        paddingBottom="l">
        <Text variant="TextButtonTitle" lineHeight={24}>
          Have an account?
        </Text>
        <TouchableBox
          onPress={() => navigation.navigate('LoginMobile')}
          disabled={isLoading}>
          <Text variant="TextButtonTitle" lineHeight={24} color="blueTitleText">
            Log in.
          </Text>
        </TouchableBox>
      </Box>
    </Box>
  );
};
export default WalkThrough;
const styles = StyleSheet.create({
  image: {
    height: '100%',
    width: '100%',
  },
});
