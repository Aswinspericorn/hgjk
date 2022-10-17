import AsyncStorage from '@react-native-async-storage/async-storage';
import {FirebaseFirestoreTypes} from '@react-native-firebase/firestore';
import messaging from '@react-native-firebase/messaging';
import {getUser} from './Firebase.helper';

async function requestUserPermission() {
  const authStatus = await messaging().requestPermission();
  const enabled =
    authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
    authStatus === messaging.AuthorizationStatus.PROVISIONAL;

  if (enabled) {
    console.log('Authorization status:', authStatus);
    GetFCMToken();
  }
}
export default requestUserPermission;

async function GetFCMToken() {
  let fcmToken = await AsyncStorage.getItem('fcmToken');
  console.log(fcmToken, 'old');
  if (!fcmToken) {
    try {
      const Token = await messaging().getToken();
      if (Token) {
        AsyncStorage.setItem('fcmToken', Token);
      }
    } catch (err) {
      console.log(err);
    }
  }
}
export const NotificationLIsterner = (navigation: {
  navigate: (
    arg0: string,
    arg1: {screen: string; params: FirebaseFirestoreTypes.DocumentData},
  ) => void;
}) => {
  messaging().onNotificationOpenedApp(remoteMessage => {
    console.log(
      'Notification caused app to open from background state:',
      remoteMessage.notification,
    );
  });

  // Check whether an initial notification is available
  messaging()
    .getInitialNotification()
    .then(async remoteMessage => {
      if (remoteMessage) {
        if (remoteMessage?.data?.type === 'friend') {
          const data = await getUser(remoteMessage.data.id);
          //   navigation.navigate('UserDetails', data);
          navigation.navigate('Homestack', {
            screen: 'UserDetails',
            params: data,
          });
        }
      }
    });
  messaging().onMessage(async message => {
    console.log('notifghgh', message);
  });
};
