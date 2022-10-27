import React, {useEffect, useState} from 'react';
import HomeTile from '../../../../components/HomeTile';
import {Box, Text, TouchableBox} from '../../../../theme/theme';

import NoData from '../../../../components/NoData';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import {HomeNaviationParamList} from '../../../../Types/Navigation';
import {ScrollView, StyleSheet} from 'react-native';
import {useTranslation} from 'react-i18next';
import {getIsDataChangedStatus} from '../../../../store/redux/selectors/AllSelector';
import {getSingleUserDetails} from '../../../../helper/Firebase.helper';

const FavouriteNews = () => {
  // const user = useSelector(getUserData);
  const [favourites, setFavourites] = useState<
    Array<{title: string; describe: string; image: string}>
  >([]);
  const IsFavouriteChanged = useSelector(getIsDataChangedStatus);

  useEffect(() => {
    const getData = async () => {
      const user = await getSingleUserDetails();
      setFavourites(user?.favourites);
    };
    getData();
  }, [IsFavouriteChanged]);
  const navigation = useNavigation<HomeNaviationParamList>();
  const {t} = useTranslation();
  return (
    <Box
      paddingHorizontal="m"
      flex={1}
      paddingTop="l"
      backgroundColor="secondaryBackground">
      <Box paddingTop="m">
        <Text
          variant="TextButtonTitle"
          textAlign="center"
          fontSize={18}
          lineHeight={22}>
          {t('Favourites.SavedItems')}
        </Text>
      </Box>
      <ScrollView
        alwaysBounceVertical={false}
        style={styles.screen}
        showsVerticalScrollIndicator={false}>
        <Box paddingTop="m" flex={1}>
          {favourites?.length > 0 ? (
            favourites?.map(
              (
                item: {title: string; describe: string; image: string},
                index: number,
              ) => (
                <TouchableBox
                  key={index}
                  onPress={() => {
                    navigation.navigate('Homestack', {
                      screen: 'DetailNews',
                      params: item,
                    });
                  }}>
                  <HomeTile
                    title={item?.title}
                    describe={item.describe}
                    image={item.image}
                  />
                </TouchableBox>
              ),
            )
          ) : (
            <NoData />
          )}
        </Box>
      </ScrollView>
    </Box>
  );
};
export default FavouriteNews;
const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
