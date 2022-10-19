import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import PersonalDetailsHome from '../screens/HomeScreens/PersonalDetaillHome/components/PersonalDetailsHome';
import MyDetails from '../screens/HomeScreens/MyProfile';
import {useTranslation} from 'react-i18next';

const Stack = createNativeStackNavigator();

const PersonalDetailsStackNavigation = () => {
  const {t} = useTranslation();

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
          headerTitle: t('MyDetails.MyDetails'),
          headerTitleAlign: 'center',
          headerTitleStyle: {fontFamily: 'inter-Regular', fontSize: 18},
        }}
      />
    </Stack.Navigator>
  );
};
export default PersonalDetailsStackNavigation;
