import types from '../constants/constants';

const initialState = {
  userData: [],
};

export default (state = initialState, action) => {
  const {type, payload} = action;
  switch (type) {
    case types.CHANGE_USER_DATA:
      return {
        userData: payload,
      };
    default:
      return state;
  }
};
