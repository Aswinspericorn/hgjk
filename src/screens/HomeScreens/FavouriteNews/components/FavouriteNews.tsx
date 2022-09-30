import React, {useEffect, useState} from 'react';
import HomeTile from '../../../../components/HomeTile';
import {Box} from '../../../../theme/theme';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';

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

  useEffect(() => {
    const checkIsNewUser = () => {
      let key = auth().currentUser?.uid;
      function getFavourites(documentSnapshot: any) {
        return documentSnapshot.get('favourites');
      }
      const userRef = firestore()
        .collection('user')
        .doc(key)
        .get()
        .then(documentSnapshot => getFavourites(documentSnapshot))
        .then(data => {
          setNews(data);
        });
      return userRef;
    };
    checkIsNewUser();
  }, [news]);
  return (
    <Box
      paddingHorizontal="m"
      flex={1}
      paddingTop="l"
      backgroundColor="secondaryBackground">
      {news.map(
        (
          item: {title: string; describe: string; image: string},
          index: number,
        ) => (
          <HomeTile
            key={index}
            title={item?.title}
            describe={item.describe}
            image={item.image}
          />
        ),
      )}
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
