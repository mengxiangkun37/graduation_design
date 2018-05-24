import {
    per
  } from './../../actions';
  import { updateState } from './../../common';
  const INITIAL_STATE = {
    data: {
        per:{
            bname:'',
            bemail:'',
            bcity:'',
            btel:''
          }
    }
  };
  
  export default function (state = INITIAL_STATE, action = {}) {
    switch (action.type) {
      case per.INIT:
        {
          return action.data;
        }
      case per.PER_INIT:
        {
          return updateState(state, action.data);
        }
      case per.FIELD_CHANGE:
        {
          return updateState(state, action.data);
        }
      default:
        return state;
    }
  }