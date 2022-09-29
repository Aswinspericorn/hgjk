import React, {useState} from 'react';
import { Image, StyleSheet} from 'react-native';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {Box, TouchableBox} from '../../../../theme/theme';
import Photo from '../../../../assets/icons/Svg/photo.svg';
import PrimaryButton from '../../../../components/PrimaryButton';

interface Props {
  onPress: (type: string, name: string) => void;
}
const UserImagePicker = ({onPress}: Props) => {
  const [photo, setPhoto] = useState<string>('');
  const openCamera = () => {
    const options = {
      storageOptions: {
        path: 'Images',
        mediaType: 'photo',
      },
      includeBase64: true,
    };
    launchCamera(options, response => {
      const source = {uri: 'data:image;base64,' + response?.assets[0].base64};
      setPhoto(source);
    });
  };

  // const result1 = await launchImageLibrary(options?);
  return (
    <Box height={"100%"}>
      <Box
        flex={2}
        justifyContent="center"
        alignItems="center"
        borderRadius="m">
        <Image source={photo} style={styles.photo} />
      </Box>
      <TouchableBox
        onPress={openCamera}
        justifyContent="center"
        alignItems="center"
        paddingTop="m"
        flex={1}>
        <Box alignItems="center">
          <Photo width={80} height={60} />
        </Box>
      </TouchableBox>
      <Box flex={1} justifyContent="flex-end">
        <PrimaryButton
          title="Continue"
          onPress={() => {
            onPress(photo, 'photo');
          }}
        />
      </Box>
    </Box>
  );
};
export default UserImagePicker;
const styles = StyleSheet.create({
  photo: {
    height: 200,
    width: 200,
    borderRadius: 10,
  },
});
