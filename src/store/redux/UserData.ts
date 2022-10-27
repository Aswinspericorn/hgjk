import {createSlice} from '@reduxjs/toolkit';

const UserDataSlice = createSlice({
  name: 'Userdata',
  initialState: {
    userData: [],
  },
  reducers: {
    changeUserData: (state, action) => {
      state.userData = action.payload;
    },
  },
});

export const changeUserData = UserDataSlice.actions.changeUserData;
export default UserDataSlice.reducer;
