import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SearchUser from '../screens/HomeScreens/SearchUser';
import UserDetails from '../screens/HomeScreens/UserDetails';
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
