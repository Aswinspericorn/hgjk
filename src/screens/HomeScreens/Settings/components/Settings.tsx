import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Box, Text, TouchableBox} from '../../../../theme/theme';
import {useTranslation} from 'react-i18next';
import {changeDarkModeStatus} from '../../../../store/redux/DarkModeStatus';
import {Lock, Notification, Person} from '../../../../assets/icons/Svg/Icons';
// import {Switch} from 'react-native';
const Settings = ({navigation}) => {
  const mode = useSelector((state: any) => state.DarkModeStatus.mode);
  const dispatch = useDispatch();
  const {t} = useTranslation();

  const toggleSwitch = status => {
    dispatch(changeDarkModeStatus(status));
  };
  return (
    <Box
      flex={1}
      backgroundColor="secondaryBackground"
      paddingHorizontal="m"
      paddingTop="s">
      <Box
        borderRadius="s"
        marginBottom="m"
        alignItems="flex-start"
        paddingVertical="m"
        backgroundColor="primaryCardBackground">
        <Box paddingHorizontal="s">
          <Text variant="subHeader" color="mainForeground" fontSize={18}>
            Premium Membership
          </Text>
        </Box>
        <Box paddingHorizontal="s">
          <Text
            variant="PersonalizationRegular"
            fontSize={14}
            lineHeight={18}
            color="secondaryBackground">
            Upgrade for more features
          </Text>
        </Box>
      </Box>

      <Box flex={3}>
        <Box>
          <TouchableBox
            flexDirection="row"
            paddingBottom="l"
            onPress={() => navigation.navigate('Map')}>
            <Box paddingRight="xss" justifyContent="center" alignItems="center">
              <Person color={mode === 'dark' ? 'white' : 'black'} fill="none" />
            </Box>
            <Text variant="PersonalizationRegular" lineHeight={20}>
              {t('Settings.Profile')}
            </Text>
          </TouchableBox>
          <TouchableBox flexDirection="row" paddingBottom="l">
            <Box paddingRight="xs">
              <Lock color={mode === 'dark' ? 'white' : 'black'} fill="none" />
            </Box>
            <Text variant="PersonalizationRegular" lineHeight={20}>
              {t('Settings.Password')}
            </Text>
          </TouchableBox>
          <TouchableBox flexDirection="row" paddingBottom="l">
            <Box paddingRight="xss" justifyContent="center" alignItems="center">
              <Notification
                color={mode === 'dark' ? 'white' : 'black'}
                fill="none"
              />
            </Box>
            <Text variant="PersonalizationRegular" lineHeight={20}>
              {t('Settings.Notifications')}
            </Text>
          </TouchableBox>
        </Box>
        <Box paddingTop="m">
          <Box paddingBottom="l">
            <Text variant="buttonTitle" lineHeight={20}>
              {t('Settings.Theme')}
            </Text>
          </Box>
          <TouchableBox
            paddingVertical="s"
            borderRadius="m"
            onPress={() => toggleSwitch('default')}
            paddingLeft="xs"
            justifyContent="space-between">
            <Text
              variant="PersonalizationRegular"
              color={
                mode === 'default'
                  ? 'primaryCardBackground'
                  : mode === 'dark'
                  ? 'primaryTitleText'
                  : 'scrollTextBlack'
              }
              lineHeight={20}>
              {t('Settings.Default')}
            </Text>
          </TouchableBox>
          <TouchableBox
            flexDirection="row"
            paddingVertical="s"
            borderRadius="m"
            paddingLeft="xs"
            onPress={() => toggleSwitch('light')}
            justifyContent="space-between">
            <Text
              variant="PersonalizationRegular"
              color={
                mode === 'light'
                  ? 'primaryCardBackground'
                  : mode === 'dark'
                  ? 'primaryTitleText'
                  : 'scrollTextBlack'
              }
              lineHeight={20}>
              {t('Settings.Light')}
            </Text>
            {/* <Switch
              trackColor={{false: '#767577', true: '#81b0ff'}}
              thumbColor={mode ==='dark' ? '#6B4EFF' : '#f4f3f4'}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch}
              value={mode ==='dark'}
            /> */}
          </TouchableBox>
          <TouchableBox
            onPress={() => toggleSwitch('dark')}
            borderRadius="m"
            paddingVertical="s"
            paddingLeft="xs"
            justifyContent="space-between">
            <Text
              variant="PersonalizationRegular"
              color={
                mode === 'dark' ? 'primaryCardBackground' : 'scrollTextBlack'
              }
              lineHeight={20}>
              {t('Settings.Dark')}
            </Text>
          </TouchableBox>
        </Box>
      </Box>
    </Box>
  );
};
export default Settings;
