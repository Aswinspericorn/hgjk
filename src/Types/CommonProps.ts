import {FirebaseFirestoreTypes} from '@react-native-firebase/firestore';

export interface UserDataProps {
  id: string;
  fname: string;
  lname: string;
  location: {shortName: string; location: {lat: number; lng: number}};
  email: string;
  language: string;
  photo: string;
  phno: number;
}

export type FirebaseReturnData =
  | FirebaseFirestoreTypes.DocumentData
  | undefined;
