import React, {useEffect, useState} from 'react';
import {Box} from '../../../../theme/theme';
import {NativeModules, ScrollView, StyleSheet} from 'react-native';
import Banner from './Banner';
import TopicScroll from './TopicsScroll';
import NewsList from './NewsList';
import {useDispatch, useSelector} from 'react-redux';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import {useTranslation} from 'react-i18next';
import {changeUserData} from '../../../../store/redux/actions/UserData';
// import I18n from 'react-native-i18n';

const HomeMain = () => {
  const [currentTopic, setCurrentTopic] = useState<number>(0);
  const dispatch = useDispatch();
  const IsFavouriteChanged = useSelector(
    (state: any) => state?.AppReducer.IsDataChanged.isChanged,
  );
  const RNI18n = NativeModules.I18nManager.localeIdentifier;
  const userData = useSelector(
    (state: any) => state?.AppReducer.UserData.userData,
  );

  const {i18n} = useTranslation();
  useEffect(() => {
    const changeLanguage = () => {
      if (userData?.language === 'English') {
        i18n.changeLanguage('en');
      } else if (userData?.language === 'Malayalam') {
        i18n.changeLanguage('ml');
      } else {
        i18n.changeLanguage(RNI18n.split('_')[0]);
      }
    };
    changeLanguage();
  }, [RNI18n, i18n, userData]);

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
