import React from 'react';
import LinearGradient from 'react-native-linear-gradient';

import {Questions} from '../../constants/QuestionsArray';
import {Box, Text, TouchableBox} from '../../theme/theme';

interface Props {
  navigation: any;
}
const SetupPersonalizationTwo = ({navigation}: Props) => {
  return (
    <Box
      flex={1}
      backgroundColor="secondaryBackground"
      justifyContent="space-between"
      paddingTop="xl">
      <Box flex={2} paddingTop="xs" paddingHorizontal="m">
        <Box
          width={'90%'}
          height={4}
          backgroundColor="pointerFill"
          borderRadius="s">
          <Box
            width={'10%'}
            height={'100%'}
            backgroundColor="blueTitleText"
            borderRadius="s"
          />
        </Box>
        <Box paddingTop="l">
          <Text variant="header" textAlign="left">
            Tell us your goal
          </Text>
        </Box>
        <Box alignItems="flex-start">
          <Text variant="PersonalizationRegular" textAlign="left">
            We will recommend diets and exercises {'\n'}that suit you
          </Text>
        </Box>
        <Box flex={2} paddingTop="m">
          {Questions.map((item, index) => (
            <Box key={index}>
              {item?.options.map((opt, indx) => (
                <TouchableBox
                  key={indx}
                  onPress={() => {}}
                  borderRadius="xl"
                  height={48}
                  justifyContent="center"
                  backgroundColor="PracticAreaBg"
                  marginVertical="xs">
                  <Text
                    variant="TextButtonTitle"
                    textAlign="center"
                    color="primaryTitleText">
                    {opt}
                  </Text>
                </TouchableBox>
              ))}
            </Box>
          ))}
        </Box>
      </Box>
      <Box justifyContent="flex-end" flex={2}>
        <LinearGradient
          start={{x: 1, y: 1}}
          end={{x: 0.6, y: 0}}
          colors={['#99b8ee', '#d4d9f4', '#d6b9e3', '#fbf4fa', '#fff']}
          style={{flex: 1}}
        />
      </Box>
    </Box>
  );
};
export default SetupPersonalizationTwo;
