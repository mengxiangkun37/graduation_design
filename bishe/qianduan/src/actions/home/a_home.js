import * as actions from './';
import axios from 'axios';

export const home_Init = () => {
  return (dispatch, getState) => {
    dispatch({
      type: actions.HOME_INIT
    });
    dispatch(gethome());
  }
}
export const gethome = () => {
  return (dispatch, getState) => {
    axios.get('http://localhost:3000/home',{
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    })
      .then((res) => {
        dispatch({
          type: actions.HOME_CHANGE,
          data: {
            data: res.data
          }
        });
      }).catch((error) => {
        console.log("出错");
      });
  }
}
