import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import DetailNews from '../screens/HomeScreens/DetailNews';
import {HomeBottomNaviation} from './HomeBottomNavigation';
import UserDetails from '../screens/HomeScreens/UserDetails';
import Map from '../components/Map/Map';
import {HomeNaviationParamList} from '../Types/Navigation';
const Stack = createNativeStackNavigator<HomeNaviationParamList>();

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
      <Stack.Screen
        name="UserDetails"
        component={UserDetails}
        options={{
          title: '',
          headerTransparent: true,
        }}
      />
      <Stack.Screen
        name="Map"
        component={Map}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};
export default HomeNativeStackNavigation;
