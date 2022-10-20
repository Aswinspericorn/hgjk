import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Image} from 'react-native';
import {Box, Text} from '../theme/theme';
import PrimaryButton from './PrimaryButton';
import {useTranslation} from 'react-i18next';

const NoData = () => {
  const navigation = useNavigation();
  const {t} = useTranslation();

  return (
    <Box flex={1} justifyContent="center">
      <Box alignItems="center">
        <Box justifyContent="center" alignItems="center">
          <Image source={require('../assets/images/cart.png')} />
        </Box>
        <Box alignItems="center" width={'80%'} justifyContent="center">
          <Text variant="buttonTitle" paddingBottom="m" lineHeight={20}>
            {t('NoData.Nosaveditems')}
          </Text>
          <Text variant="TextButtonTitle" textAlign="center" lineHeight={20}>
            {t('NoData.Tapheart')}
          </Text>
        </Box>
      </Box>
      <Box justifyContent="center" alignItems="center" paddingTop="m">
        <PrimaryButton
          title={t('NoData.Discover')}
          onPress={() => {
            navigation.navigate('Home');
          }}
          width={'50%'}
        />
      </Box>
    </Box>
  );
};
export default NoData;
