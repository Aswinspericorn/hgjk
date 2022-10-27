import types from '../constants/constants';

const initialState = {
  mode: 'default',
};

export default (state = initialState, action) => {
  const {type, payload} = action;
  switch (type) {
    case types.CHANGE_DARK_MODE:
      return {
        mode: payload,
      };
    default:
      return state;
  }
};
