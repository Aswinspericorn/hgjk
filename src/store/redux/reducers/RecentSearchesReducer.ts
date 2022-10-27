import types from '../constants/constants';

const initialState = {
  searchData: [],
};

export default (state = initialState, action) => {
  const {type, payload} = action;
  switch (type) {
    case types.CHANGE_RECENT_SEARCH:
      return {
        searchData: [...new Set([...state.searchData, payload])],
      };
    default:
      return state;
  }
};
