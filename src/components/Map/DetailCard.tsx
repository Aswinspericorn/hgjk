import React from 'react';
import {Image, StyleSheet} from 'react-native';
import {Box, Text, TouchableBox} from '../../theme/theme';
interface Props {
  distance: number;
  duration: number[];
  image: string;
  place: string;
  name: string;
  start: boolean;
  setStart: (a: boolean) => void;
}
const DetailCard = ({
  distance,
  duration,
  image,
  place,
  name,
  start,
  setStart,
}: Props) => {
  return (
    <Box
      height={'13%'}
      width={'100%'}
      position="absolute"
      bottom={0}
      backgroundColor="secondaryBackground"
      justifyContent="space-between"
      flexDirection="row"
      paddingTop="m"
      borderTopEndRadius="m"
      borderTopStartRadius="m"
      paddingHorizontal="s">
      <Box>
        <Box paddingBottom="xs" flexDirection="row">
          <Text variant="TextButtonTitle" color="mapGreen">
            {duration[0]}hr {duration[1]}min
          </Text>
          <Text variant="TextButtonTitle">({distance} km)</Text>
        </Box>
        <Box paddingBottom="xs">
          <Text variant="buttonTitle">{place}</Text>
        </Box>
        <Box flexDirection="row" alignItems="center">
          <Box width={'15%'}>
            <Image source={{uri: image}} style={styles.Image} />
          </Box>
          <Box paddingLeft="m">
            <Text variant="buttonTitle">{name}</Text>
          </Box>
        </Box>
      </Box>
      <Box alignItems="center" justifyContent="center">
        {!start ? (
          <TouchableBox
            onPress={() => setStart(true)}
            backgroundColor="mapButtonBlue"
            borderRadius="l"
            paddingVertical="s"
            paddingHorizontal="m">
            <Text variant="TextButtonTitle" color="secondaryBackground">
              Start
            </Text>
          </TouchableBox>
        ) : (
          <TouchableBox
            onPress={() => setStart(false)}
            backgroundColor="mapButtonBlue"
            borderRadius="l"
            paddingVertical="s"
            paddingHorizontal="m">
            <Text variant="TextButtonTitle" color="secondaryBackground">
              Stop
            </Text>
          </TouchableBox>
        )}
      </Box>
    </Box>
  );
};
export default DetailCard;
const styles = StyleSheet.create({
  Image: {
    width: 34,
    height: 34,
    borderRadius: 100,
  },
});
