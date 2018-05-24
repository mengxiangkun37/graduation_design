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

export const getPersonal = () => {                         //获取个人信息
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

export const changePersonal = () => {                      //修改个人信息
  return (dispatch, getState) => {
    const state = getState().personal.data.user || {}
    console.log(state)
    axios.post('http://localhost:3000/changePersonal', qs.stringify(state), {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    })
      .then((res) => {
        console.log(res.data);
        if(res.data){
          alert('修改成功');
        }else{
          alert('修改失败');
        }
        dispatch(getPersonal());
      }).catch((error) => {
        console.log("出错");
      });
  }
}