import {Alert} from 'react-native';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
export const userFavouritesUpdate = (dataToSave: object) => {
  const arrayUnion = firestore.FieldValue.arrayUnion(dataToSave);
  try {
    let key = auth().currentUser?.uid;
    firestore()
      .collection('user')
      .doc(key)
      .update({
        favourites: arrayUnion,
      })
      .then(() => {
        console.log('User updated!');
      })
      .catch(() => Alert.alert('Try again later'));
  } catch (err) {
    console.log(err);
    return;
  }
};
