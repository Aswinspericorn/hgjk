import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import GetStarted from '../screens/AuthScreens/GetStarted';
import WalkThrough from '../screens/AuthScreens/WalkThrough';
import LoginMobile from '../screens/AuthScreens/LoginMobile';
// import LoginScreen from '../screens/LoginScreen';
const Auth = createNativeStackNavigator();
const AuthNavigation = () => {
  return (
    <Auth.Navigator>
      <Auth.Screen
        name="GetStarted"
        component={GetStarted}
        options={{
          headerShown: false,
        }}
      />
      <Auth.Screen
        name="YouLearn"
        component={WalkThrough}
        options={{
          headerShown: false,
        }}
      />
      <Auth.Screen
        name="LoginMobile"
        component={LoginMobile}
        options={{
          headerTitle: '',
          headerTransparent: true,
        }}
      />
    </Auth.Navigator>
  );
};
export default AuthNavigation;
