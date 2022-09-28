import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeBottomNaviation} from './HomeBottomNavigation';

const Stack = createNativeStackNavigator();

const StackNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomeBottom"
        component={HomeBottomNaviation}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};
export default StackNavigation;
