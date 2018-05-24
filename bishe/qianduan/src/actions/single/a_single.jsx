import * as actions from './';
import axios from 'axios';
const qs = require('qs');
export const single_Init = (id) => {
  return (dispatch, getState) => {
    dispatch({
      type: actions.SINGLE_INIT
    });
    dispatch(getSingle(id));
  }
}
export const getSingle = (id) => {
  return (dispatch, getState) => {
    console.log(id)
    axios.get('http://localhost:3000/single/'+id,{
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
export const doBuy = (uid,wid,nums) => {
  return (dispatch, getState) => {
    axios.post('http://localhost:3000/single/buy', qs.stringify({uid: uid, wid: wid ,nums:nums}),{
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    })
      .then((res) => {
        console.log(res.data)
        dispatch(getSingle(wid));
      }).catch((error) => {
        console.log("出错");
      });
  }
}
export const doAdd = (uid,wid,cnums) => {
  return (dispatch, getState) => {

    axios.post('http://localhost:3000/single/add', qs.stringify({uid: uid, wid: wid ,cnums:cnums}),{
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    })
      .then((res) => {
        console.log(res.data)
        alert('添加购物车成功');
        dispatch(getSingle(wid));
      }).catch((error) => {
        console.log("出错");
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
