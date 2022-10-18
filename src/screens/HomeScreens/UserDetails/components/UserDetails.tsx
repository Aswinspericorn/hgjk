import React, {useEffect, useState} from 'react';
import {Image, StyleSheet} from 'react-native';
import Input from '../../../../components/Input';

import Arrow from '../../../../assets/icons/Svg/rightArrow.svg';
import {Box, Text, TouchableBox} from '../../../../theme/theme';
import {getUser} from '../../../../helper/Firebase.helper';

// interface Props {
//   fname: string;
//   lname: string;
//   location: {shortName: string};
//   email: string;
//   language: string;
//   photo: string;
// }
const UserDetails = ({navigation, route}) => {
  let data = route?.params;
  const [input, setInput] = useState(data);
  useEffect(() => {
    if (route?.params?.id) {
      const getData = async () => {
        const res = await getUser(route?.params?.id);
        setInput(res);
      };
      getData();
    }
  }, [route?.params?.id]);
  console.log(input, '----------------');
  return (
    <Box flex={1} backgroundColor="secondaryBackground">
      <Box
        flex={1}
        height={200}
        paddingTop="xs"
        justifyContent="center"
        alignItems="center">
        <Box width={'25%'} height={'60%'} paddingTop="m">
          <Image source={{uri: input?.photo}} style={styles.Image} />
        </Box>
      </Box>
      <Box flex={3}>
        <Input
          label="First name"
          name="fname"
          value={input?.fname}
          isEditable={false}
        />
        <Input
          name="lname"
          label="Last name"
          value={input?.lname}
          isEditable={false}
        />
        <TouchableBox
          onPress={() => {
            navigation.navigate('Map', input);
          }}>
          <Input
            name="location"
            label="Location"
            value={input?.location?.shortName}
            isEditable={false}
          />
        </TouchableBox>
        <Box backgroundColor="myDetailsTopic" paddingTop="m" paddingBottom="s">
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
          isEditable={false}
        />
        <Box backgroundColor="myDetailsTopic" paddingTop="m" paddingBottom="s">
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
  );
};
export default UserDetails;
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
