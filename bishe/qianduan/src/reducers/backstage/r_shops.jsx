import {
  shops
} from './../../actions';
import { updateState } from './../../common';
const INITIAL_STATE = {
  data: []
};

export default function (state = INITIAL_STATE, action = {}) {
  switch (action.type) {
    case shops.INIT:
      {
        return action.data;
      }
    case shops.SHOPS_INIT:
      {
        return updateState(state, action.data);
      }
    case shops.SHOPS_CHANGE:
      {
        return updateState(state, action.data);
      }
    default:
      return state;
  }
}