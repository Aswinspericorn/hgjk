import {Alert} from 'react-native';
import {EmailValidation} from '../utils/regex';
import auth from '@react-native-firebase/auth';
import {Dispatch, SetStateAction} from 'react';

interface Props {
  email: string;
  password: string;
  emailError: Dispatch<SetStateAction<boolean>>;
  passwordError: Dispatch<SetStateAction<boolean>>;
  isLoading: Dispatch<SetStateAction<boolean>>;
  setSucces: Dispatch<SetStateAction<boolean>>;
}

type Error = {
  code: string;
};
const SigninAccountHelper = ({
  email,
  password,
  emailError,
  passwordError,
  isLoading,
  setSucces,
}: Props) => {
  console.log(email, password,"hjghghjgjh");
  const emailIsValid = EmailValidation(email);
  if (!emailIsValid) {
    emailError(true);
  }
  if (password.length < 6) {
    passwordError(true);
  }
  if (email && password.length > 5) {
    isLoading(true);
    auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        isLoading(false);
        setSucces(true);
      })
      .catch((error: Error) => {
        isLoading(false);
        if (error.code === 'auth/user-not-found') {
          Alert.alert('No user found');
          return;
        }
        if (error.code === 'auth/wrong-password') {
          Alert.alert('The password is invalid');
          return;
        }

        if (error.code === 'auth/invalid-email') {
          Alert.alert('That email address is invalid!');
          return;
        } else {
          Alert.alert(
            'Something went wrong, please check your internet connection',
          );
        }
        return;
      });
  }
};
export default SigninAccountHelper;
