import * as actions from './';
import axios from 'axios';
const qs = require('qs');
export const search_Init = (id) => {
  return (dispatch, getState) => {
    dispatch({
      type: actions.SEARCH_INIT
    });
    dispatch(getSearch(id));
  }
}
export const getSearch = (id) => {
  return (dispatch, getState) => {
    axios.get('http://localhost:3000/search/'+id,{
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
export const getSearch1 = (id) => {
  return (dispatch, getState) => {
    console.log(id)
    axios.get('http://localhost:3000/search/lth/'+id,{
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
export const getSearchByShows = (id) => {
  return (dispatch, getState) => {
    console.log(id)
    axios.get('http://localhost:3000/search/byshows/'+id,{
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
export const getSearchByTime = (id) => {
  return (dispatch, getState) => {
    console.log(id)
    axios.get('http://localhost:3000/search/bytime/'+id,{
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
export const getSearch2 = (id) => {
  return (dispatch, getState) => {
    console.log(id)
    axios.get('http://localhost:3000/search/htl/'+id,{
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
export const doSearch = () => {
  return (dispatch, getState) => {
    const search = getState().search.data || {}
    axios.post('http://localhost:3000/search/doSearch', qs.stringify(search), {
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
