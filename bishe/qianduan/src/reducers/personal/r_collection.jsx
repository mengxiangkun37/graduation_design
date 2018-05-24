import {
    collection
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
      case collection.INIT:
        {
          return action.data;
        }
      case collection.COLLECTION_INIT:
        {
          return updateState(state, action.data);
        }
      case collection.COLLECTION_CHANGE:
        {
          return updateState(state, action.data);
        }
      default:
        return state;
    }
  }