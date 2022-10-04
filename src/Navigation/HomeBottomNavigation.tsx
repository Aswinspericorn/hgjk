import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Home, Love, Person, Search} from '../assets/icons/Svg/Icons';
import HomeMain from '../screens/HomeScreens/HomeMain';
import FavouriteNews from '../screens/HomeScreens/FavouriteNews';
import SearchStackNavigation from './SearchStackNavigation';
import MyDetails from '../screens/HomeScreens/MyProfile';
const Tab = createBottomTabNavigator();

export const HomeBottomNaviation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
      }}>
      <Tab.Screen
        name="Home"
        component={HomeMain}
        options={{
          headerShown: false,
          tabBarIcon: ({color}) => <Home color={color} />,
        }}
      />
      <Tab.Screen
        name="favouriteMain"
        component={FavouriteNews}
        options={{
          headerShown: false,
          tabBarIcon: ({color}) => <Love color={color} />,
        }}
      />
      <Tab.Screen
        name="Home4"
        component={SearchStackNavigation}
        options={{
          headerShown: false,
          tabBarIcon: ({color}) => <Search color={color} />,
        }}
      />
      <Tab.Screen
        name="MyDetails"
        component={MyDetails}
        options={{
          headerTitle: 'My Details',
          headerTitleAlign: 'center',
          headerTitleStyle: {fontFamily: 'inter-Regular', fontSize: 18},
          tabBarIcon: ({color}) => <Person color={color} />,
        }}
      />
    </Tab.Navigator>
  );
};
