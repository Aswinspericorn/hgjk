import React, {Dispatch, SetStateAction} from 'react';
import {ScrollView} from 'react-native';
import {HomePageDetailsArray} from '../../../../constants/HomePageDetailsArray';
import {Box, Text, TouchableBox} from '../../../../theme/theme';

interface Props {
  setCurrentTopic: Dispatch<SetStateAction<number>>;
  currentTopic: number;
}
const TopicScroll = ({setCurrentTopic, currentTopic}: Props) => {
  return (
    <Box
      justifyContent="center"
      backgroundColor="secondaryBackground"
      paddingTop="m"
      borderTopColor="pointerFill"
      borderTopWidth={1}
      paddingBottom="xs">
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {HomePageDetailsArray.map((item: {topic: string}, index: number) => (
          <TouchableBox key={index} onPress={() => setCurrentTopic(index)}>
            <Box
              backgroundColor="SelectedPracticeAreaBg"
              marginHorizontal="xxs"
              borderRadius="l"
              paddingHorizontal="m"
              paddingVertical="xss">
              <Text
                variant="TextButtonTitle"
                color={
                  currentTopic === index ? 'blueTitleText' : 'primaryTitleText'
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
