import React, {useState} from 'react';
import {Alert, Image, Pressable, StyleSheet} from 'react-native';
import {useDispatch} from 'react-redux';
import {Box, Text, TouchableBox} from '../../theme/theme';
import Facebook from '../../assets/icons/Svg/facebook.svg';
import {LoginManager, AccessToken, Settings} from 'react-native-fbsdk-next';
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
        .then(() => {
          dispatch(changeAuthStatus(true));
          return;
        })
        .catch(() => {
          Alert.alert('Something went wrong,try again later');
          return;
        });
    } catch (err) {
      return;
    }
  }

  async function onFacebookButtonPress() {
    Settings.initializeSDK();
    // Attempt login with permissions
    setIsLoading(true);
    try {
      const result = await LoginManager.logInWithPermissions([
        'public_profile',
        'email',
      ]);

      if (result.isCancelled) {
        // console.log('User cancelled the login process');
        return;
      }

      // Once signed in, get the users AccesToken
      const data = await AccessToken.getCurrentAccessToken();

      if (!data) {
        // Alert.alert('Something went wrong obtaining access token');
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
          dispatch(changeAuthStatus(true));
          setIsLoading(false);
        })
        .catch(() => {
          setIsLoading(false);
          return;
        });
    } catch (err) {
      setIsLoading(false);
      console.log(err);
      Alert.alert('Something went wrong,check your internet connection');
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
            borderBottomWidth={1}
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
            borderBottomWidth={1}
            width="100%"
          />
        </Box>
        <Box flexDirection="row" overflow="hidden">
          <Box
            marginHorizontal="xs"
            borderRadius="xs"
            borderWidth={2}
            borderColor="pointerFill">
            <Pressable
              onPress={onFacebookButtonPress}
              disabled={isLoading}
              style={({pressed}) => (pressed ? styles.pressed : {})}>
              <Box paddingHorizontal="m" paddingVertical="xs">
                <Facebook width={40} height={30} fill="none" />
              </Box>
            </Pressable>
          </Box>

          <Box
            marginHorizontal="xs"
            borderRadius="xs"
            borderWidth={2}
            borderColor="pointerFill">
            <Pressable
              onPress={onGoogleButtonPress}
              disabled={isLoading}
              style={({pressed}) => (pressed ? styles.pressed : {})}>
              <Box paddingHorizontal="m" paddingVertical="xs">
                <Google width={40} height={30} fill="none" />
              </Box>
            </Pressable>
          </Box>
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
  pressed: {
    opacity: 0.3,
  },
});
