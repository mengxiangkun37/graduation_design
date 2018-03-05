import * as actions from './';
import axios from 'axios';
const qs = require('qs');

export const user_login = () => {
  return (dispatch, getState) => {
    const state = getState().common.data || {}
    axios.post('http://localhost:3000/login', qs.stringify(state), {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    })
      .then((res) => {
        document.cookie= 'id='+ res.data.uid;
        dispatch({
          type: actions.LOGIN,
          data: {
            data: res.data
          }
        });
      }).catch((error) => {
        console.log("s");
      });
  }
}

export const fieldChange = (name, value) => {
  return {
    type: actions.FIELD_CHANGE,
    data: {
      data: {
        [name]: value
      }
    }
  }
}
