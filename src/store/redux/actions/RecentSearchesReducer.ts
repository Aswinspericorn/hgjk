import types from '../constants/constants';

export const changeRecentSearch =
  (data: string) =>
  async (dispatch: (arg0: {type: string; payload: string}) => void) => {
    dispatch({
      type: types.CHANGE_RECENT_SEARCH,
      payload: data,
    });
  };
