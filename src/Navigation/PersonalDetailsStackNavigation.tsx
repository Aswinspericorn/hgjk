import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import PersonalDetailsHome from '../screens/HomeScreens/PersonalDetaillHome/components/PersonalDetailsHome';
import MyDetails from '../screens/HomeScreens/MyProfile';
import {useTranslation} from 'react-i18next';
import {useSelector} from 'react-redux';
const Stack = createNativeStackNavigator();

const PersonalDetailsStackNavigation = () => {
  const {t} = useTranslation();
  const mode = useSelector(
    (state: any) => state.AppReducer.DarkModeStatus.mode,
  );
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="PersonalDetailsHome"
        component={PersonalDetailsHome}
        options={{
          headerShown: false,
          headerTransparent: true,
        }}
      />
      <Stack.Screen
        name="MyDetails"
        component={MyDetails}
        options={{
          headerTitle: t('Personaliz.MyDetails'),
          headerTitleAlign: 'center',
          headerTintColor: mode === 'dark' ? 'white' : '#262626',
          headerStyle: {backgroundColor: mode === 'dark' ? '#262626' : 'white'},
          headerTitleStyle: {fontFamily: 'inter-Regular', fontSize: 18},
        }}
      />
    </Stack.Navigator>
  );
};
export default PersonalDetailsStackNavigation;
