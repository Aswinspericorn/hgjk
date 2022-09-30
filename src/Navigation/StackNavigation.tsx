import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeNativeStackNavigation from './HomeNativeStackNavigation';

const Stack = createNativeStackNavigator();

const StackNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeNativeStackNavigation}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};
export default StackNavigation;
