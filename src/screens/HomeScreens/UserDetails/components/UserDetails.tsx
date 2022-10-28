import React, {useEffect, useState} from 'react';
import {Image, StyleSheet} from 'react-native';
import Input from '../../../../components/Input';

import Arrow from '../../../../assets/icons/Svg/rightArrow.svg';
import {Box, Text, TouchableBox} from '../../../../theme/theme';
import {getUser} from '../../../../helper/Firebase.helper';
import {useTranslation} from 'react-i18next';
import {NavigateToMap, RouteToMap} from '../../../../Types/Navigation';
import {FirebaseFirestoreTypes} from '@react-native-firebase/firestore';
import {UserDataProps} from '../../../../Types/CommonProps';

type Props = {
  navigation: NavigateToMap;
  route: RouteToMap;
};

const UserDetails: React.FunctionComponent<Props> = ({
  navigation,
  route,
}: Props) => {
  let data = route?.params;
  const [input, setInput] = useState<
    FirebaseFirestoreTypes.DocumentData | UserDataProps | undefined
  >(data);

  const {t} = useTranslation();
  useEffect(() => {
    if (route?.params?.id) {
      const getData = async () => {
        const res = await getUser(route?.params?.id);
        if (res) {
          setInput(res);
        }
      };
      getData();
    }
  }, [route?.params?.id]);
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
          label={t('MyDetails.FirstName')}
          name="fname"
          value={input?.fname}
          isEditable={false}
        />
        <Input
          name="lname"
          label={t('MyDetails.LastName')}
          value={input?.lname}
          isEditable={false}
        />
        <TouchableBox
          onPress={() => {
            navigation?.navigate('Map', input);
          }}>
          <Input
            name="location"
            label={t('MyDetails.Location')}
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
            {t('MyDetails.AccountPref')}
          </Text>
        </Box>
        <Input
          name="email"
          label={t('MyDetails.Email')}
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
            {t('MyDetails.InterPref')}
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
