import * as actions from './';
import axios from 'axios';
const qs = require('qs');

export const doReg = () => {
  return (dispatch, getState) => {
    const state = getState().common.data || {}
    axios.post('http://localhost:3000/reg', qs.stringify(state), {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    }).then((res) => {
      alert('注册成功！');
      console.log(res.data)
      dispatch({
        type: actions.REG,
        data: {
          data: res.data
        }
      });
    }).catch((error) => {
      console.log("注册失败");
    });
  }
}
export const doReg1 = () => {
  return (dispatch, getState) => {
    const state = getState().common.data || {}
    axios.post('http://127.0.0.1/new/user/doReg1', qs.stringify(state), {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    }).then((res) => {
      alert('注册成功！');
      console.log(res.data)
      dispatch({
        type: actions.REG,
        data: {
          data: res.data
        }
      });
    }).catch((error) => {
      console.log("注册失败");
    });
  }
}
export const check = (uemail) => {
  return (dispatch, getState) => {
    axios.post('http://localhost:3000/check', qs.stringify({ uemail: uemail }), {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    }).then((res) => {
      if(res.data === 1){
        dispatch({
          type: actions.REG,
          data: {
            data: {
              flag:1
            }
          }
        });
      }else{
        dispatch({
          type: actions.REG,
          data: {
            data: res.data
          }
        });
      }
    }).catch((error) => {
      console.log("注册失败");
    });
  }
}
export const check1 = (uemail) => {
  return (dispatch, getState) => {
    axios.post('http://127.0.0.1/new/user/check1', qs.stringify({ bemail: uemail }), {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    }).then((res) => {
      if(res.data === 1){
        dispatch({
          type: actions.REG,
          data: {
            data: {
              flag:1
            }
          }
        });
      }else{
        dispatch({
          type: actions.REG,
          data: {
            data: res.data
          }
        });
      }
    }).catch((error) => {
      console.log("注册失败");
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
