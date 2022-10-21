import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import StackNavigation from './StackNavigation';
import AuthNavigation from './AuthNavigation';
import {useSelector} from 'react-redux';
import linking from './Linking';
import {ThemeProvider} from '@shopify/restyle';
import theme, {darkTheme} from '../../src/theme/theme';
import {StatusBar} from 'react-native';

const Route = () => {
  const IsLoggedIn = useSelector((state: any) => state.AuthStatus.isLoggedIn);
  const darkMode = useSelector((state: any) => state.DarkModeStatus.darkMode);

  return (
    <>
      <StatusBar
        barStyle={darkMode ? 'light-content' : 'dark-content'}
        backgroundColor={darkMode ? '#262626' : 'white'}
        translucent
      />
      <ThemeProvider theme={darkMode ? darkTheme : theme}>
        <NavigationContainer linking={linking}>
          {IsLoggedIn ? <StackNavigation /> : <AuthNavigation />}
        </NavigationContainer>
      </ThemeProvider>
    </>
  );
};
export default Route;
