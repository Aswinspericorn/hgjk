import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Home, Love, Person, Search} from '../assets/icons/Svg/Icons';
import HomeMain from '../screens/HomeScreens/HomeMain';
import FavouriteNews from '../screens/HomeScreens/FavouriteNews';
import SearchStackNavigation from './SearchStackNavigation';
import PersonalDetailsStackNavigation from './PersonalDetailsStackNavigation';
import {HomeBottomNaviationParamList} from '../Types/Navigation';
import {useSelector} from 'react-redux';
const Tab = createBottomTabNavigator<HomeBottomNaviationParamList>();

export const HomeBottomNaviation = () => {
  const mode = useSelector(
    (state: any) => state.AppReducer.DarkModeStatus.mode,
  );
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: mode === 'dark' ? '#262626' : 'white',
        },
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
        name="FavouriteMain"
        component={FavouriteNews}
        options={{
          headerShown: false,
          tabBarIcon: ({color}) => <Love color={color} />,
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchStackNavigation}
        options={{
          headerShown: false,
          tabBarIcon: ({color}) => <Search color={color} />,
        }}
      />
      <Tab.Screen
        name="PersonalDetails"
        component={PersonalDetailsStackNavigation}
        options={{
          headerShown: false,
          tabBarIcon: ({color}) => <Person color={color} />,
        }}
      />
    </Tab.Navigator>
  );
};
