import * as actions from './';
import axios from 'axios';
const qs = require('qs');
export const ups_Init = () => {
  return (dispatch, getState) => {
    dispatch({
      type: actions.UPS_INIT,
      data: {
        data: {
          ups:{
            bid:'',
            wtitle:'',
            wprice:'',
            wcon:'',
            wpic:'',
            kucun:''
          }
        }
      }
    });
    dispatch(upsGetGoods());
  }
}
export const fieldChange = (name, value) => {
  return {
    type: actions.FIELD_CHANGE,
    data: {
      data: {
        ups:{
          [name]: value
        }
      }
    }
  }
}
export const upsGetGoods = () => {                       //获取列表
  return (dispatch, getState) => {
    axios.get('http://127.0.0.1/new/user/upsGetGoods',{
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


export const upsGoods = () => {                      //上传商品
  return (dispatch, getState) => {
    const state = getState().ups.data.ups || {}
    console.log(state.wpic)
    var formdata = new FormData(); 
    formdata.append('file',state.wpic);
    formdata.append('wtitle',state.wtitle);
    formdata.append('wcon',state.wcon);
    formdata.append('kucun',state.kucun);
    formdata.append('wprice',state.wprice);
    formdata.append('bid',state.bid);
    formdata.append('cid',state.cid);
    axios.post('http://127.0.0.1/new/user/upsGoods', formdata, {
      headers: {
        'Content-Type': ' multipart/form-data '
      }
    })
      .then((res) => {
        console.log(res.data)
        if(res.data===true){
            alert('上传成功');
        }else{
            alert('上传失败');
        }
        dispatch(ups_Init());
      }).catch((error) => {
        console.log("出错");
      });
  }
}