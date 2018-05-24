import * as actions from './';
import axios from 'axios';
const qs = require('qs');
export const buyInfo_Init = () => {
  return (dispatch, getState) => {
    dispatch({
      type: actions.BUYINFO_INIT
    });
    dispatch(getbuyInfo());
  }
}
export const fieldChange = (name, value) => {
  return {
    type: actions.BUYINFO_CHANGE,
    data: {
      data: {
        pl: {
          [name]: value
        }
      }
    }
  }
}

export const getbuyInfo = () => {
  return (dispatch, getState) => {
    let uid = document.cookie.split(";")[0].split('=')[1];
    axios.post('http://localhost:3000/buyinfo', qs.stringify({ uid: uid }), {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    })
      .then((res) => {
        dispatch({
          type: actions.BUYINFO_CHANGE,
          data: {
            data: res.data
          }
        });
      }).catch((error) => {
        console.log("出错");
      });
  }
}
export const deleteBuyInfo = (id) => {
  return (dispatch, getState) => {
    axios.post('http://localhost:3000/deleteBuyInfo', qs.stringify({ id: id }), {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    })
      .then((res) => {
        dispatch(getbuyInfo());
      }).catch((error) => {
        console.log("出错");
      });
  }
}
export const userPl = () => {
  return (dispatch, getState) => {
    const state = getState().buyInfo.data.pl|| {}
    let uid = document.cookie.split(";")[0].split('=')[1];
    let wid = state.wid;
    let plcont = state.plcont;
    axios.post('http://127.0.0.1/new/user/userPl', qs.stringify({uid:uid,wid:wid,plcont:plcont}), {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    }).then((res) => {
      console.log(res.data);
      if (res) {
        alert('评论成功');
        dispatch(buyInfo_Init());
      }else{
        alert('评论失败');
      }
    }).catch((error) => {
      console.log("登录失败");
    });
  }
}