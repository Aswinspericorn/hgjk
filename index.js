/**
 * @format
 */

import {AppRegistry, Linking} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import messaging from '@react-native-firebase/messaging';
import i18n from './src/helper/i18n';
messaging().setBackgroundMessageHandler(async remoteMessage => {
  console.log('Message handled in the background!', remoteMessage);
  if (remoteMessage) {
    if (remoteMessage?.data?.id) {
      console.log(remoteMessage?.data?.id);
      Linking.openURL(
        `demo://app/${remoteMessage?.data?.type}/${remoteMessage?.data?.id}`,
      );
    } else {
      Linking.openURL(`demo://app/${remoteMessage?.data?.type}`);
    }
  }
});

AppRegistry.registerComponent(appName, () => App);
