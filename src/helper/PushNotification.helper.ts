import AsyncStorage from '@react-native-async-storage/async-storage';
import messaging from '@react-native-firebase/messaging';
import {Linking} from 'react-native';

async function requestUserPermission() {
  const authStatus = await messaging().requestPermission();
  const enabled =
    authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
    authStatus === messaging.AuthorizationStatus.PROVISIONAL;

  if (enabled) {
    GetFCMToken();
  }
}
export default requestUserPermission;

async function GetFCMToken() {
  let fcmToken = await AsyncStorage.getItem('fcmToken');
  if (!fcmToken) {
    try {
      const Token = await messaging().getToken();
      if (Token) {
        AsyncStorage.setItem('fcmToken', Token);
      }
    } catch {}
  }
}
export const NotificationLIsterner = () => {
  messaging().onNotificationOpenedApp(async () => {});

  // Check whether an initial notification is available
  messaging()
    .getInitialNotification()
    .then(async remoteMessage => {
      if (remoteMessage) {
        if (remoteMessage?.data?.id) {
          Linking.openURL(
            `demo://app/${remoteMessage?.data?.type}/${remoteMessage?.data?.id}`,
          );
        } else {
          Linking.openURL(`demo://app/${remoteMessage?.data?.type}`);
        }
      }
    });
  messaging().onMessage(async () => {});
};
