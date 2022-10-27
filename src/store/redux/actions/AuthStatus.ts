import types from '../constants/constants';

interface Props {
  type: string;
  payload: boolean;
}
export const changeAuthStatus =
  (data: boolean) => async (dispatch: ({type, payload}: Props) => void) => {
    dispatch({
      type: types.CHANGE_AUTH_STATUS,
      payload: data,
    });
  };
