import {
    search
  } from './../../actions';
  import { updateState } from  './../../common';
  const INITIAL_STATE = {
    isFetching: true,
    isLogined: false,
    data:{
     goods:[
       
     ]
    }     
  };
  
  export default function (state = INITIAL_STATE, action = {}) {
    switch (action.type) {
      case search.INIT:
      {
        return action.data;
      }
      case search.SEARCH_INIT:
      {
        return updateState(state, action.data);
      }
      case search.FIELD_CHANGE:
      {
        return updateState(state, action.data);
      }
      default:
        return state;
    }
  }
  