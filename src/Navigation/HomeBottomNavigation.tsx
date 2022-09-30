import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Bell, Home, Love, Person} from '../assets/icons/Svg/Icons';
import HomeNativeStackNavigation from './HomeNativeStackNavigation';
const Tab = createBottomTabNavigator();

export const HomeBottomNaviation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
      }}>
      <Tab.Screen
        name="Home2"
        component={HomeNativeStackNavigation}
        options={{
          headerShown: false,
          tabBarIcon: ({color}) => <Home color={color} />,
        }}
      />
      <Tab.Screen
        name="Home3"
        component={HomeNativeStackNavigation}
        options={{
          headerShown: false,
          tabBarIcon: ({color}) => <Love color={color} />,
        }}
      />
      <Tab.Screen
        name="Home4"
        component={HomeNativeStackNavigation}
        options={{
          headerShown: false,
          tabBarIcon: ({color}) => <Bell color={color} />,
        }}
      />
      <Tab.Screen
        name="Home"
        component={HomeNativeStackNavigation}
        options={{
          headerShown: false,
          tabBarIcon: ({color}) => <Person color={color} />,
        }}
      />
    </Tab.Navigator>
  );
};
