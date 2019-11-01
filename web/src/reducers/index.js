import { combineReducers } from 'redux';
import * as TYPES from '../actions/types';

const dataReducer = (state = {}, action) => {
  switch (action.type) {
    case TYPES.GET_DATA:
      return action.payload;

    default:
      return state;
  }
};

export default combineReducers ({
  data: dataReducer,
});
