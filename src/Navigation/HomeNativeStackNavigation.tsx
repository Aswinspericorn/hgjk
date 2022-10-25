import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import DetailNews from '../screens/HomeScreens/DetailNews';
import {HomeBottomNaviation} from './HomeBottomNavigation';
import UserDetails from '../screens/HomeScreens/UserDetails';
import Map from '../components/Map/Map';
import {HomeNaviationParamList} from '../Types/Navigation';
import Settings from '../screens/HomeScreens/Settings/components/Settings';
import {useTranslation} from 'react-i18next';
import {useSelector} from 'react-redux';

const Stack = createNativeStackNavigator<HomeNaviationParamList>();

const HomeNativeStackNavigation = () => {
  const {t} = useTranslation();
  const mode = useSelector((state: any) => state.DarkModeStatus.mode);

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
          headerTintColor: mode === 'dark' ? 'white' : '#262626',
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
      <Stack.Screen
        name="Settings"
        component={Settings}
        options={{
          headerTitle: t('Personaliz.Settings'),
          headerTitleAlign: 'center',
          headerTitleStyle: {fontFamily: 'inter-Regular', fontSize: 18},
          headerTintColor: mode === 'dark' ? 'white' : '#262626',
          headerStyle: {backgroundColor: mode === 'dark' ? '#262626' : 'white'},
        }}
      />
    </Stack.Navigator>
  );
};
export default HomeNativeStackNavigation;
