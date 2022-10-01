import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Bell, Home, Love, Person} from '../assets/icons/Svg/Icons';
import HomeMain from '../screens/HomeScreens/HomeMain/components/HomeMain';
import FavouriteNews from '../screens/HomeScreens/FavouriteNews/components/FavouriteNews';
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
        component={HomeMain}
        options={{
          headerShown: false,
          tabBarIcon: ({color}) => <Bell color={color} />,
        }}
      />
      <Tab.Screen
        name="Home1"
        component={HomeMain}
        options={{
          headerShown: false,
          tabBarIcon: ({color}) => <Person color={color} />,
        }}
      />
    </Tab.Navigator>
  );
};
