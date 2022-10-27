import types from '../constants/constants';

export const changeAuthStatus =
  (data: string) =>
  async (dispatch: (arg0: {type: string; payload: string}) => void) => {
    dispatch({
      type: types.CHANGE_AUTH_STATUS,
      payload: data,
    });
  };
