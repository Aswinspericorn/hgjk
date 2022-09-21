/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import {ThemeProvider} from '@shopify/restyle';
import React from 'react';
import {StatusBar} from 'react-native';
import Route from './src/Navigation/Route';
import {Provider} from 'react-redux';

import theme from './src/theme/theme';
import {store} from './src/store/redux/store';
const App = () => {
  // const isDarkMode = useColorScheme() === 'dark';

  // const backgroundStyle = {
  //   backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  // };

  return (
    <>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent={true}
      />
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <Route />
        </ThemeProvider>
      </Provider>
    </>
  );
};
export default App;
