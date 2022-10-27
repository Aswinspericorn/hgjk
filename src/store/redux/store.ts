import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AuthStatusReducer from './reducers/AuthStatusReducer';
import DarkModeStatusReducer from './reducers/DarkModeStatusReducer';
import IsDataChanged from './reducers/IsDataChangedReducer';
import RecentSearchesReducer from './reducers/RecentSearchesReducer';
import UserDataReducer from './reducers/UserDataReducer';
// import thunk from 'redux-thunk';
const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};
const persistedReducer = persistReducer(persistConfig, RecentSearchesReducer);
const persistedReducerDarkMode = persistReducer(
  persistConfig,
  DarkModeStatusReducer,
);
const AppReducer = combineReducers({
  AuthStatus: AuthStatusReducer,
  IsDataChanged: IsDataChanged,
  UserData: UserDataReducer,
  DarkModeStatus: persistedReducerDarkMode,
  RecentSearches: persistedReducer,
});
export const store = configureStore({
  reducer: {
    AppReducer,
  },
});
export const persistor = persistStore(store);
