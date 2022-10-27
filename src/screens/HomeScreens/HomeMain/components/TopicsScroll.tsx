import React, {Dispatch, SetStateAction} from 'react';
import {NativeModules, ScrollView} from 'react-native';
import {HomePageDetailsArrayEn} from '../../../../constants/HomePageDetailsArrayEn';
import {Box, Text, TouchableBox} from '../../../../theme/theme';
import {HomePageDetailsArrayMal} from '../../../../constants/HomePageDetailsArrayMal';
import {useSelector} from 'react-redux';

interface Props {
  setCurrentTopic: Dispatch<SetStateAction<number>>;
  currentTopic: number;
}

const TopicScroll = ({setCurrentTopic, currentTopic}: Props) => {
  const userData = useSelector(
    (state: any) => state?.AppReducer.UserData.userData,
  );
  let array = HomePageDetailsArrayEn;
  if (userData?.language === 'Malayalam') {
    array = HomePageDetailsArrayMal;
  }

  // StatusBar.setBackgroundColor(darkMode ? 'black' : '#fff');
  const {StatusBarManager} = NativeModules;
  return (
    <Box
      justifyContent="center"
      backgroundColor="secondaryBackground"
      paddingTop="m"
      borderTopColor="pointerFill"
      borderTopWidth={1}
      style={{paddingTop: StatusBarManager.HEIGHT - 8}}
      paddingBottom="xs">
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {array.map((item: {topic: string}, index: number) => (
          <TouchableBox key={index} onPress={() => setCurrentTopic(index)}>
            <Box
              marginLeft={index === 0 ? 's' : 'xxs'}
              marginRight={index === array.length - 1 ? 's' : 'xxs'}
              backgroundColor="SelectedPracticeAreaBg"
              borderRadius="l"
              paddingHorizontal="m"
              paddingVertical="xss">
              <Text
                lineHeight={23}
                variant="TextButtonTitle"
                color={
                  currentTopic === index ? 'blueTitleText' : 'scrollTextBlack'
                }>
                {item.topic}
              </Text>
            </Box>
          </TouchableBox>
        ))}
      </ScrollView>
    </Box>
  );
};
export default TopicScroll;
