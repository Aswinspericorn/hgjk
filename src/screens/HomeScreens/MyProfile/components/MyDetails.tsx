import React, {useEffect, useRef, useState} from 'react';
import {Image, StyleSheet} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import Input from '../../../../components/Input';
import {userDetailsUpdate} from '../../../../helper/Firebase.helper';
import {changeIsDataChanged} from '../../../../store/redux/IsDataChanged';
import {Box, Text, TouchableBox} from '../../../../theme/theme';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import {API_KEY} from '../../../../constants/confiq';
import Marker from '../../../../assets/icons/Svg/Avatar.svg';
import UserImagePicker from '../../../AuthScreens/SetupPersonalizatioTwo/components/UserImagePicker';
import Modal from 'react-native-modal';
import {useTranslation} from 'react-i18next';
import SelectDropdown from 'react-native-select-dropdown';
import {RightArrow} from '../../../../assets/icons/Svg/Icons';
interface Props {
  fname: string;
  lname: string;
  location: {shortName: string};
  email: string;
  language: string;
  photo: string;
}
const MyDetails = ({navigation}) => {
  const [isEditable, setIsEditable] = useState<boolean>(false);
  const [modalShow, setMdalShow] = useState<boolean>(false);
  const userData = useSelector((state: any) => state?.UserData.userData);
  const darkMode = useSelector((state: any) => state.DarkModeStatus.darkMode);

  const [input, setInput] = useState<Props>(
    userData
      ? userData
      : {
          fname: '',
        },
  );

  const {t} = useTranslation();
  const countries = ['English', 'Malayalam'];

  const dispatch = useDispatch();
  const dropRef = useRef();
  useEffect(() => {
    ref?.current?.setAddressText(input?.location?.shortName);
  }, [input?.location?.shortName, isEditable]);

  const updateHandler = () => {
    if (isEditable) {
      userDetailsUpdate({...input, name: input?.fname + ' ' + input?.lname});
      dispatch(changeIsDataChanged());
      setIsEditable(false);
    } else {
      setIsEditable(true);
    }
  };
  const onChangeHandler = (value: string | object, key: string) => {
    setMdalShow(false);
    setInput(prev => {
      return {...prev, [key]: value};
    });
  };
  const onImagePicker = () => {
    if (isEditable) {
      setMdalShow(true);
    }
  };
  const ref = useRef();
  return (
    <Box flex={1} backgroundColor="secondaryBackground">
      <KeyboardAwareScrollView
        style={styles.screen}
        keyboardShouldPersistTaps={'handled'}>
        <Box
          flex={1}
          height={200}
          paddingTop="xs"
          justifyContent="center"
          alignItems="center">
          <TouchableBox
            width={'20%'}
            height={'55%'}
            paddingBottom="m"
            onPress={onImagePicker}>
            <Image source={{uri: input?.photo}} style={styles.Image} />
          </TouchableBox>
          <Modal style={styles.screen} isVisible={modalShow}>
            <UserImagePicker onPress={onChangeHandler} name={input?.fname} />
          </Modal>
          <Box justifyContent="center">
            <TouchableBox onPress={updateHandler} width={'100%'}>
              <Box
                marginLeft="xxs"
                marginRight="xxs"
                backgroundColor="SelectedPracticeAreaBg"
                borderRadius="l"
                paddingHorizontal="m"
                paddingVertical="xss">
                <Text
                  variant="TextButtonTitle"
                  color="blueTitleText"
                  lineHeight={20}>
                  {isEditable ? t('MyDetails.Confirm') : t('MyDetails.Change')}
                </Text>
              </Box>
            </TouchableBox>
          </Box>
        </Box>
        <Box flex={3}>
          <Input
            label={t('MyDetails.FirstName')}
            name="fname"
            value={input?.fname}
            isEditable={isEditable}
            onChangeHandler={onChangeHandler}
          />
          <Input
            name="lname"
            label={t('MyDetails.LastName')}
            value={input?.lname}
            isEditable={isEditable}
            onChangeHandler={onChangeHandler}
          />
          {!isEditable ? (
            <TouchableBox onPress={() => navigation.navigate('Map')}>
              <Input
                name="location"
                label={t('MyDetails.Location')}
                value={input?.location?.shortName}
                isEditable={isEditable}
              />
            </TouchableBox>
          ) : (
            <GooglePlacesAutocomplete
              keyboardShouldPersistTaps="handled"
              label={t('MyDetails.EnterYourPlace')}
              ref={ref}
              query={{
                key: API_KEY,
                language: 'en',
                type: '(cities)',
              }}
              renderLeftButton={() => (
                <Box paddingLeft="s">
                  <Text variant="PersonalizationRegular">
                    {t('MyDetails.Location')}
                  </Text>
                </Box>
              )}
              onPress={(data, details = null) => {
                onChangeHandler(
                  {
                    ...details?.geometry,
                    shortName: details?.address_components[0]?.long_name,
                  },
                  'location',
                );
              }}
              renderRow={(rowData: any) => {
                const title = rowData.structured_formatting.main_text;
                const address = rowData.structured_formatting.secondary_text;
                return (
                  <Box flexDirection="row" justifyContent="flex-start">
                    <Marker width={24} height={24} fill="none" />
                    <Box paddingLeft="s">
                      <Text
                        variant="TextButtonTitle"
                        color="scrollTextBlack"
                        lineHeight={20}>
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
                  paddingTop: 26,
                  marginBottom: 16,
                  height: 48,
                  borderRadius: 8,
                  alignItems: 'center',
                  justifyContent: 'center',
                },
                textInput: {
                  paddingHorizontal: 24,
                  textAlign: 'right',
                  marginBottom: 0,
                  marginTop: 5,
                  backgroundColor: darkMode ? '#262626' : 'white',
                  fontSize: 16,
                  lineHeight: 16,
                  fontFamily: 'Inter-Regular',
                  color: darkMode ? 'white' : 'black',
                },
              }}
            />
          )}
          <Box
            backgroundColor="myDetailsTopic"
            paddingTop="m"
            paddingBottom="s">
            <Text
              variant="TextButtonTitle"
              color="smallTextLogin"
              lineHeight={15}
              fontSize={12}
              paddingHorizontal="s">
              {t('MyDetails.AccountPref')}
            </Text>
          </Box>
          <Input
            name="email"
            label={t('MyDetails.Email')}
            value={input?.email}
            isEditable={isEditable}
            onChangeHandler={onChangeHandler}
          />
          <Box
            backgroundColor="myDetailsTopic"
            paddingTop="m"
            paddingBottom="s">
            <Text
              variant="TextButtonTitle"
              lineHeight={15}
              fontSize={12}
              color="smallTextLogin"
              paddingHorizontal="s">
              {t('MyDetails.InterPref')}
            </Text>
          </Box>
          <TouchableBox
            paddingTop="s"
            disabled={!isEditable}
            paddingHorizontal="s"
            onPress={() => dropRef?.current?.openDropdown()}>
            <Box
              flexDirection="row"
              justifyContent="space-between"
              height={50}
              borderRadius="xs"
              alignItems="center">
              <Box alignItems="center">
                <Box>
                  <Text variant="TextButtonTitle" textAlign="left">
                    {t('MyDetails.Language')}
                  </Text>
                  <Text
                    variant="TextButtonTitle"
                    color="smallTextLogin"
                    paddingVertical="xs"
                    textAlign="left">
                    {input?.language}
                  </Text>
                </Box>
              </Box>
              <Box>
                <RightArrow color={darkMode ? 'white' : 'black'} fill="none" />
              </Box>
            </Box>
          </TouchableBox>
          <SelectDropdown
            ref={dropRef}
            buttonStyle={styles.buttonStyle}
            buttonTextStyle={styles.buttonTextStyle}
            dropdownStyle={styles.dropdownStyle}
            selectedRowStyle={styles.selected}
            disabled
            defaultButtonText="hello"
            defaultValue={input?.language}
            data={countries}
            onSelect={selectedItem => {
              onChangeHandler(selectedItem, 'language');
            }}
            buttonTextAfterSelection={selectedItem => {
              // text represented after item is selected
              // if data array is an array of objects then return selectedItem.property to render after item is selected
              return selectedItem;
            }}
            rowTextForSelection={item => {
              // text represented for each item in dropdown
              // if data array is an array of objects then return item.property to represent item in dropdown
              return item;
            }}
          />
        </Box>
      </KeyboardAwareScrollView>
    </Box>
  );
};
export default MyDetails;
const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  Image: {
    width: '100%',
    height: '100%',
    borderRadius: 200,
  },
  buttonStyle: {
    width: '50%',
    alignSelf: 'flex-end',
    marginHorizontal: 10,
    backgroundColor: 'transparent',
  },
  buttonTextStyle: {color: 'transparent'},
  dropdownStyle: {borderRadius: 10},
  selected: {backgroundColor: '#E7E7FF'},
});
