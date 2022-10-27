import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AuthStatusReducer from './reducers/AuthStatusReducer';
import DarkModeStatusReducer from './reducers/DarkModeStatusReducer';
import IsDataChanged from './reducers/IsDataChangedReducer';
import RecentSearchesReducer from './reducers/RecentSearchesReducer';
import UserDataReducer from './reducers/UserDataReducer';
import { useDispatch } from 'react-redux';
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

export const store = configureStore({
  reducer: {
    AuthStatus: AuthStatusReducer,
    IsDataChanged: IsDataChanged,
    UserData: UserDataReducer,
    DarkModeStatus: persistedReducerDarkMode,
    RecentSearches: persistedReducer,
  },
});
export const persistor = persistStore(store);
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
