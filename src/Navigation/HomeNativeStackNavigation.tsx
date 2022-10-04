import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import DetailNews from '../screens/HomeScreens/DetailNews';
import {HomeBottomNaviation} from './HomeBottomNavigation';
const Stack = createNativeStackNavigator();

const HomeNativeStackNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Homemain"
        component={HomeBottomNaviation}
        options={{
          headerShown: false,
          headerTransparent: true,
        }}
      />
      <Stack.Screen
        name="DetailNews"
        component={DetailNews}
        options={{
          title: '',
          headerTransparent: true,
        }}
      />
    </Stack.Navigator>
  );
};
export default HomeNativeStackNavigation;
