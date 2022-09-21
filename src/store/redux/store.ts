import {configureStore} from '@reduxjs/toolkit';
import AuthStatusReducer from './AuthStatus';
export const store = configureStore({
  reducer: {
    AuthStatus: AuthStatusReducer,
  },
});
