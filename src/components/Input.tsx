import React from 'react';
import {StyleSheet} from 'react-native';
import {Box, Text, TextInput} from '../theme/theme';
interface Props {
  label: string;
  value: string;
  name: string;
  isEditable?: boolean;
  onChangeHandler?: (value: string | object, name: string) => void;
}
const Input = ({label, value, isEditable, onChangeHandler, name}: Props) => {
  return (
    <Box paddingTop="s" paddingHorizontal="s">
      <Box
        flexDirection="row"
        justifyContent="space-between"
        height={48}
        borderRadius="xs"
        alignItems="center">
        <Box alignItems="center">
          <Box>
            <Text variant="TextButtonTitle" textAlign="left">
              {label}
            </Text>
          </Box>
        </Box>
        <Box flex={3}>
          <TextInput
            paddingHorizontal="xs"
            editable={isEditable}
            value={value}
            textAlign="right"
            placeholderTextColor="#6C7072"
            style={styles.width}
            variant="TextButtonTitle"
            placeholder={`Enter ${label}`}
            onChangeText={val => {
              onChangeHandler(val, name);
            }}
          />
        </Box>
      </Box>
    </Box>
  );
};
export default Input;
const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  width: {
    width: '100%',
  },
});
