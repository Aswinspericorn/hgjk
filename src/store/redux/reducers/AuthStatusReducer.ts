import types from '../constants/constants';

const initialState = {
  isLoggedIn: false,
};

export default (state = initialState, action) => {
  const {type, payload} = action;
  switch (type) {
    case types.CHANGE_AUTH_STATUS:
      return {
        ...state,
        isLoggedIn: payload,
      };
    default:
      return state;
  }
};
