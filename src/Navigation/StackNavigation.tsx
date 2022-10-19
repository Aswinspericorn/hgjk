import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeNativeStackNavigation from './HomeNativeStackNavigation';
import {HomeStackParamList} from '../Types/Navigation';

const Stack = createNativeStackNavigator<HomeStackParamList>();

const StackNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Homestack"
        component={HomeNativeStackNavigation}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};
export default StackNavigation;
