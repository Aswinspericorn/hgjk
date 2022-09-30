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
const CreateAccountHelper = ({
  email,
  password,
  emailError,
  passwordError,
  isLoading,
  setSucces,
}: Props) => {
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
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        isLoading(false);
        // dispatch(changeAuthStatus(true));
        setSucces(true);
      })
      .catch((error: Error) => {
        isLoading(false);
        if (error.code === 'auth/email-already-in-use') {
          Alert.alert('That email address is already in use!');
          return;
        }

        if (error.code === 'auth/invalid-email') {
          Alert.alert('That email address is invalid!');
          return;
        } else {
          Alert.alert('Try again later');
        }
        return;
      });
  }
};
export default CreateAccountHelper;
