import {
    home
  } from './../../actions';
  import { updateState } from  './../../common';
  const INITIAL_STATE = {
    isFetching: true,
    isLogined: false,
    data:{
      goodss:[
        {
          ccname:'',
          aaa:[
            {
              cname:''
            }
          ]
        }
      ],
      shows:[
      
      ]
    }
     
    
  };
  
  export default function (state = INITIAL_STATE, action = {}) {
    switch (action.type) {
      case home.INIT:
      {
        return action.data;
      }
      case home.HOME_INIT:
      {
        return updateState(state, action.data);
      }
      case home.HOME_CHANGE:
      {
        return updateState(state, action.data);
      }
      default:
        return state;
    }
  }
  