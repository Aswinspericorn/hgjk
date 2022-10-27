import auth from '@react-native-firebase/auth';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {Alert} from 'react-native';
import {LoginManager, AccessToken, Settings} from 'react-native-fbsdk-next';

export async function onGoogleButtonPress(checkIsNewUser: () => void) {
  // Get the users ID token
  try {
    const {idToken} = await GoogleSignin.signIn();
    // await GoogleSignin.signOut();
    // Create a Google credential with the token
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);
    await auth()
      .signInWithCredential(googleCredential)
      .then(() => {
        checkIsNewUser();
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

export async function onFacebookButtonPress(setIsLoading, checkIsNewUser) {
  Settings.initializeSDK();
  // Attempt login with permissions
  setIsLoading(true);
  try {
    const result = await LoginManager.logInWithPermissions([
      'public_profile',
      'email',
    ]);

    if (result.isCancelled) {
      Alert.alert('Something went wrong');
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
        checkIsNewUser();
        setIsLoading(false);
      })
      .catch(() => {
        setIsLoading(false);
        return;
      });
  } catch (err) {
    setIsLoading(false);
    Alert.alert('Something went wrong,check your internet connection');
    return;
  }
}
