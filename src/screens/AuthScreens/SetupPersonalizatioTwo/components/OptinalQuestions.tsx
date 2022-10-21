import React from 'react';
import {Text, TouchableBox} from '../../../../theme/theme';

interface Props {
  currentQuestion: number;
  questionHandler: (a: string, b: string) => void;
  selected: string;
  Questions: Array<object>;
}
const OptionalQuestion = ({
  currentQuestion,
  questionHandler,
  Questions,
  selected,
}: Props) => {
  return (
    <>
      {Questions[currentQuestion]?.options.map((opt: string, indx: number) => (
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
    </>
  );
};
export default OptionalQuestion;
