import React, {useState} from 'react';
import {Box, Text, TouchableBox} from '../../../theme/theme';
import Sun from '../../../assets/icons/Svg/sun.svg';
import {Image, ScrollView, StyleSheet} from 'react-native';
import {HomePageDetailsArray} from '../../../constants/HomePageDetailsArray';
import HomeTile from '../../../components/HomeTile';
import {currentDate} from '../../../utils/dates';

interface Props {
  navigation: any;
}
const HomeMain = ({}: Props) => {
  const [currentTopic, setCurrentTopic] = useState<number>(0);
  console.log();
  return (
    <Box flex={1} backgroundColor="secondaryBackground" paddingTop="m">
      <Box
        flex={1.5}
        paddingHorizontal="m"
        backgroundColor="secondaryBackground"
        justifyContent="space-between"
        alignItems="center"
        paddingBottom="m"
        flexDirection="row">
        <Box flex={3}>
          <Box justifyContent="center">
            <Text variant="header">Good Morning</Text>
          </Box>
          <Box paddingTop="s">
            <Text variant="TextButtonTitle">{currentDate()}</Text>
          </Box>
        </Box>
        <Box flex={1} alignItems="flex-end" paddingTop="s">
          <Box>
            <Sun width={24} height={24} fill="none" />
          </Box>
          <Box justifyContent="center" paddingTop="xs">
            <Text variant="buttonTitle" fontSize={14} lineHeight={14}>
              28°C
            </Text>
          </Box>
        </Box>
      </Box>
      <Box paddingLeft="xs" justifyContent="center">
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          {HomePageDetailsArray.map((item, index) => (
            <TouchableBox key={index} onPress={() => setCurrentTopic(index)}>
              <Box
                backgroundColor="SelectedPracticeAreaBg"
                marginHorizontal="xxs"
                borderRadius="l"
                paddingHorizontal="s"
                paddingVertical="xs">
                <Text
                  variant="TextButtonTitle"
                  color={
                    currentTopic === index
                      ? 'blueTitleText'
                      : 'primaryTitleText'
                  }>
                  {item.topic}
                </Text>
              </Box>
            </TouchableBox>
          ))}
        </ScrollView>
      </Box>
      <Box paddingHorizontal="m" flex={6} paddingBottom="l">
        <ScrollView showsVerticalScrollIndicator={false}>
          <Box paddingTop="s" height={'29%'} paddingBottom="l">
            <Box justifyContent="center" alignItems="center" height={'100%'}>
              <Image
                source={HomePageDetailsArray[currentTopic].content[0].image}
                style={styles.Image}
              />
            </Box>
            <Box paddingVertical="xs">
              <Text variant="buttonTitle" lineHeight={24}>
                {HomePageDetailsArray[currentTopic].content[0].title}
              </Text>
              <Text
                variant="TextButtonTitle"
                color="buttonSetupGrey"
                paddingVertical="xs"
                fontSize={12}>
                {HomePageDetailsArray[currentTopic].content[0].describe}
              </Text>
            </Box>
          </Box>
          <Box marginTop="xxl">
            {HomePageDetailsArray[currentTopic].content.map((item, index) => (
              <HomeTile
                key={index}
                title={item.title}
                describe={item.describe}
                image={item.image}
              />
            ))}
          </Box>
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
