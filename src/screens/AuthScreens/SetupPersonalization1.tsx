import React, {useEffect, useState} from 'react';
import {ScrollView} from 'react-native';
import PrimaryButton from '../../components/PrimaryButton';
import {PracticeArea} from '../../constants/QuestionsArray';
import {Box, Text, TouchableBox} from '../../theme/theme';

interface Props {
  navigation: any;
}
const SetupPersonalizationOne = ({navigation}: Props) => {
  const [selected, setSelected] = useState<Array<object>>([]);
  useEffect(() => {
    navigation.setOptions({
      headerTitle: () => (
        <Box
          flexDirection="row"
          paddingVertical="xs"
          justifyContent="center"
          alignItems="center">
          <Box
            marginRight="xs"
            width={7}
            height={7}
            borderRadius="xxl"
            backgroundColor="pointerFill"
          />
          <Box
            marginRight="xs"
            width={7}
            height={7}
            borderRadius="xxl"
            backgroundColor="blueTitleText"
          />
          <Box
            marginRight="xs"
            width={7}
            height={7}
            borderRadius="xxl"
            backgroundColor="pointerFill"
          />
        </Box>
      ),
      headerTransparent: true,
      headerTitleAlign: 'center',
      headerRight: () => (
        <TouchableBox>
          <Text
            variant="interMedium"
            fontSize={18}
            lineHeight={18}
            color="buttonSetupGrey">
            Skip
          </Text>
        </TouchableBox>
      ),
    });
  });

  const checkItem = (data: object) => {
    if (data.name == 'None') {
      setSelected([]);
      return;
    }
    if (selected.includes(data)) {
      setSelected(current => current.filter(item => item.name !== data.name));
    } else {
      setSelected(prev => {
        return [...prev, data];
      });
    }
  };

  console.log(selected);
  return (
    <Box
      flex={1}
      backgroundColor="secondaryBackground"
      paddingHorizontal="m"
      justifyContent="space-between"
      paddingTop="xl">
      <Box flex={1} alignItems="center">
        <Box justifyContent="center" paddingTop="l" paddingHorizontal="xs">
          <Text variant="header">Practice Area</Text>
        </Box>
        <Box alignItems="flex-start">
          <Text
            variant="PersonalizationRegular"
            textAlign="center"
            color="buttonSetupGrey">
            So we can recommend exercises
          </Text>
        </Box>
      </Box>
      <Box flex={4}>
        <ScrollView alwaysBounceVertical={false}>
          {PracticeArea.map((item, index) => (
            <TouchableBox
              key={index}
              onPress={() => {
                item.isSelected = !item.isSelected;
                checkItem(item);
              }}
              borderRadius="xs"
              height={40}
              justifyContent="center"
              backgroundColor={
                selected.includes(item)
                  ? 'SelectedPracticeAreaBg'
                  : 'PracticAreaBg'
              }
              marginVertical="xs">
              <Text
                variant="TextButtonTitle"
                textAlign="center"
                color={
                  selected.includes(item) ? 'blueTitleText' : 'primaryTitleText'
                }>
                {item.name}
              </Text>
            </TouchableBox>
          ))}
        </ScrollView>
      </Box>
      <Box justifyContent="flex-end" flex={1}>
        <PrimaryButton
          title="Select"
          onPress={() => {
            navigation.navigate('SetupPersonalizationTwo', selected);
          }}
        />
      </Box>
    </Box>
  );
};
export default SetupPersonalizationOne;
