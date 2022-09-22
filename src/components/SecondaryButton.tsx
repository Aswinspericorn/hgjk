import React from 'react';
import {Text, TouchableBox} from '../theme/theme';

type Props = {
  onPress: () => void;
  title: string;
  width?: string;
  disabled?: boolean;
};
const SecondaryButton = ({
  onPress,
  title,
  width = '100%',
  disabled = false,
}: Props) => {
  return (
    <TouchableBox
      disabled={disabled}
      justifyContent="center"
      backgroundColor="secondaryBackground"
      borderRadius="xl"
      paddingVertical="s"
      marginBottom="s"
      width={width}
      opacity={disabled ? 0.5 : 1}
      onPress={onPress}>
      <Text variant="buttonTitle" textAlign="center" color="primaryTitleText">
        {title}
      </Text>
    </TouchableBox>
  );
};
export default SecondaryButton;
