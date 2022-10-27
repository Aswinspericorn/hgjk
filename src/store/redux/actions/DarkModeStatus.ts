import types from '../constants/constants';

export const changeDarkMode =
  (data: string) =>
  async (dispatch: (arg0: {type: string; payload: string}) => void) => {
    dispatch({
      type: types.CHANGE_DARK_MODE,
      payload: data,
    });
  };
