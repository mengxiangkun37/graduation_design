import {
  user
} from './../../actions';
import { updateState } from './../../common';
const INITIAL_STATE = {
  data:[]
};

export default function (state = INITIAL_STATE, action = {}) {
  switch (action.type) {
    case user.INIT:
      {
        return action.data;
      }
    case user.USER_INIT:
      {
        return updateState(state, action.data);
      }
    case user.USER_CHANGE:
      {
        return updateState(state, action.data);
      }
    default:
      return state;
  }
}