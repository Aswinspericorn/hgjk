import React, {useState} from 'react';
import {Image, StyleSheet} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import Input from '../../../../components/Input';
import {userDetailsUpdate} from '../../../../helper/Firebase.helper';
import {changeIsDataChanged} from '../../../../store/redux/IsDataChanged';
import {Box, Text, TouchableBox} from '../../../../theme/theme';
import Arrow from '../../../../assets/icons/Svg/rightArrow.svg';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
const MyDetails = () => {
  const [isEditable, setIsEditable] = useState<boolean>(false);
  const userData = useSelector((state: any) => state?.UserData.userData);
  const [input, setInput] = useState<{}>(userData ? userData : {});
  const dispatch = useDispatch();

  const updateHandler = () => {
    if (isEditable) {
      userDetailsUpdate({...input, name: input?.fname + ' ' + input?.lname});
      dispatch(changeIsDataChanged());
      setIsEditable(false);
    } else {
      setIsEditable(true);
    }
  };
  const onChangeHandler = (key: string, value: string) => {
    setInput(prev => {
      return {...prev, [key]: value};
    });
  };

  return (
    <KeyboardAwareScrollView style={styles.screen}>
      <Box flex={1} backgroundColor="secondaryBackground">
        <Box
          flex={1}
          height={200}
          paddingTop="xs"
          justifyContent="center"
          alignItems="center">
          <Box width={'20%'} height={'50%'} paddingBottom="m">
            <Image source={{uri: input?.photo}} style={styles.Image} />
          </Box>
          <Box justifyContent="center">
            <TouchableBox onPress={updateHandler} width={'35%'}>
              <Box
                marginLeft="xxs"
                marginRight="xxs"
                backgroundColor="SelectedPracticeAreaBg"
                borderRadius="l"
                paddingHorizontal="m"
                paddingVertical="xss">
                <Text variant="TextButtonTitle" color="blueTitleText">
                  {isEditable ? 'Confirm' : 'Change'}
                </Text>
              </Box>
            </TouchableBox>
          </Box>
        </Box>
        <Box flex={3}>
          <Input
            label="First name"
            name="fname"
            value={input?.fname}
            isEditable={isEditable}
            onChangeHandler={onChangeHandler}
          />
          <Input
            name="lname"
            label="Last name"
            value={input?.lname}
            isEditable={isEditable}
            onChangeHandler={onChangeHandler}
          />
          <Input
            name="location"
            label="Location"
            value={input?.location?.shortName}
            onChangeHandler={onChangeHandler}
            isEditable={isEditable}
          />
          <Box
            backgroundColor="myDetailsTopic"
            paddingTop="m"
            paddingBottom="s">
            <Text
              variant="TextButtonTitle"
              color="smallTextLogin"
              lineHeight={12}
              fontSize={12}
              paddingHorizontal="s">
              ACCOUNT INFORMATION
            </Text>
          </Box>
          <Input
            name="email"
            label="Email"
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
              lineHeight={12}
              fontSize={12}
              color="smallTextLogin"
              paddingHorizontal="s">
              INTERNATIONAL PREFERENCES
            </Text>
          </Box>
          <Box paddingTop="s" paddingHorizontal="s">
            <Box
              flexDirection="row"
              justifyContent="space-between"
              height={50}
              borderRadius="xs"
              alignItems="center">
              <Box alignItems="center">
                <Box>
                  <Text variant="TextButtonTitle" textAlign="left">
                    Language
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
                <Arrow width={10} height={15} fill="none" />
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </KeyboardAwareScrollView>
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
});
