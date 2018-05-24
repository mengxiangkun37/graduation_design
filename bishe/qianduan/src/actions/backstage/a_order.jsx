import * as actions from './';
import axios from 'axios';
const qs = require('qs');
export const Order_Init = () => {
  return (dispatch, getState) => {
    dispatch({
      type: actions.ORDER_INIT
    });
    dispatch(getOrders());    
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
export const getOrders = () => {
  return (dispatch, getState) => {
    axios.get('http://localhost:3000/orders', {
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

export const deleteOrders = (id) => {
  return (dispatch, getState) => {
    axios.post('http://localhost:3000/deleteorders', qs.stringify({ id: id }), {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    })
      .then((res) => {
        dispatch(getOrders());
      }).catch((error) => {
        console.log("出错");
      });
  }
}


