import {
    order
  } from './../../actions';
  import { updateState } from './../../common';
  const INITIAL_STATE = {
    data: {
      userAgoods:[
        {
          aaa:{
            uname:''
          },
          bbb:{
            wtitle:'',
            kucun:''
          }
        }
      ]
    }
  };
  
  export default function (state = INITIAL_STATE, action = {}) {
    switch (action.type) {
      case order.INIT:
        {
          return action.data;
        }
      case order.ORDER_INIT:
        {
          return updateState(state, action.data);
        }
      case order.FIELD_CHANGE:
        {
          return updateState(state, action.data);
        }
      default:
        return state;
    }
  }