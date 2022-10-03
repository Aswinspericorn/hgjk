import React from 'react';
import {Image, StyleSheet} from 'react-native';
import {Box, Text} from '../theme/theme';

interface Props {
  image: string;
  title: string;
  describe: string;
}
const UserTile = ({image, title, describe}: Props) => {
  return (
    <Box flexDirection="row" marginVertical="xss" style={styles.container}>
      <Box width={'15%'}>
        <Image source={{uri: image}} style={styles.Image} />
      </Box>
      <Box paddingHorizontal="s" justifyContent="center">
        <Text
          variant="PersonalizationRegular"
          fontSize={16}
          lineHeight={20}
          style={styles.text}>
          {title}
        </Text>
        <Text variant="TextButtonTitle" color="buttonSetupGrey" fontSize={14}>
          {describe}
        </Text>
      </Box>
    </Box>
  );
};
export default UserTile;
const styles = StyleSheet.create({
  container: {
    height: 55,
  },
  Image: {
    width: '100%',
    height: '90%',
    borderRadius: 200,
  },
  text: {
    width: '60%',
    paddingBottom: 10,
  },
});
