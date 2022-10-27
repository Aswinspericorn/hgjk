import {FirebaseReturnData} from '../../../Types/CommonProps';
import types from '../constants/constants';

export const changeUserData =
  (data: FirebaseReturnData) =>
  async (
    dispatch: (arg0: {type: string; payload: FirebaseReturnData}) => void,
  ) => {
    dispatch({
      type: types.CHANGE_USER_DATA,
      payload: data,
    });
  };
