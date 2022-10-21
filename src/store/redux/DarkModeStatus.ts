import {createSlice} from '@reduxjs/toolkit';

const DakModeSlice = createSlice({
  name: 'DarkMode',
  initialState: {
    darkMode: false,
  },
  reducers: {
    changeDarkModeStatus: state => {
      state.darkMode = !state.darkMode;
    },
  },
});

export const changeDarkModeStatus = DakModeSlice.actions.changeDarkModeStatus;
export default DakModeSlice.reducer;
