import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.less';
import Containers from './containers';
import { Provider } from 'react-redux';
import registerServiceWorker from './registerServiceWorker';
import {
    BrowserRouter as Router,
    Route
  } from 'react-router-dom';
  import storeCreate from './store';
  let store = storeCreate();
ReactDOM.render(  
    <Provider store={store}> 
    <Router>
    <Route  component={Containers}/>
    </Router>
    </Provider>,
    document.getElementById('root')
    );
registerServiceWorker();
