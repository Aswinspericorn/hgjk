import types from '../constants/constants';

export const changeIsDataChanged =
  () => async (dispatch: (arg0: {type: string}) => void) => {
    dispatch({
      type: types.CHANGE_ISDATA_CHANGED,
    });
  };
