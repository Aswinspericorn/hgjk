import React, {useEffect, useState} from 'react';
import HomeTile from '../../../../components/HomeTile';
import {Box, Text, TouchableBox} from '../../../../theme/theme';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import NoData from '../../../../components/NoData';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {changeUserData} from '../../../../store/redux/UserData';

const FavouriteNews = () => {
  const [news, setNews] = useState<
    Array<{image: string; describe: string; title: string}>
  >([
    {
      image:
        'https://static.vecteezy.com/system/resources/previews/004/639/580/non_2x/waiting-loading-icon-illustration-isolated-on-white-background-vector.jpg',
      describe: '',
      title: '',
    },
  ]);
  const navigation = useNavigation();
  const IsFavouriteChanged = useSelector(
    (state: any) => state?.IsDataChanged.isChanged,
  );
  const dispatch = useDispatch();
  useEffect(() => {
    const getFavouritesHandler = () => {
      let key = auth().currentUser?.uid;
      function getFavourites(documentSnapshot: any) {
        return documentSnapshot.get('favourites');
      }
      const userRef = firestore()
        .collection('user')
        .doc(key)
        .get()
        .then(documentSnapshot => {
          const data = documentSnapshot.data();
          dispatch(changeUserData(data));
          return getFavourites(documentSnapshot);
        })
        .then(data => {
          setNews(data);
        });
      return userRef;
    };
    getFavouritesHandler();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [IsFavouriteChanged]);
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
        {news?.length > 0 ? (
          news?.map(
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
