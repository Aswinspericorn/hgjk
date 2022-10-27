import {FirebaseFirestoreTypes} from '@react-native-firebase/firestore';

export interface UserDataProps {
  id?: string;
  fname: string;
  lname: string;
  location: {shortName: string};
  email: string;
  language: string;
  photo: string;
}

export type FirebaseReturnData =
  | FirebaseFirestoreTypes.DocumentData
  | undefined;
