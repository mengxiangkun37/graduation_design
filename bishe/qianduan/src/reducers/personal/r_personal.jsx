import {
  personal
} from './../../actions';
import { updateState } from './../../common';
const INITIAL_STATE = {
  data: {
    user:{
      uname:'',
      usex:'',
      ubirth:'',
      utel:''
    }
  }
};

export default function (state = INITIAL_STATE, action = {}) {
  switch (action.type) {
    case personal.INIT:
      {
        return action.data;
      }
    case personal.PERSONAL_INIT:
      {
        return updateState(state, action.data);
      }
    case personal.FIELD_CHANGE:
      {
        return updateState(state, action.data);
      }
    default:
      return state;
  }
}