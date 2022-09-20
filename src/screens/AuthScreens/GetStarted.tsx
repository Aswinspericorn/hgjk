import React from 'react';
import {ImageBackground, StyleSheet} from 'react-native';
import {Box, Text, TouchableBox} from '../../theme/theme';
export const GetStarted = ({navigation}) => {
  return (
    <Box flex={1}>
      <Box
        flex={1}
        backgroundColor="mainBackground"
        justifyContent="center"
        alignItems="center">
        <Box paddingBottom="s" paddingTop="l">
          <Text variant="body">keepYoga</Text>
        </Box>
        <Box width="85%">
          <Text variant="header" textAlign="center">
            Practice yoga whenever you want.
          </Text>
        </Box>
      </Box>
      <ImageBackground
        source={require('../../assets/images/Image.png')}
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
            Get Started
          </Text>
        </TouchableBox>
      </ImageBackground>
    </Box>
  );
};
export default GetStarted;
const styles = StyleSheet.create({
  background: {
    flex: 3,
    resizeMode: 'stretch',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
});
