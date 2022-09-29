import React from 'react';
import {StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {Box} from '../../../../theme/theme';
const GradientBottom = () => {
  return (
    <Box justifyContent="flex-end" flex={2}>
      <LinearGradient
        start={{x: 1, y: 1}}
        end={{x: 0.6, y: 0}}
        colors={['#99b8ee', '#d4d9f4', '#d6b9e3', '#fbf4fa', '#fff']}
        style={styles.screen}
      />
    </Box>
  );
};
export default GradientBottom;
const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
