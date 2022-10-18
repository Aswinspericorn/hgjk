import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import StackNavigation from './StackNavigation';
import AuthNavigation from './AuthNavigation';
import {useSelector} from 'react-redux';
import linking from './Linking';
const Route = () => {
  const IsLoggedIn = useSelector((state: any) => state.AuthStatus.isLoggedIn);
  return (
    <>
      <NavigationContainer linking={linking}>
        {IsLoggedIn ? <StackNavigation /> : <AuthNavigation />}
      </NavigationContainer>
    </>
  );
};
export default Route;
