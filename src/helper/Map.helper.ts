import {SetStateAction} from 'react';
import {PermissionsAndroid} from 'react-native';
import Geolocation from 'react-native-geolocation-service';

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

//get current location
export const getCurrentLoc = async (
  permission: {} | undefined,
  setCurLoc: {
    (arg0: {latitude: number; longitude: number}): void;
  },
  animate: {
    (latitude: number, longitude: number): void;
    (latitude: number, longitude: number): void;
    (arg0: number, arg1: number): void;
  },
) => {
  if (permission) {
    Geolocation.getCurrentPosition(
      position => {
        const cords = {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        };
        setCurLoc(cords);
        animate(cords.latitude, cords.longitude);
      },
      error => {
        return error.message;
      },
      {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
    );
  }
};

//get current heading
export const getHeader = async (
  permission: {} | undefined,
  setHeading: {
    (value: SetStateAction<number | null>): void;
  },
) => {
  if (permission) {
    Geolocation.getCurrentPosition(
      position => {
        const cords = {
          heading: position?.coords?.heading,
        };

        setHeading(cords?.heading);
      },
      error => {
        return error.message;
      },
      {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
    );
  }
};
