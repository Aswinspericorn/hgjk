import React, {useState} from 'react';
import {Box, Text, TouchableBox} from '../../theme/theme';
import Sun from '../../assets/icons/Svg/sun.svg';
import {Image, ScrollView, StyleSheet} from 'react-native';
import {HomePageDetailsArray} from '../../constants/HomePageDetailsArray';
import HomeTile from '../../components/HomeTile';

interface Props {
  navigation: any;
}
const HomeMain = ({}: Props) => {
  const [currentTopic, setCurrentTopic] = useState<number>(0);
  return (
    <Box flex={1} backgroundColor="secondaryBackground" paddingTop="l">
      <Box
        paddingHorizontal="m"
        backgroundColor="secondaryBackground"
        justifyContent="space-between"
        alignItems="baseline"
        paddingTop="xs"
        flexDirection="row">
        <Box>
          <Box justifyContent="center">
            <Text variant="header">Good Morning.</Text>
          </Box>
          <Box paddingTop="s">
            <Text variant="TextButtonTitle">Monday, January 25, 2021</Text>
          </Box>
        </Box>
        <Box justifyContent="center" alignItems="center">
          <Box>
            <Sun width={24} height={24} fill="none" />
          </Box>
          <Box justifyContent="center">
            <Text variant="buttonTitle" fontSize={14} lineHeight={14}>
              28°C
            </Text>
          </Box>
        </Box>
      </Box>
      <Box paddingTop="m" paddingLeft="xs">
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          {HomePageDetailsArray.map((item, index) => (
            <Box
              key={index}
              backgroundColor="SelectedPracticeAreaBg"
              marginHorizontal="xxs"
              borderRadius="l"
              paddingHorizontal="s"
              paddingVertical="xs">
              <TouchableBox onPress={() => setCurrentTopic(index)}>
                <Text
                  variant="TextButtonTitle"
                  color={
                    currentTopic === index
                      ? 'blueTitleText'
                      : 'primaryTitleText'
                  }>
                  {item.topic}
                </Text>
              </TouchableBox>
            </Box>
          ))}
        </ScrollView>
      </Box>
      <Box paddingHorizontal="m" paddingVertical="m" flex={4}>
        <Box justifyContent="center" alignItems="center" height={'85%'}>
          <Image
            source={HomePageDetailsArray[currentTopic].content[0].image}
            style={styles.Image}
          />
        </Box>
        <Box paddingVertical="xs">
          <Text variant="buttonTitle" lineHeight={24}>
            {HomePageDetailsArray[currentTopic].content[0].title}
          </Text>
          <Text variant="TextButtonTitle" color="buttonSetupGrey" fontSize={12}>
            {HomePageDetailsArray[currentTopic].content[0].describe}
          </Text>
        </Box>
      </Box>
      <Box paddingHorizontal="m" flex={3} paddingTop="s">
        <ScrollView showsVerticalScrollIndicator={false}>
          {HomePageDetailsArray[currentTopic].content.map((item, index) => (
            <HomeTile
              key={index}
              title={item.title}
              describe={item.describe}
              image={item.image}
            />
          ))}
        </ScrollView>
      </Box>
    </Box>
  );
};
export default HomeMain;
const styles = StyleSheet.create({
  Image: {
    width: '100%',
    height: '100%',
  },
});
