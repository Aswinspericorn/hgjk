import React from 'react';
import {Image, StyleSheet} from 'react-native';
import auth from '@react-native-firebase/auth';
import {useSelector} from 'react-redux';
import {Box, Text, TouchableBox} from '../../../../theme/theme';

import {useTranslation} from 'react-i18next';
import {
  Help,
  Location,
  Settings,
  Wallet,
} from '../../../../assets/icons/Svg/Icons';
import {changeAuthStatus} from '../../../../store/redux/actions/AuthStatus';
import {
  getDarkModeStatus,
  getUserData,
} from '../../../../store/redux/selectors/AllSelector';
import {useAppDispatch} from '../../../../store/redux/store';
import {ProfileScreenProp, UniversalProps} from '../../../../Types/Navigation';

const PersonalDetailsHome = ({navigation}: ProfileScreenProp) => {
  const userData = useSelector(getUserData);

  const mode = useSelector(getDarkModeStatus);

  const dispatch = useAppDispatch();
  const {t} = useTranslation();
  return (
    <Box
      flex={1}
      backgroundColor="secondaryBackground"
      paddingHorizontal="m"
      paddingTop="l">
      <Box flex={1} paddingTop="xs" justifyContent="center">
        <Box flexDirection="row" alignItems="center" paddingBottom="m">
          <Box paddingRight="xs">
            <Image source={{uri: userData?.photo}} style={styles.Image} />
          </Box>
          <Box>
            <Text variant="subHeader">{userData?.name}</Text>
            <Text variant="PersonalizationRegular">{userData?.email}</Text>
          </Box>
        </Box>
        <Box justifyContent="center" alignItems="center">
          <TouchableBox
            width={'100%'}
            onPress={() => {
              navigation.navigate('MyDetails');
            }}>
            <Box
              marginLeft="xxs"
              marginRight="xxs"
              backgroundColor="SelectedPracticeAreaBg"
              borderRadius="l"
              paddingHorizontal="m"
              paddingVertical="xss">
              <Text
                lineHeight={20}
                variant="TextButtonTitle"
                color="blueTitleText"
                textAlign="center">
                {t('Personaliz.ViewProfile')}
              </Text>
            </Box>
          </TouchableBox>
        </Box>
      </Box>
      <Box flex={3}>
        <Box>
          <TouchableBox
            flexDirection="row"
            paddingBottom="l"
            onPress={() => navigation.navigate('Map')}>
            <Box paddingRight="xss" justifyContent="center" alignItems="center">
              <Location
                color={mode === 'dark' ? 'white' : 'black'}
                fill="none"
              />
            </Box>
            <Text variant="PersonalizationRegular" lineHeight={20}>
              {t('Personaliz.Address')}
            </Text>
          </TouchableBox>
          <TouchableBox flexDirection="row" paddingBottom="l">
            <Box paddingRight="xs">
              <Wallet color={mode === 'dark' ? 'white' : 'black'} fill="none" />
            </Box>
            <Text variant="PersonalizationRegular" lineHeight={20}>
              {t('Personaliz.PaymentMethod')}
            </Text>
          </TouchableBox>
          <TouchableBox flexDirection="row" paddingBottom="l">
            <Box paddingRight="xss" justifyContent="center" alignItems="center">
              <Help color={mode === 'dark' ? 'white' : 'black'} fill="none" />
            </Box>
            <Text variant="PersonalizationRegular" lineHeight={20}>
              {t('Personaliz.Help')}
            </Text>
          </TouchableBox>
          <TouchableBox
            flexDirection="row"
            paddingBottom="l"
            onPress={() => {
              navigation.navigate('Settings');
            }}>
            <Box paddingRight="xs" justifyContent="center" alignItems="center">
              <Settings
                color={mode === 'dark' ? 'white' : 'black'}
                fill="none"
              />
            </Box>
            <Text variant="PersonalizationRegular" lineHeight={20}>
              {t('Personaliz.Settings')}
            </Text>
          </TouchableBox>
        </Box>
        <Box paddingTop="m">
          <TouchableBox flexDirection="row" paddingBottom="l" paddingLeft="xs">
            <Text variant="PersonalizationRegular" lineHeight={20}>
              {t('Personaliz.About')}
            </Text>
          </TouchableBox>
          <TouchableBox
            flexDirection="row"
            paddingBottom="m"
            paddingLeft="xs"
            onPress={() => {
              auth()
                .signOut()
                .then(() => {
                  dispatch(changeAuthStatus(false));
                });
            }}>
            <Text variant="PersonalizationRegular" lineHeight={20}>
              {t('Personaliz.Logout')}
            </Text>
          </TouchableBox>
        </Box>
      </Box>
    </Box>
  );
};
export default PersonalDetailsHome;
const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  Image: {
    width: 64,
    height: 64,
    borderRadius: 200,
  },
});
