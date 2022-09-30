import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {Image, ScrollView, StyleSheet} from 'react-native';
import {Love} from '../../../../assets/icons/Svg/Icons';
import {userFavouritesUpdate} from '../../../../helper/Firebase.helper';
import {Box, Text, TouchableBox} from '../../../../theme/theme';

interface Props {
  route: any;
}
const DetailNews = ({route}: Props) => {
  const [favourite, setFavourite] = useState<boolean>(false);
  const nav = useNavigation();
  const data = route.params;

  const favouriteHandler = () => {
    setFavourite(prev => !prev);
    userFavouritesUpdate(data);
  };
  useEffect(() => {
    nav.setOptions({
      headerRight: () => (
        <TouchableBox onPress={favouriteHandler}>
          <Love color="#E3E5E5" fill={favourite ? 'red' : 'none'} />
        </TouchableBox>
      ),
    });
  });
  return (
    <Box flex={1} backgroundColor="secondaryBackground" paddingHorizontal="m">
      <Box paddingBottom="m">
        <Text variant="body" fontSize={14} lineHeight={20}>
          NY TIMES
        </Text>
      </Box>
      <Box>
        <ScrollView
          alwaysBounceVertical={false}
          showsVerticalScrollIndicator={false}>
          <Box>
            <Box paddingBottom="m">
              <Text variant="header" fontSize={26}>
                {data.title}
              </Text>
            </Box>
            <Box paddingBottom="m">
              <Text
                variant="PersonalizationRegular"
                fontSize={14}
                lineHeight={14}>
                {data.describe}
              </Text>
            </Box>
          </Box>
          <Box>
            <Box paddingBottom="m">
              <Image source={{uri: data.image}} style={styles.image} />
            </Box>
            <Box>
              <Text variant="TextButtonTitle" lineHeight={24}>
                {data.detailed}
              </Text>
            </Box>
          </Box>
        </ScrollView>
      </Box>
    </Box>
  );
};
export default DetailNews;
const styles = StyleSheet.create({
  image: {height: 200, width: '100%'},
});
