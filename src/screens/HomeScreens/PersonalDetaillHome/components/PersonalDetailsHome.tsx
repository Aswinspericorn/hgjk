import React from 'react';
import {Image, StyleSheet} from 'react-native';
import auth from '@react-native-firebase/auth';
import {useDispatch, useSelector} from 'react-redux';
import {Box, Text, TouchableBox} from '../../../../theme/theme';
import Location from '../../../../assets/icons/Svg/Avatar.svg';
import Wallet from '../../../../assets/icons/Svg/wallet.svg';
import Help from '../../../../assets/icons/Svg/help.svg';
import Settings from '../../../../assets/icons/Svg/settings.svg';
import {changeAuthStatus} from '../../../../store/redux/AuthStatus';

const PersonalDetailsHome = ({navigation}) => {
  const userData = useSelector((state: any) => state?.UserData.userData);
  const dispatch = useDispatch();
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
                variant="TextButtonTitle"
                color="blueTitleText"
                textAlign="center">
                View Profile
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
            onPress={() =>
              navigation.navigate('Map', {
                location: {...userData.location},
                image: userData.photo,
              })
            }>
            <Box paddingRight="xss" justifyContent="center" alignItems="center">
              <Location width={18} height={22} fill="none" />
            </Box>
            <Text variant="PersonalizationRegular" lineHeight={20}>
              Address
            </Text>
          </TouchableBox>
          <TouchableBox flexDirection="row" paddingBottom="l">
            <Box paddingRight="xs">
              <Wallet width={22} height={16} fill="none" />
            </Box>
            <Text variant="PersonalizationRegular" lineHeight={20}>
              Payment method
            </Text>
          </TouchableBox>
          <TouchableBox flexDirection="row" paddingBottom="l">
            <Box paddingRight="xss" justifyContent="center" alignItems="center">
              <Help width={20} height={20} fill="none" />
            </Box>
            <Text variant="PersonalizationRegular" lineHeight={20}>
              Help
            </Text>
          </TouchableBox>
          <TouchableBox flexDirection="row" paddingBottom="l">
            <Box paddingRight="xs" justifyContent="center" alignItems="center">
              <Settings width={22} height={22} fill="none" />
            </Box>
            <Text variant="PersonalizationRegular" lineHeight={20}>
              Settings
            </Text>
          </TouchableBox>
        </Box>
        <Box paddingTop="m">
          <TouchableBox flexDirection="row" paddingBottom="l" paddingLeft="xs">
            <Text variant="PersonalizationRegular" lineHeight={20}>
              About
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
              Log out
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
