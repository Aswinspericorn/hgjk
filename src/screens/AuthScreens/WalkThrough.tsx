import React from 'react';
import {Image} from 'react-native';
import {Box, Text, TouchableBox} from '../../theme/theme';

const WalkThrough = ({navigation}) => {
  return (
    <Box flex={1} backgroundColor="secondaryBackground">
      <Box
        flex={1}
        flexDirection="row"
        paddingTop="xl"
        paddingBottom="l"
        justifyContent="center">
        <Text variant="body" color="primaryTitleText">
          You
        </Text>
        <Text variant="body" color="blueTitleText">
          Learn
        </Text>
      </Box>
      <Box
        flex={3}
        justifyContent="center"
        alignItems="center"
        paddingVertical="l">
        <Image
          source={require('../../assets/images/youlearn.png')}
          height={327}
          width={327}
        />
      </Box>
      <Box flex={2.4} justifyContent="center">
        <Text variant="body" color="primaryTitleText" textAlign="center">
          Create brilliant learning pathways
        </Text>
      </Box>
      <Box
        flexDirection="row"
        paddingVertical="xs"
        justifyContent="center"
        marginBottom="s"
        alignItems="center">
        <Box
          marginRight="xs"
          width={7}
          height={7}
          borderRadius="f"
          backgroundColor="pointerFill"
        />
        <Box
          marginRight="xs"
          width={7}
          height={7}
          borderRadius="f"
          backgroundColor="pointerFill"
        />
        <Box
          marginRight="xs"
          width={7}
          height={7}
          borderRadius="f"
          backgroundColor="pointerFill"
        />
        <Box
          marginRight="xs"
          width={7}
          height={7}
          borderRadius="f"
          backgroundColor="blueTitleText"
        />
      </Box>
      <Box justifyContent="center" alignItems="center">
        <TouchableBox
          justifyContent="center"
          backgroundColor="blueTitleText"
          borderRadius="xl"
          paddingVertical="s"
          marginBottom="s"
          width="60%"
          onPress={() => navigation.navigate('GetStarted')}>
          <Text
            variant="buttonTitle"
            textAlign="center"
            color="secondaryBackground">
            Create account
          </Text>
        </TouchableBox>
      </Box>
      <Box
        flexDirection="row"
        justifyContent="center"
        alignItems="center"
        marginBottom="s"
        paddingBottom="l">
        <Text variant="TextButtonTitle">Have an account?</Text>
        <TouchableBox onPress={() => navigation.navigate('LoginMobile')}>
          <Text variant="TextButtonTitle" color="blueTitleText">
            Log in.
          </Text>
        </TouchableBox>
      </Box>
    </Box>
  );
};
export default WalkThrough;
