import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Box, Text, TouchableBox} from '../../../../theme/theme';
import {useTranslation} from 'react-i18next';
import {changeDarkModeStatus} from '../../../../store/redux/DarkModeStatus';
import {Lock, Notification, Person} from '../../../../assets/icons/Svg/Icons';
import {Switch} from 'react-native';
const Settings = ({navigation}) => {
  const darkMode = useSelector((state: any) => state.DarkModeStatus.darkMode);
  const dispatch = useDispatch();
  const {t} = useTranslation();

  const toggleSwitch = () => {
    dispatch(changeDarkModeStatus());
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
              <Person color={darkMode ? 'white' : 'black'} fill="none" />
            </Box>
            <Text variant="PersonalizationRegular" lineHeight={20}>
              {t('Settings.Profile')}
            </Text>
          </TouchableBox>
          <TouchableBox flexDirection="row" paddingBottom="l">
            <Box paddingRight="xs">
              <Lock color={darkMode ? 'white' : 'black'} fill="none" />
            </Box>
            <Text variant="PersonalizationRegular" lineHeight={20}>
              {t('Settings.Password')}
            </Text>
          </TouchableBox>
          <TouchableBox flexDirection="row" paddingBottom="l">
            <Box paddingRight="xss" justifyContent="center" alignItems="center">
              <Notification color={darkMode ? 'white' : 'black'} fill="none" />
            </Box>
            <Text variant="PersonalizationRegular" lineHeight={20}>
              {t('Settings.Notifications')}
            </Text>
          </TouchableBox>
        </Box>
        <Box paddingTop="m">
          <Box paddingBottom="l">
            <Text variant="buttonTitle" lineHeight={20}>
              {t('Settings.More')}
            </Text>
          </Box>
          <TouchableBox
            flexDirection="row"
            paddingBottom="l"
            paddingLeft="xs"
            justifyContent="space-between">
            <Text variant="PersonalizationRegular" lineHeight={20}>
              {t('Settings.DarkMode')}
            </Text>
            <Switch
              trackColor={{false: '#767577', true: '#81b0ff'}}
              thumbColor={darkMode ? '#6B4EFF' : '#f4f3f4'}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch}
              value={darkMode}
            />
          </TouchableBox>
        </Box>
      </Box>
    </Box>
  );
};
export default Settings;
