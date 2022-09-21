import React from 'react';
import {Image, StyleSheet} from 'react-native';
import {Box, Text, TouchableBox} from '../../theme/theme';
interface Props {
  navigation: any;
}
const WalkThrough = ({navigation}: Props) => {
  return (
    <Box flex={1} backgroundColor="secondaryBackground">
      <Box
        flex={1}
        flexDirection="row"
        alignItems="center"
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
        paddingHorizontal="m"
        paddingVertical="s">
        <Image
          source={require('../../assets/images/youlearn.png')}
          style={styles.image}
        />
      </Box>
      <Box flex={2} justifyContent="flex-end">
        <Text
          variant="body"
          lineHeight={32}
          color="primaryTitleText"
          textAlign="center"
          paddingBottom="xs">
          Create brilliant learning {'\n'} pathways
        </Text>
      </Box>
      <Box
        flex={0.9}
        flexDirection="row"
        paddingVertical="xs"
        justifyContent="center"
        alignItems="center">
        <Box
          marginRight="xs"
          width={7}
          height={7}
          borderRadius="xxl"
          backgroundColor="pointerFill"
        />
        <Box
          marginRight="xs"
          width={7}
          height={7}
          borderRadius="xxl"
          backgroundColor="pointerFill"
        />
        <Box
          marginRight="xs"
          width={7}
          height={7}
          borderRadius="xxl"
          backgroundColor="pointerFill"
        />
        <Box
          marginRight="xs"
          width={7}
          height={7}
          borderRadius="xxl"
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
          onPress={() => navigation.navigate('EmailSignup')}>
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
        <Text variant="TextButtonTitle" lineHeight={24}>
          Have an account?
        </Text>
        <TouchableBox onPress={() => navigation.navigate('LoginMobile')}>
          <Text variant="TextButtonTitle" lineHeight={24} color="blueTitleText">
            Log in.
          </Text>
        </TouchableBox>
      </Box>
    </Box>
  );
};
export default WalkThrough;
const styles = StyleSheet.create({
  image: {
    height: '100%',
    width: '100%',
  },
});
