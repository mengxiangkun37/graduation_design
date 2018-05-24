import * as actions from './';
import axios from 'axios';
const qs = require('qs');
export const Buys_Init = () => {
  return (dispatch, getState) => {
    dispatch({
      type: actions.BUYS_INIT
    });
    dispatch(getBuys());    
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

export const getBuys = () => {
    return (dispatch, getState) => {
      let bid =document.cookie.split(";")[0].split('=')[1];;
      axios.post('http://localhost:3000/buys', qs.stringify({ bid: bid }), {
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


