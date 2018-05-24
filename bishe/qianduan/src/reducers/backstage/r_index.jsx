import {
    buyinfo
  } from './../../actions';
  import { updateState } from './../../common';
  const INITIAL_STATE = {
    data: {
     goods:[
      {
        aaa:[
          {
            wtitle:'',
            wpic:'s3.jpg'
          }
        ] 
      }
     ]
    }
  };
  
  export default function (state = INITIAL_STATE, action = {}) {
    switch (action.type) {
      case buyinfo.INIT:
        {
          return action.data;
        }
      case buyinfo.BUYINFO_INIT:
        {
          return updateState(state, action.data);
        }
      case buyinfo.BUYINFO_CHANGE:
        {
          return updateState(state, action.data);
        }
      default:
        return state;
    }
  }