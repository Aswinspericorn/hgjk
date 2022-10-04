import React, {useEffect, useState} from 'react';
import {Box} from '../../../../theme/theme';
import {ScrollView, StyleSheet} from 'react-native';
import Banner from './Banner';
import TopicScroll from './TopicsScroll';
import NewsList from './NewsList';
import {useDispatch, useSelector} from 'react-redux';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import {changeUserData} from '../../../../store/redux/UserData';
interface Props {
  navigation: any;
}
const HomeMain = ({}: Props) => {
  const [currentTopic, setCurrentTopic] = useState<number>(0);
  const dispatch = useDispatch();
  const IsFavouriteChanged = useSelector(
    (state: any) => state?.IsDataChanged.isChanged,
  );
  useEffect(() => {
    const getFavouritesHandler = () => {
      let key = auth().currentUser?.uid;
      const userRef = firestore()
        .collection('user')
        .doc(key)
        .get()
        .then(documentSnapshot => {
          const data = documentSnapshot.data();
          dispatch(changeUserData(data));
        })
        .then(() => {});
      return userRef;
    };
    getFavouritesHandler();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [IsFavouriteChanged]);

  return (
    <Box flex={1} backgroundColor="secondaryBackground" paddingTop="xs">
      <ScrollView
        style={styles.screen}
        showsVerticalScrollIndicator={false}
        stickyHeaderIndices={[1]}>
        <Banner />
        <TopicScroll
          setCurrentTopic={setCurrentTopic}
          currentTopic={currentTopic}
        />
        <NewsList currentTopic={currentTopic} />
      </ScrollView>
    </Box>
  );
};
export default HomeMain;
const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
