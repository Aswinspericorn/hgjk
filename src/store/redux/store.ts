import {configureStore} from '@reduxjs/toolkit';
import AuthStatusReducer from './AuthStatus';
import IsDataChanged from './IsDataChanged';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import UserData from './UserData';
import RecentSearchesReducer from './RecentSearchesReducer';
import thunk from 'redux-thunk';
const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};
const persistedReducer = persistReducer(persistConfig, RecentSearchesReducer);
export const store = configureStore({
  reducer: {
    AuthStatus: AuthStatusReducer,
    UserData: UserData,
    IsDataChanged: IsDataChanged,
    RecentSearches: persistedReducer,
    middleware: [thunk],
  },
});

export const persistor = persistStore(store);
