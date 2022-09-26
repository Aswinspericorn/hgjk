import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import GetStarted from '../screens/AuthScreens/GetStarted';
import WalkThrough from '../screens/AuthScreens/WalkThrough';
import LoginMobile from '../screens/AuthScreens/LoginMobile';
import AuthenticateOtp from '../screens/AuthScreens/AuthenticateOtp';
import EmailSignUp from '../screens/AuthScreens/EmailSignUp';
import EmailSignIn from '../screens/AuthScreens/EmailSignIn';
import SetupPersonalizationOne from '../screens/AuthScreens/SetupPersonalization1';
import SetupPersonalizationTwo from '../screens/AuthScreens/SetupPersonalization2';
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
      <Auth.Screen
        name="AuthenticateOtp"
        component={AuthenticateOtp}
        options={{
          headerTitle: '',
          headerTransparent: true,
        }}
      />
      <Auth.Screen
        name="EmailSignup"
        component={EmailSignUp}
        options={{
          headerTitle: 'Sign up',
          headerTransparent: true,
          headerTitleAlign: 'center',
          headerTitleStyle: {fontFamily: 'inter-Regular', fontSize: 18},
        }}
      />
      <Auth.Screen
        name="EmailSignin"
        component={EmailSignIn}
        options={{
          headerTitle: 'Sign in',
          headerTransparent: true,
          headerTitleAlign: 'center',
          headerTitleStyle: {fontFamily: 'inter-Regular', fontSize: 18},
        }}
      />
      <Auth.Screen
        name="SetupPersonalizationOne"
        component={SetupPersonalizationOne}
      />
      <Auth.Screen
        name="SetupPersonalizationTwo"
        component={SetupPersonalizationTwo}
        options={{
          headerShown: false,
        }}
      />
    </Auth.Navigator>
  );
};
export default AuthNavigation;
