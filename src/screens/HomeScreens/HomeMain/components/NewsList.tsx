import React, {useEffect, useState} from 'react';
import {Image, StyleSheet} from 'react-native';
import HomeTile from '../../../../components/HomeTile';
import {Box, Text, TouchableBox} from '../../../../theme/theme';
import {useNavigation} from '@react-navigation/native';
import {getNews} from '../../../../helper/Firebase.helper';
import {useDispatch, useSelector} from 'react-redux';
import {changeIsDataChanged} from '../../../../store/redux/IsDataChanged';

interface Props {
  currentTopic: number;
}
interface ObjectProps {
  title: string;
  image: string;
  description: string;
  details: string;
}
const NewsList = ({currentTopic}: Props) => {
  const [news, setNews] = useState<{content: [ObjectProps]}>({
    content: [
      {
        title: '',
        image:
          'https://static.vecteezy.com/system/resources/previews/004/639/580/non_2x/waiting-loading-icon-illustration-isolated-on-white-background-vector.jpg',
        description: '',
        details: '',
      },
    ],
  });
  const userData = useSelector((state: any) => state?.UserData.userData);
  const navigation = useNavigation();
  const dispatch = useDispatch();

  useEffect(() => {
    const readNews = async () => {
      let reslt = [];
      if (userData.language === 'Malayalam') {
        reslt = await getNews('RwPRINrn00h9EhbQiMLV');
      }
      if (userData.language === 'English') {
        reslt = await getNews('F4ydoNptIf5uzsJlxRn8');
      }
      dispatch(changeIsDataChanged());
      setNews(reslt);
    };
    readNews();
  }, [dispatch, userData]);
  return (
    <Box paddingHorizontal="s">
      <TouchableBox
        onPress={() => {
          navigation.navigate('Homestack', {
            screen: 'DetailNews',
            params: news[currentTopic]?.content[0],
          });
        }}>
        <Box paddingTop="xs" paddingBottom="s">
          <Box justifyContent="center" alignItems="center">
            <Image
              source={{uri: news[currentTopic]?.content[0]?.image}}
              style={styles.Image}
            />
          </Box>
          <Box paddingVertical="xs">
            <Text variant="buttonTitle" lineHeight={24}>
              {news[currentTopic]?.content[0].title}
            </Text>
            <Text
              variant="TextButtonTitle"
              color="buttonSetupGrey"
              paddingVertical="xs"
              fontSize={12}>
              {news[currentTopic]?.content[0].describe}
            </Text>
          </Box>
        </Box>
      </TouchableBox>
      <Box>
        {news[currentTopic]?.content.map((item, index) => (
          <TouchableBox
            key={index}
            onPress={() => {
              navigation.navigate('Homestack', {
                screen: 'DetailNews',
                params: news[currentTopic]?.content[index],
              });
            }}>
            <HomeTile
              title={item.title}
              describe={item.describe}
              image={item.image}
            />
          </TouchableBox>
        ))}
      </Box>
    </Box>
  );
};
export default NewsList;
const styles = StyleSheet.create({
  Image: {
    width: '100%',
    height: 200,
  },
});
