import {createSlice} from '@reduxjs/toolkit';

const DakModeSlice = createSlice({
  name: 'mode',
  initialState: {
    mode: 'default',
  },
  reducers: {
    changeDarkModeStatus: (state, action) => {
      state.mode = action.payload;
    },
  },
});

export const changeDarkModeStatus = DakModeSlice.actions.changeDarkModeStatus;
export default DakModeSlice.reducer;
