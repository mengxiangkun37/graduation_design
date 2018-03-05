import {
  single
} from './../../actions';
import { updateState } from './../../common';
const INITIAL_STATE = {
  isFetching: true,
  isLogined: false,
  data: {
    id: [
      {
        wtitle: '',
        uname: '',
        utel: '',
        name: '',
        wprice: '',
        wcon: ''
      }
    ],
    pl: [
      {
        aaa: [
          {
            uname:''
          }
        ]
      }
    ]
  }
};

export default function (state = INITIAL_STATE, action = {}) {
  switch (action.type) {
    case single.INIT:
      {
        return action.data;
      }
    case single.SINGLE_INIT:
      {
        return updateState(state, action.data);
      }
    case single.FIELD_CHANGE:
      {
        return updateState(state, action.data);
      }
    default:
      return state;
  }
}
