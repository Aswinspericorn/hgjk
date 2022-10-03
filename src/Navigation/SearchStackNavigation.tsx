import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import DetailNews from '../screens/HomeScreens/DetailNews.tsx/components/DetailNews';
import {HomeBottomNaviation} from './HomeBottomNavigation';
import SearchUser from '../screens/HomeScreens/SearchUser/components/SeachUser';
import UserDetails from '../screens/HomeScreens/UserDetails/components/UserDetails';
const Stack = createNativeStackNavigator();

const SearchStackNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="SeachHome"
        component={SearchUser}
        options={{
          headerShown: false,
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
    </Stack.Navigator>
  );
};
export default SearchStackNavigation;
