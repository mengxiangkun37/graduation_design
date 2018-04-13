import {
  combineReducers
} from 'redux';

import common from './login/r_login';
import home from './home/r_home';
import search from './search/r_search';
import single from './single/r_single';
import personal from './personal/r_personal';
export default () => {
  return combineReducers({
    common,
    home,
    search,
    single,
    personal
  })
}