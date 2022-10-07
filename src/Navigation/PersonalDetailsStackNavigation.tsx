import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import PersonalDetailsHome from '../screens/HomeScreens/PersonalDetaillHome/components/PersonalDetailsHome';
import MyDetails from '../screens/HomeScreens/MyProfile';
import Map from '../components/Map/Map';
const Stack = createNativeStackNavigator();

const PersonalDetailsStackNavigation = () => {
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
          headerTitle: 'My Details',
          headerTitleAlign: 'center',
          headerTitleStyle: {fontFamily: 'inter-Regular', fontSize: 18},
        }}
      />
      <Stack.Screen
        name="Map"
        component={Map}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};
export default PersonalDetailsStackNavigation;
