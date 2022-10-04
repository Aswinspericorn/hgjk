import {Alert} from 'react-native';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

export const userFavouritesAdd = (dataToSave: object) => {
  const arrayUnion = firestore.FieldValue.arrayUnion(dataToSave);
  try {
    let key = auth().currentUser?.uid;
    firestore()
      .collection('user')
      .doc(key)
      .update({
        favourites: arrayUnion,
      })
      .then(() => {})
      .catch(() => Alert.alert('Try again later'));
  } catch (err) {
    return;
  }
};

export const userFavouritesRemove = (dataToSave: object) => {
  const arrayRemove = firestore.FieldValue.arrayRemove(dataToSave);
  try {
    let key = auth().currentUser?.uid;
    firestore()
      .collection('user')
      .doc(key)
      .update({
        favourites: arrayRemove,
      })
      .then(() => {})
      .catch(() => Alert.alert('Try again later'));
  } catch (err) {
    return;
  }
};

export const getNews = async () => {
  const dataNews = await firestore()
    .collection('news')
    .doc('F4ydoNptIf5uzsJlxRn8')
    .get()
    .then(res => {
      const data = res.data();
      return data?.data;
    });
  return dataNews;
};

export const getSingleUserDetails = async () => {
  let key = auth().currentUser?.uid;
  const newsData = await firestore()
    .collection('user')
    .doc(key)
    .get()
    .then(res => {
      const data = res.data();
      return data;
    });

  if (newsData === undefined) {
    return;
  }
  return newsData;
};

export const getAllUsers = async (filter: string) => {
  if (!filter) {
    return;
  }
  const dataNews = await firestore()
    .collection('user')
    .where('name', '>=', filter)
    .where('name', '<=', filter + '~')
    .get()
    .then(res => {
      return res.docs;
    });
  return dataNews;
};
export const userDetailsUpdate = (dataToSave: object) => {
  try {
    let key = auth().currentUser?.uid;
    firestore()
      .collection('user')
      .doc(key)
      .update(dataToSave)
      .then(() => {})
      .catch(() => Alert.alert('Try again later'));
  } catch (err) {
    return;
  }
};
