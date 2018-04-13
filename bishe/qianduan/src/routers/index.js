import Login from '../containers/login';
import Reg from '../containers/reg';
import Home from '../containers/home';
import Search from '../containers/search';
import Info from '../containers/personal/mine';
import Single from '../containers/single';
export default [
  {
    path: '/home',
    component: Home
  },
  {
    path: '/reg',
    component: Reg
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/search/:id',
    component: Search
  },
  {
    path: '/info',
    component: Info
  },
  {
    path: '/single/:id',
    component: Single
  }
]