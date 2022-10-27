import types from '../constants/constants';

export const changeUserData =
  (data: string) =>
  async (dispatch: (arg0: {type: string; payload: string}) => void) => {
    dispatch({
      type: types.CHANGE_USER_DATA,
      payload: data,
    });
  };
