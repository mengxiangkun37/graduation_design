import {
  ups
} from './../../actions';
import { updateState } from './../../common';
const INITIAL_STATE = {
  data: {
    goods: [''],
    ups: {
      bid: 1,
      wtitle: '',
      wprice: '',
      wcon: '',
      wpic: '',
      kucun: '',
      cid:''
    }
  }
};

export default function (state = INITIAL_STATE, action = {}) {
  switch (action.type) {
    case ups.INIT:
      {
        return action.data;
      }
    case ups.UPS_INIT:
      {
        return updateState(state, action.data);
      }
    case ups.FIELD_CHANGE:
      {
        return updateState(state, action.data);
      }
    default:
      return state;
  }
}