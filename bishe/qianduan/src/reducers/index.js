import {
  combineReducers
} from 'redux';
import reg from './reg/r_reg';
import common from './login/r_login';
import home from './home/r_home';
import search from './search/r_search';
import single from './single/r_single';
import personal from './personal/r_personal';
import collection from './personal/r_collection';
import buyInfo from './personal/r_buyinfo';
import shops from './backstage/r_shops';
import user from './backstage/r_user';
import order from './backstage/r_order';
import buys from './business/r_buys';
import per from './business/r_per';
import ups from './business/r_ups';
export default () => {
  return combineReducers({
    reg,
    common,
    home,
    search,
    single,
    personal,
    collection,
    buyInfo,
    shops,
    user,
    order,
    buys,
    per,
    ups
  })
}