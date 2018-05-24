import * as actions from './';
import axios from 'axios';
const qs = require('qs');
export const Shops_Init = () => {
  return (dispatch, getState) => {
    dispatch({
      type: actions.SHOPS_INIT
    });
    dispatch(getShops());
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
export const getShops = () => {
  return (dispatch, getState) => {
    axios.get('http://localhost:3000/shops', {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    })
      .then((res) => {
        dispatch({
          type: actions.SHOPS_CHANGE,
          data: {
            data: res.data
          }
        });
      }).catch((error) => {
        console.log("出错");
      });
  }
}
export const deleteShops = (id) => {
  return (dispatch, getState) => {
    axios.post('http://localhost:3000/deleteshops', qs.stringify({ id: id }), {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    })
      .then((res) => {
        dispatch(getShops());
      }).catch((error) => {
        console.log("出错");
      });
  }
}
