import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import StackNavigation from './StackNavigation';
import AuthNavigation from './AuthNavigation';
import {useSelector} from 'react-redux';
import linking from './Linking';
import {ThemeProvider} from '@shopify/restyle';
import theme, {darkTheme} from '../../src/theme/theme';
import {StatusBar, useColorScheme} from 'react-native';
import {
  getAuthStatus,
  getDarkModeStatus,
} from '../store/redux/selectors/AllSelector';
import {useAppDispatch} from '../store/redux/store';
import {changeDarkMode} from '../store/redux/actions/DarkModeStatus';

const Route = () => {
  const IsLoggedIn = useSelector(getAuthStatus);
  const mode = useSelector(getDarkModeStatus);
  const themeDevice = useColorScheme();
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (mode === 'default') {
      if (themeDevice === 'dark') {
        dispatch(changeDarkMode('dark'));
      } else {
        dispatch(changeDarkMode('light'));
      }
    }
  }, [dispatch, mode, themeDevice]);
  return (
    <>
      <StatusBar
        barStyle={mode === 'dark' ? 'light-content' : 'dark-content'}
        backgroundColor={mode === 'dark' ? '#262626' : 'white'}
        translucent
      />
      <ThemeProvider theme={mode === 'dark' ? darkTheme : theme}>
        <NavigationContainer linking={linking}>
          {IsLoggedIn ? <StackNavigation /> : <AuthNavigation />}
        </NavigationContainer>
      </ThemeProvider>
    </>
  );
};
export default Route;
