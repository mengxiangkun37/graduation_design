import {
    reg
  } from './../../actions';
  import { updateState } from  './../../common';
  const INITIAL_STATE = {
    isFetching: true,
    isLogined: false,
    data:{
      uemail:'',
      upass:'',
      rupass:''
    }
  };
  
  export default function (state = INITIAL_STATE, action = {}) {
    switch (action.type) {
      case reg.REG:
      {
        return updateState(state, action.data);
      }
      case reg.FIELD_CHANGE:
      {
        return updateState(state, action.data);
      }
      default:
        return state;
    }
  }
  