import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import PersonalDetailsHome from '../screens/HomeScreens/PersonalDetaillHome/components/PersonalDetailsHome';
import MyDetails from '../screens/HomeScreens/MyProfile';
import {useTranslation} from 'react-i18next';
import {useSelector} from 'react-redux';
const Stack = createNativeStackNavigator();

const PersonalDetailsStackNavigation = () => {
  const {t} = useTranslation();
  const darkMode = useSelector((state: any) => state.DarkModeStatus.darkMode);

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
          headerTintColor: darkMode ? 'white' : '#262626',
          headerTitleStyle: {fontFamily: 'inter-Regular', fontSize: 18},
          headerStyle: {backgroundColor: darkMode ? '#262626' : 'white'},
        }}
      />
    </Stack.Navigator>
  );
};
export default PersonalDetailsStackNavigation;
