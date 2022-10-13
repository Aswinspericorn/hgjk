import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Image, StyleSheet} from 'react-native';
import {Box, Text, TouchableBox} from '../theme/theme';

// interface Props {
//   image: string;
//   title: string;
//   describe: string;
// }
const MapUSerTile = ({item}) => {
  const navigation = useNavigation();
  return (
    <Box
      style={styles.container}
      flex={1}
      width={240}
      borderTopLeftRadius="s"
      borderTopRightRadius="s"
      backgroundColor="secondaryBackground">
      <Box flex={2}>
        <Image
          source={{uri: item?._data?.photo}}
          style={styles.Image}
          resizeMode="contain"
        />
      </Box>
      <Box
        flex={1}
        flexDirection="row"
        paddingBottom="xs"
        backgroundColor="secondaryBackground"
        justifyContent="space-between">
        <Box
          paddingVertical="s"
          paddingHorizontal="s"
          justifyContent="center"
          flex={2}>
          <Text
            variant="PersonalizationRegular"
            fontSize={14}
            lineHeight={20}
            style={styles.text}>
            {item?._data?.name}
          </Text>
          <Text
            variant="interMedium"
            fontSize={14}
            lineHeight={20}
            color="primaryTitleText">
            {item?._data?.location.shortName}
          </Text>
        </Box>
        <Box justifyContent="center" paddingRight="xs" flex={1}>
          <TouchableBox
            onPress={() => {
              navigation.navigate('UserDetails', item._data);
            }}
            backgroundColor="mapButtonBlue"
            borderRadius="l"
            paddingVertical="xs"
            paddingHorizontal="xs">
            <Text
              variant="TextButtonTitle"
              textAlign="center"
              color="secondaryBackground">
              View
            </Text>
          </TouchableBox>
        </Box>
      </Box>
    </Box>
  );
};
export default MapUSerTile;
const styles = StyleSheet.create({
  container: {
    height: 55,
  },
  Image: {
    width: '100%',
    height: 240,
    borderRadius: 8,
  },
  text: {
    width: '100%',
    paddingBottom: 10,
  },
});
