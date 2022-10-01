import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Image} from 'react-native';
import {Box, Text} from '../theme/theme';
import PrimaryButton from './PrimaryButton';

const NoData = () => {
  const navigation = useNavigation();
  return (
    <Box flex={1} justifyContent="center">
      <Box alignItems="center">
        <Box justifyContent="center" alignItems="center">
          <Image source={require('../assets/images/cart.png')} />
        </Box>
        <Box alignItems="center" width={'80%'} justifyContent="center">
          <Text variant="buttonTitle" paddingBottom="m">
            No saved items
          </Text>
          <Text variant="TextButtonTitle" textAlign="center">
            Tap the heart icon near any product and we’ll save it here for you.
          </Text>
        </Box>
      </Box>
      <Box justifyContent="center" alignItems="center" paddingTop="m">
        <PrimaryButton
          title="Discover"
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
