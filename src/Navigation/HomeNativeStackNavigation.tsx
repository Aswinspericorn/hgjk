import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import DetailNews from '../screens/HomeScreens/DetailNews.tsx/components/DetailNews';
import HomeMain from '../screens/HomeScreens/HomeMain/components/HomeMain';
const Stack = createNativeStackNavigator();

const HomeNativeStackNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Homemain"
        component={HomeMain}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="DetailNews"
        component={DetailNews}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};
export default HomeNativeStackNavigation;
