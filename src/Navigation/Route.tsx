import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import StackNavigation from './StackNavigation';
import AuthNavigation from './AuthNavigation';
import {useSelector} from 'react-redux';
const Route = () => {
  const IsLoggedIn = useSelector((state: any) => state.AuthStatus.isLoggedIn);
  return (
    <>
      <NavigationContainer>
        {IsLoggedIn ? <StackNavigation /> : <AuthNavigation />}
      </NavigationContainer>
    </>
  );
};
export default Route;
  