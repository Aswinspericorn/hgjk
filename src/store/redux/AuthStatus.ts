import {createSlice} from '@reduxjs/toolkit';

const AuthStatusSlice = createSlice({
  name: 'AuthStatus',
  initialState: {
    isLoggedIn: false,
  },
  reducers: {
    changeAuthStatus: (state, action) => {
      state.isLoggedIn = action.payload;
    },
  },
});

export const changeAuthStatus = AuthStatusSlice.actions.changeAuthStatus;
export default AuthStatusSlice.reducer;
