import React, {useEffect} from 'react';
import {ImageBackground, LogBox, NativeModules, StyleSheet} from 'react-native';
import {Box, Text, TouchableBox} from '../../../theme/theme';
import auth from '@react-native-firebase/auth';
import {useDispatch} from 'react-redux';
import requestUserPermission, {
  NotificationLIsterner,
} from '../../../helper/PushNotification.helper';
import {useTranslation} from 'react-i18next';
import {StatusBar} from 'react-native';
import {changeAuthStatus} from '../../../store/redux/actions/AuthStatus';

interface Props {
  navigation: any;
}

export const GetStarted = ({navigation}: Props) => {
  StatusBar.setBackgroundColor('#DAE2EB');
  const dispatch = useDispatch();
  useEffect(() => {
    if (auth().currentUser?.uid) {
      dispatch(changeAuthStatus(true));
    }
  }, [dispatch]);
  const {t, i18n} = useTranslation();

  LogBox.ignoreLogs([
    'Non-serializable values were found in the navigation state',
  ]);
  useEffect(() => {
    requestUserPermission();

    NotificationLIsterner(navigation);
  }, [navigation]);
  const RNI18n = NativeModules.I18nManager.localeIdentifier;
  useEffect(() => {
    const changeLanguage = () => {
      i18n.changeLanguage(RNI18n.split('_')[0]);
    };
    changeLanguage();
  }, [RNI18n, i18n]);
  return (
    <Box flex={1}>
      <Box
        flex={1}
        backgroundColor="mainBackground"
        justifyContent="center"
        alignItems="center">
        <Box paddingBottom="s" paddingTop="l">
          <Text variant="body">keepyoga</Text>
        </Box>
        <Box>
          <Text variant="header" textAlign="center" lineHeight={40}>
            {t('GetStarted.PracticeYoga')}
          </Text>
          <Text variant="header" textAlign="center">
            {t('GetStarted.wheneverYouWant')}
          </Text>
        </Box>
      </Box>
      <Box flex={3} backgroundColor="mainBackground">
        <ImageBackground
          source={require('../../../assets/images/getStarted.png')}
          style={styles.background}>
          <TouchableBox
            justifyContent="center"
            backgroundColor="secondaryBackground"
            borderRadius="xl"
            paddingVertical="s"
            marginBottom="s"
            width="90%"
            onPress={() => navigation.navigate('YouLearn')}>
            <Text variant="buttonTitle" textAlign="center">
              {t('GetStarted.GetStarted')}
            </Text>
          </TouchableBox>
        </ImageBackground>
      </Box>
    </Box>
  );
};
export default GetStarted;
const styles = StyleSheet.create({
  background: {
    flex: 1,
    height: '100%',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
});
