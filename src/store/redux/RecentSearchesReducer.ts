import {createSlice} from '@reduxjs/toolkit';

const RecentSearcheSlice = createSlice({
  name: 'recendSearch',
  initialState: {
    searchData: [],
  },
  reducers: {
    changeRecentSearch: (state, action) => {
      state.searchData = [...new Set([...state.searchData, action.payload])];
    },
  },
});

export const changeRecentSearch = RecentSearcheSlice.actions.changeRecentSearch;
export default RecentSearcheSlice.reducer;
