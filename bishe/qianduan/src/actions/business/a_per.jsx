import * as actions from './';
import axios from 'axios';
const qs = require('qs');
export const per_Init = () => {
  return (dispatch, getState) => {
    dispatch({
      type: actions.PER_INIT
    });
    dispatch(getPer());
  }
}
export const fieldChange = (name, value) => {
  return {
    type: actions.FIELD_CHANGE,
    data: {
      data: {
        per:{
          [name]: value
        }
      }
    }
  }
}

export const getPer = () => {                         //获取商家信息
  return (dispatch, getState) => {
    let bid = document.cookie.split(";")[0].split('=')[1];
    axios.post('http://localhost:3000/per', qs.stringify({ bid: bid }), {
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

export const changePer = () => {                      //修改商家信息
  return (dispatch, getState) => {
    const state = getState().per.data.per || {}
    console.log(state)
    axios.post('http://localhost:3000/changePer', qs.stringify(state), {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    })
      .then((res) => {
        console.log(res.data)
        if(res.data){
          alert('修改成功');
        }else{
          alert('修改失败');
        }
        dispatch(getPer());
      }).catch((error) => {
        console.log("出错");
      });
  }
}