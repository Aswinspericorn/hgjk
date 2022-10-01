import {createSlice} from '@reduxjs/toolkit';

const IsDataChangedSlice = createSlice({
  name: 'IsDataChanged',
  initialState: {
    isChanged: false,
  },
  reducers: {
    changeIsDataChanged: state => {
      state.isChanged = !state.isChanged;
    },
  },
});

export const changeIsDataChanged =
  IsDataChangedSlice.actions.changeIsDataChanged;
export default IsDataChangedSlice.reducer;
