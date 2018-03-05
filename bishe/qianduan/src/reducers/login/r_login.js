import {
  login
} from './../../actions';
import { updateState } from  './../../common';
const INITIAL_STATE = {
  isFetching: true,
  isLogined: false,
  data:{
    uemail:'',
    upass:''
  }
};

export default function (state = INITIAL_STATE, action = {}) {
  switch (action.type) {
    case login.LOGIN:
    {
      return updateState(state, action.data);
    }
    case login.FIELD_CHANGE:
    {
      return updateState(state, action.data);
    }
    default:
      return state;
  }
}
