import * as actions from './';
import axios from 'axios';

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
