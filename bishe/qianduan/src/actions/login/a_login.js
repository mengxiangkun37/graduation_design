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
    }).then((res) => {
      if (res.data !== 2) {
        document.cookie = 'id=' + res.data.uid;
        document.cookie = 'name=' + res.data.uname;
        alert('登录成功');
        dispatch({
          type: actions.LOGIN,
          data: {
            data: res.data
          }
        });
      }else{
        alert('账号或密码不正确');
      }
    }).catch((error) => {
      console.log("登录失败");
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
export const business_login = () => {
  return (dispatch, getState) => {
    const state = getState().common.data || {}
    axios.post('http://127.0.0.1/new/user/businessLogin', qs.stringify(state), {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    }).then((res) => {
      if (res.data !== 2) {
        document.cookie = 'bid=' + res.data.bid;
        document.cookie = 'bname=' + res.data.bname;
        alert('登录成功');
        dispatch({
          type: actions.LOGIN,
          data: {
            data: res.data
          }
        });
      }else{
        alert('账号或密码不正确');
      }
    }).catch((error) => {
      console.log("登录失败");
    });
  }
}
export const admin_login = () => {
  return (dispatch, getState) => {
    const state = getState().common.data || {}
    axios.post('http://127.0.0.1/new/user/adminLogin', qs.stringify(state), {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    }).then((res) => {
      if (res.data !== 2) {
        document.cookie = 'id=' + res.data.gid;
        document.cookie = 'name=' + res.data.gname;
        alert('登录成功');
        dispatch({
          type: actions.LOGIN,
          data: {
            data: res.data
          }
        });
      }else{
        alert('账号或密码不正确');
      }
    }).catch((error) => {
      console.log("登录失败");
    });
  }
}