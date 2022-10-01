import React from 'react';
import {Pressable} from 'react-native';
import PrimaryButton from '../../../../components/PrimaryButton';
import {Box, Text} from '../../../../theme/theme';

interface Props {
  isLoading: boolean;
  onPress: () => void;
  title: string;
}
const ButtonContainer = ({onPress, isLoading, title}: Props) => {
  return (
    <Box flex={3} justifyContent="flex-end">
      <Box paddingBottom="s">
        <Box paddingHorizontal="xs" alignItems="flex-start">
          <Box flexDirection="row">
            <Text variant="TextButtonTitle" fontSize={12}>
              By continuing, you agree to our {''}
            </Text>
            <Pressable onPress={() => {}}>
              <Text
                variant="TextButtonTitle"
                fontSize={12}
                color="blueTitleText">
                Terms of Service {''}
              </Text>
            </Pressable>
            <Text variant="TextButtonTitle" fontSize={12}>
              and {''}
            </Text>
          </Box>
          <Pressable onPress={() => {}}>
            <Text
              textAlign="center"
              variant="TextButtonTitle"
              fontSize={12}
              color="blueTitleText">
              Privacy Policy.
            </Text>
          </Pressable>
        </Box>
      </Box>
      <Box paddingBottom="m">
        <PrimaryButton disabled={isLoading} title={title} onPress={onPress} />
      </Box>
    </Box>
  );
};
export default ButtonContainer;
