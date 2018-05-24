import * as actions from './';
import axios from 'axios';
const qs = require('qs');
export const User_Init = () => {
  return (dispatch, getState) => {
    dispatch({
      type: actions.USER_INIT
    });
    dispatch(getUsers());
  }
}
export const fieldChange = (name, value) => {
  return {
    type: actions.FIELD_CHANGE,
    data: {
      data: {
        user: {
          [name]: value
        }
      }
    }
  }
}
export const getUsers = () => {
  return (dispatch, getState) => {
    axios.get('http://localhost:3000/users', {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    })
      .then((res) => {
        dispatch({
          type: actions.USER_CHANGE,
          data: {
            data: res.data
          }
        });
      }).catch((error) => {
        console.log("出错");
      });
  }
}
export const deleteUsers = (id) => {
  return (dispatch, getState) => {
    axios.post('http://localhost:3000/deleteusers', qs.stringify({ id: id }), {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    })
      .then((res) => {
        dispatch(getUsers());
      }).catch((error) => {
        console.log("出错");
      });
  }
}