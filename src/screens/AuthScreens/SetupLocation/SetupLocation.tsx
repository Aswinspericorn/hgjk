import React from 'react';
import {useDispatch} from 'react-redux';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import Lens from '../../../assets/icons/Svg/Vector.svg';
import Marker from '../../../assets/icons/Svg/Avatar.svg';
import database from '@react-native-firebase/database';
import auth from '@react-native-firebase/auth';
import {Alert} from 'react-native';
import {changeAuthStatus} from '../../../store/redux/AuthStatus';
import {Box, Text} from '../../../theme/theme';
import {API_KEY} from '../../../constants/confiq';
import {HomePageDetailsArray} from '../../../constants/HomePageDetailsArray';

interface Props {
  navigation: any;
  route: any;
}
const SetupLocation = ({route}: Props) => {
  const dispatch = useDispatch();

  const SubmitHandler = (location: any) => {
    try {
      let key = auth().currentUser?.uid;
      let dataToSave = {
        id: key,
        location: location,
        ...route.params,
      };
      database()
        .ref('user/' + key)
        .update(dataToSave)
        .then(() => {
          dispatch(changeAuthStatus(true));
        })
        .catch(() => Alert.alert('Try again later'));
    } catch (err) {
      console.log(err);
      return;
    }
  };

  return (
    <Box flex={1} backgroundColor="secondaryBackground" paddingHorizontal="m">
      <Box height={150} justifyContent="flex-end" paddingTop="xs">
        <Box justifyContent="center">
          <Text variant="header">Find nearby shop.</Text>
        </Box>
        <Box paddingTop="xs">
          <Text variant="TextButtonTitle">
            Enter your location to find them.
          </Text>
        </Box>
      </Box>
      <Box flex={3}>
        <GooglePlacesAutocomplete
          placeholder="Type a place"
          query={{
            key: API_KEY,
            language: 'en',
            type: '(cities)',
          }}
          renderLeftButton={() => (
            <Box paddingLeft="s">
              <Lens width={24} height={24} fill="none" />
            </Box>
          )}
          onPress={(data, details = null) => SubmitHandler(details?.geometry)}
          renderRow={(rowData: any) => {
            const title = rowData.structured_formatting.main_text;
            const address = rowData.structured_formatting.secondary_text;
            return (
              <Box flexDirection="row" justifyContent="flex-start">
                <Marker width={24} height={24} fill="none" />
                <Box paddingLeft="s">
                  <Text variant="TextButtonTitle" lineHeight={20}>
                    {title}
                  </Text>
                  <Text
                    variant="TextButtonTitle"
                    fontSize={14}
                    lineHeight={16}
                    color="secondaryTitleText">
                    {address}
                  </Text>
                </Box>
              </Box>
            );
          }}
          fetchDetails={true}
          styles={{
            textInputContainer: {
              paddingVertical: 12,
              marginTop: 20,
              borderWidth: 1,
              borderColor: '#6B4EFF',
              height: 48,
              borderRadius: 8,
              alignItems: 'center',
              justifyContent: 'center',
            },
            textInput: {
              marginBottom: 0,
              color: 'black',
              fontSize: 16,
              lineHeight: 16,
              fontFamily: 'Inter-Regular',
            },
          }}
        />
      </Box>
    </Box>
  );
};
export default SetupLocation;
