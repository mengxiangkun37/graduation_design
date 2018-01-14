
import Login from '../containers/login';
import Reg from '../containers/reg';
import Home from '../containers/home';
import Search from '../containers/search';
import Info from '../containers/personal/mine';

export default  [
    { path: '/reg',
      component: Reg
    },
    { path: '/login',
      component: Login
    },
    { path: '/home',
      component: Home
    },
    { path: '/search',
      component: Search
    },
    { path: '/info',
      component: Info
    }
  ]