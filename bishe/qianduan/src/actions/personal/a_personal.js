import * as actions from './';
import axios from 'axios';
const qs = require('qs');
export const personal_Init = () => {
  return (dispatch, getState) => {
    dispatch({
      type: actions.PERSONAL_INIT
    });
    dispatch(getPersonal());
  }
}
export const fieldChange = (name, value) => {
  return {
    type: actions.FIELD_CHANGE,
    data: {
      data: {
        user:{
          [name]: value
        }
      }
    }
  }
}

export const getPersonal = () => {
  return (dispatch, getState) => {
    let uid = document.cookie.split(";")[0].split('=')[1];
    axios.post('http://localhost:3000/personal', qs.stringify({ uid: uid }), {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    })
      .then((res) => {
        dispatch({
          type: actions.FIELD_CHANGE,
          data: {
            data: res.data
          }
        });
      }).catch((error) => {
        console.log("出错");
      });
  }
}