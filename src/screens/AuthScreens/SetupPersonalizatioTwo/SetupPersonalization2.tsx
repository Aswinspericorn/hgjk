import React, {useState} from 'react';
import {Questions} from '../../../constants/QuestionsArray';
import {Box, Text} from '../../../theme/theme';
import GradientBottom from './components/GradientBottom';
import InputTextField from './components/InputTextField';
import OptionalQuestion from './components/OptinalQuestions';
import UserImagePicker from './components/UserImagePicker';

interface Props {
  navigation: any;
  route: any;
}
const SetupPersonalizationTwo = ({navigation, route}: Props) => {
  const [selected, setSelected] = useState<string>('');
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  const [selectedAnswers, setSelectedAnswers] = useState<{
    fname: string;
    lname: string;
  }>({
    fname: '',
    lname: '',
  });

  const questionHandler = (opt: string, question: string) => {
    const tempData = currentQuestion + 1;
    setCurrentQuestion(tempData);
    setSelectedAnswers(prev => {
      return {
        ...prev,
        [question]: opt,
      };
    });
    if (tempData > Questions.length - 1) {
      navigation.navigate('AddEmail', {
        PArea: route.params,
        ...selectedAnswers,
        language: opt,
        name: selectedAnswers?.fname + ' ' + selectedAnswers?.lname,
      });
      setCurrentQuestion(0);
    }
    setSelected(opt);
  };
  const desideField = () => {
    let x = Questions[currentQuestion].type;
    switch (x) {
      case 'fname':
        return (
          <InputTextField
            type="fname"
            label="first name"
            onPress={questionHandler}
          />
        );
      case 'lname':
        return (
          <InputTextField
            type="lname"
            label="last name"
            onPress={questionHandler}
          />
        );
      case 'age':
        return (
          <InputTextField type="age" label="age" onPress={questionHandler} />
        );
      case 'photo':
        return (
          <UserImagePicker
            onPress={questionHandler}
            name={selectedAnswers?.fname}
          />
        );
    }
  };

  return (
    <Box
      flex={1}
      backgroundColor="secondaryBackground"
      justifyContent="space-between"
      paddingTop="xl">
      <Box flex={3.5} paddingTop="xs" paddingHorizontal="m">
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
        <Box alignItems="flex-start" paddingTop="l">
          <Text variant="subHeader" textAlign="left">
            {Questions[currentQuestion]?.question}
          </Text>
        </Box>
        <Box flex={5}>
          {Questions[currentQuestion].options ? (
            <OptionalQuestion
              selected={selected}
              questionHandler={questionHandler}
              currentQuestion={currentQuestion}
            />
          ) : (
            <Box flex={1}>{desideField()}</Box>
          )}
        </Box>
      </Box>
      <GradientBottom />
    </Box>
  );
};
export default SetupPersonalizationTwo;
