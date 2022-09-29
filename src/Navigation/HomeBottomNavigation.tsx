/* eslint-disable @typescript-eslint/no-shadow */
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeMain from '../screens/HomeScreens/HomeMain/components/HomeMain';
import {Bell, Home, Love, Person} from '../assets/icons/Svg/Icons';
const Tab = createBottomTabNavigator();

export const HomeBottomNaviation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
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
          tabBarIcon: ({color}) => <Person color={color} />,
        }}
      />
    </Tab.Navigator>
  );
};
