import types from '../constants/constants';

const initialState = {
  isChanged: false,
};

export default (state = initialState, action) => {
  const {type} = action;
  switch (type) {
    case types.CHANGE_ISDATA_CHANGED:
      return {
        mode: !state.isChanged,
      };
    default:
      return state;
  }
};
