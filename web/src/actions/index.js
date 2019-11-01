import * as TYPES from './types';
import { request } from '../utils/request';

export const requestToServer = () => {
  return async dispatch => {
    const data = await request({ route: '/', method: 'GET' });

    dispatch({
      type : TYPES.GET_DATA,
      payload : data,
    });
  };
};
