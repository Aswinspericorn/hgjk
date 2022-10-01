import {configureStore} from '@reduxjs/toolkit';
import AuthStatusReducer from './AuthStatus';
import IsDataChanged from './IsDataChanged';
import UserData from './UserData';
export const store = configureStore({
  reducer: {
    AuthStatus: AuthStatusReducer,
    UserData: UserData,
    IsDataChanged: IsDataChanged,
  },
});
