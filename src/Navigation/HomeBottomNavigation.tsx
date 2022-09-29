/* eslint-disable @typescript-eslint/no-shadow */
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeMain from '../screens/HomeScreens/HomeMain/HomeMain';
import Person from '../assets/icons/Svg/person.svg';
import Home from '../assets/icons/Svg/home.svg';
import Bell from '../assets/icons/Svg/bell.svg';
import Love from '../assets/icons/Svg/love.svg';
const Tab = createBottomTabNavigator();

export const HomeBottomNaviation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarActiveBackgroundColor: '#E6B056',
      }}>
      <Tab.Screen
        name="Home2"
        component={HomeMain}
        options={{
          headerShown: false,
          tabBarIcon: ({color}) => (
            <Home width={24} height={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Home3"
        component={HomeMain}
        options={{
          headerShown: false,
          tabBarIcon: ({color}) => (
            <Love width={24} height={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Home4"
        component={HomeMain}
        options={{
          headerShown: false,
          tabBarIcon: ({color}) => (
            <Bell width={24} height={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Home"
        component={HomeMain}
        options={{
          headerShown: false,
          tabBarIcon: ({color}) => (
            <Person width={24} height={24} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
