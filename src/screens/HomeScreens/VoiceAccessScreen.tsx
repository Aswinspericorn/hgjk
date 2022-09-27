import React from 'react';
import {Button} from 'react-native';
import {useDispatch} from 'react-redux';
import {changeAuthStatus} from '../../store/redux/AuthStatus';
import {Box, Text} from '../../theme/theme';
import auth from '@react-native-firebase/auth';

export const VoiceAccessScreen = () => {
  const dispatch = useDispatch();
  return (
    <>
      <Box>
        <Text variant="header">Welcome</Text>
        <Button
          title="Logout"
          onPress={() => {
            auth().signOut()
            dispatch(changeAuthStatus(false));
          }}
        />
      </Box>
    </>
  );
};
