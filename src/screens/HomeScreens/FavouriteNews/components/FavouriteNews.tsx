import React, {useState} from 'react';
import HomeTile from '../../../../components/HomeTile';
import {Box, Text, TouchableBox} from '../../../../theme/theme';

import NoData from '../../../../components/NoData';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';

const FavouriteNews = () => {
  const user = useSelector((state: any) => state?.UserData.userData);
  const favourites = user?.favourites;
  const navigation = useNavigation();

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
          lineHeight={18}>
          Saved Items
        </Text>
      </Box>
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
    </Box>
  );
};
export default FavouriteNews;
// const styles = StyleSheet.create({
//   Image: {
//     width: '100%',
//     height: 200,
//   },
// });
