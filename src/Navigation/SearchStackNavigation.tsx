import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SearchUser from '../screens/HomeScreens/SearchUser';
import {SearchStackNavigationParamList} from '../Types/Navigation';
const Stack = createNativeStackNavigator<SearchStackNavigationParamList>();

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
    </Stack.Navigator>
  );
};
export default SearchStackNavigation;
