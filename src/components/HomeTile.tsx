import React from 'react';
import {Image, ImageSourcePropType, StyleSheet} from 'react-native';
import {Box, Text} from '../theme/theme';

interface Props {
  image: ImageSourcePropType;
  title: string;
  describe: string;
}
const HomeTile = ({image, title, describe}: Props) => {
  return (
    <Box
      flex={1}
      flexDirection="row"
      marginVertical="xss"
      style={styles.container}>
      <Box width={'20%'}>
        <Image source={image} style={styles.Image} />
      </Box>
      <Box paddingHorizontal="m" justifyContent="space-between">
        <Text
          variant="buttonTitle"
          fontSize={14}
          lineHeight={20}
          style={styles.text}>
          {title}
        </Text>
        <Text variant="TextButtonTitle" color="buttonSetupGrey" fontSize={12}>
          {describe}
        </Text>
      </Box>
    </Box>
  );
};
export default HomeTile;
const styles = StyleSheet.create({
  container: {
    height: 65,
  },
  Image: {
    width: '100%',
    height: '100%',
  },
  text: {
    width: '60%',
  },
});
