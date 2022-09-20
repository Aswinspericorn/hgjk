import React from 'react';
import {Box, Text, TextInput} from '../../theme/theme';
import Arrow from '../../assets/icons/downArrow.svg';
const LoginMobile = () => {
  return (
    <Box flex={1} backgroundColor="secondaryBackground">
      <Box flex={1}>
        <Box flex={1} paddingTop="xxl" paddingHorizontal="m">
          <Text variant="header">Welcome back.</Text>
        </Box>
        <Box paddingTop="s" paddingHorizontal="m">
          <Text variant="TextButtonTitle" fontSize={16}>
            Log in to your account
          </Text>
        </Box>
      </Box>
      <Box flex={4}>
        <Box
          flexDirection="row"
          borderWidth={1}
          borderColor="pointerFill"
          alignItems="center">
          <Box flexDirection="row">
            {/* <Arrow/> */}
            <Text variant="TextButtonTitle">+91</Text>
          </Box>
          <TextInput
            variant="TextButtonTitle"
            fontWeight="400"
            placeholder="Mobile number"
          />
        </Box>
      </Box>
    </Box>
  );
};
export default LoginMobile;
