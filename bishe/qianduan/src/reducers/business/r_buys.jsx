import {
    buys
  } from './../../actions';
  import { updateState } from './../../common';
  const INITIAL_STATE = {
    data: {
        buys:[]
    }
  };
  
  export default function (state = INITIAL_STATE, action = {}) {
    switch (action.type) {
      case buys.INIT:
        {
          return action.data;
        }
      case buys.BUYS_INIT:
        {
          return updateState(state, action.data);
        }
      case buys.FIELD_CHANGE:
        {
          return updateState(state, action.data);
        }
      default:
        return state;
    }
  }