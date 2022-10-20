import React, {useState} from 'react';
import {KeyboardAvoidingView, StyleSheet} from 'react-native';
import PrimaryButton from '../../../../components/PrimaryButton';
import {Box, TextInput} from '../../../../theme/theme';
import {useTranslation} from 'react-i18next';

interface Props {
  onPress: (type: string, name: string) => void;
  type: string;
  label: string;
}
const InputTextField = ({onPress, type, label}: Props) => {
  const [input, setInput] = useState<string>('');
  const [error, setError] = useState<boolean>(false);

  const {t} = useTranslation();

  return (
    <KeyboardAvoidingView style={styles.screen} behavior="padding">
      <Box flex={1} height={200} paddingTop="m">
        <Box
          flexDirection="row"
          borderWidth={1}
          borderColor={error ? 'errorColor' : 'pointerFill'}
          height={48}
          borderRadius="xs"
          marginVertical="s"
          alignItems="center">
          <TextInput
            value={input}
            keyboardType={type === 'age' ? 'number-pad' : 'email-address'}
            placeholderTextColor="#6C7072"
            style={styles.width}
            paddingHorizontal="s"
            variant="TextButtonTitle"
            placeholder={label}
            onChangeText={(value: string) => {
              setError(false);
              setInput(value);
            }}
          />
        </Box>
        <Box>
          <PrimaryButton
            title={t('SetupPersonalizTwo.Continue')}
            onPress={() => {
              if (!input) {
                setError(true);
                return;
              }
              onPress(input, type);
              setInput('');
            }}
          />
        </Box>
      </Box>
    </KeyboardAvoidingView>
  );
};
export default InputTextField;
const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  width: {
    width: '100%',
  },
});
