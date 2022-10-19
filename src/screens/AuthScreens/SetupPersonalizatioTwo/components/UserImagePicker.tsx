import React, {useState} from 'react';
import {Image, StyleSheet} from 'react-native';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {Box, TouchableBox} from '../../../../theme/theme';
import Photo from '../../../../assets/icons/Svg/photo.svg';
import Camera from '../../../../assets/icons/Svg/camera.svg';
import PrimaryButton from '../../../../components/PrimaryButton';
import {assets} from '../../../../../react-native.config';
import storage from '@react-native-firebase/storage';
interface Props {
  onPress: (type: string, name: string) => void;
  name: string;
}
const UserImagePicker = ({onPress, name}: Props) => {
  const [photo, setPhoto] = useState<string | undefined>(
    '../../../../assets/icons/Svg/photo.svg',
  );

  let imageName = (Math.random() + 1).toString(36).substring(7);
  const task = storage()
    .ref()
    .child('userimages')
    .child(`${name + imageName}.jpeg`);

  const UploadImage = async () => {
    if (photo) {
      try {
        await task
          .putFile(photo)
          .then(() => {})
          .catch(() => {});
        onPress(await task.getDownloadURL(), 'photo');
      } catch (e) {
        console.error(e);
      }
    }
  };
  const openCamera = () => {
    const options = {
      mediaType: 'photo',
      maxWidth: 300,
      maxHeight: 300,
      quality: 1,
    };

    launchCamera(options, response => {
      if (response.didCancel) {
        return;
      }
      if (response.errorCode) {
        return;
      }
      if (response.errorMessage) {
        return;
      }
      if (response.assets) {
      }
      const source = response.assets[0].uri;
      setPhoto(source);
    });
  };

  const openGallery = () => {
    const options = {
      mediaType: 'photo',
      maxWidth: 300,
      maxHeight: 300,
      quality: 1,
    };
    launchImageLibrary(options, response => {
      if (response.didCancel) {
        return;
      }
      if (response.errorCode) {
        return;
      }
      const source = response?.assets[0]?.uri;
      setPhoto(source);
    });
  };
  // const result1 = await launchImageLibrary(options?);
  return (
    <Box height={'100%'}>
      <Box
        flex={2}
        justifyContent="center"
        alignItems="center"
        borderRadius="m">
        <Image source={{uri: photo}} style={styles.photo} />
      </Box>
      <Box flexDirection="row">
        <TouchableBox
          onPress={openCamera}
          justifyContent="center"
          alignItems="center"
          paddingTop="m"
          flex={1}>
          <Box alignItems="center">
            <Camera width={80} height={60} />
          </Box>
        </TouchableBox>
        <TouchableBox
          onPress={openGallery}
          justifyContent="center"
          alignItems="center"
          paddingTop="m"
          flex={1}>
          <Box alignItems="center">
            <Photo width={80} height={60} />
          </Box>
        </TouchableBox>
      </Box>
      <Box flex={1} justifyContent="flex-end">
        <PrimaryButton title="Continue" onPress={UploadImage} />
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
