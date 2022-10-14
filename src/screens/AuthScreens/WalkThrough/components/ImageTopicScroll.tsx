import React from 'react';
import {ImageSourcePropType} from 'react-native';
import {Dimensions, Image, StyleSheet} from 'react-native';
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
} from 'react-native-reanimated';
import {Box, Text} from '../../../../theme/theme';

const {width} = Dimensions.get('window');

interface Props {
  item: {image: ImageSourcePropType; topic: string};
  index: number;
  translateX: Animated.SharedValue<number>;
}
const ImageTopicScroll = ({item, index, translateX}: Props) => {
  const rStyle = useAnimatedStyle(() => {
    const scale = interpolate(
      translateX?.value,
      [(index - 1) * width, index * width, (index + 1) * width],
      [0, 1, 0],
      Extrapolate.CLAMP,
    );
    return {
      transform: [{scale}],
    };
  });
  return (
    <Animated.View style={[styles.screen, rStyle]}>
      <Box
        key={index}
        flex={1}
        width={width}
        justifyContent="center"
        alignItems="center">
        <Box
          flex={4}
          width={'90%'}
          justifyContent="center"
          alignItems="center"
          paddingVertical="s">
          <Image source={item?.image} style={styles.image} />
        </Box>
        <Box
          flex={2}
          justifyContent="flex-end"
          alignItems="center"
          width={'90%'}>
          <Text
            variant="body"
            lineHeight={32}
            color="primaryTitleText"
            textAlign="center"
            paddingBottom="xs">
            {item?.topic}
          </Text>
        </Box>
      </Box>
    </Animated.View>
  );
};
export default ImageTopicScroll;
const styles = StyleSheet.create({
  screen: {
    height: '100%',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    height: '90%',
    width: '90%',
  },
  pressed: {
    opacity: 0.3,
  },
});
