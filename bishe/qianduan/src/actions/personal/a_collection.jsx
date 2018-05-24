import * as actions from './';
import axios from 'axios';
const qs = require('qs');
export const collection_Init = () => {
  return (dispatch, getState) => {
    dispatch({
      type: actions.COLLECTION_INIT
    });
    dispatch(getCollection());
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

export const getCollection = () => {
  return (dispatch, getState) => {
    let uid = document.cookie.split(";")[0].split('=')[1];
    axios.post('http://localhost:3000/collection', qs.stringify({ uid: uid }), {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    })
      .then((res) => {
        console.log(res.data)
        dispatch({
          type: actions.COLLECTION_CHANGE,
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
        dispatch(getCollection());
      }).catch((error) => {
        console.log("出错");
      });
  }
}

export const deleteCollection = (id) => {
  return (dispatch, getState) => {
    axios.post('http://localhost:3000/deleteCollection', qs.stringify({ id: id }), {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    })
      .then((res) => {
        dispatch(getCollection());
      }).catch((error) => {
        console.log("出错");
      });
  }
}