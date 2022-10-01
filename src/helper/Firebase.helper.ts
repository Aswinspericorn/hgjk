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

export const getNews = async () => {
  const newsData = await firestore()
    .collection('news')
    .doc('Zm1gMrC4QajdmYpz0hsj')
    .get();
  return newsData._data.data;
};

export const getSingleUserDetails = async () => {
  let key = auth().currentUser?.uid;
  const newsData = await firestore().collection('user').doc(key).get();
  if (newsData?._data === undefined) {
    return;
  }
  return newsData?._data;
};
