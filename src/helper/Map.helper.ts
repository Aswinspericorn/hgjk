import {PermissionsAndroid} from 'react-native';

export const requestPermission = () =>
  new Promise(async (resolve, reject) => {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      resolve(granted);
    }
    return reject('Location Permission denied');
  });
