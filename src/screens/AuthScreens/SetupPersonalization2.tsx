import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import {Questions} from '../../constants/QuestionsArray';
import {Box, Text, TouchableBox} from '../../theme/theme';

interface Props {
  navigation: any;
  route: any;
}
const SetupPersonalizationTwo = ({navigation, route}: Props) => {
  const [selected, setSelected] = useState<string>('');
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Array<object>>([]);

  const questionHandler = (opt: string, question: string) => {
    const tempData = currentQuestion + 1;
    setCurrentQuestion(tempData);
    if (tempData > Questions.length - 1) {
      navigation.navigate('AddEmail', {
        PArea: route.params,
        QA: selectedAnswers,
      });
      setCurrentQuestion(0);
    }
    setSelectedAnswers(prev => [...prev, {question: question, answer: opt}]);
    setSelected(opt);
  };
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
            width={`${((currentQuestion + 1) / Questions.length) * 100}%`}
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
            {Questions[currentQuestion]?.question}
          </Text>
        </Box>
        <Box flex={2} paddingTop="m">
          {Questions[currentQuestion]?.options.map((opt, indx) => (
            <TouchableBox
              key={indx}
              onPress={() =>
                questionHandler(opt, Questions[currentQuestion].question)
              }
              borderRadius="xl"
              height={48}
              justifyContent="center"
              backgroundColor={
                opt === selected ? 'PracticAreaBg' : 'secondaryBackground'
              }
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
      </Box>
      <Box justifyContent="flex-end" flex={2}>
        <LinearGradient
          start={{x: 1, y: 1}}
          end={{x: 0.6, y: 0}}
          colors={['#99b8ee', '#d4d9f4', '#d6b9e3', '#fbf4fa', '#fff']}
          style={styles.screen}
        />
      </Box>
    </Box>
  );
};
export default SetupPersonalizationTwo;
const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
