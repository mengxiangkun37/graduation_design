import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.less';
import Containers from './containers';
import registerServiceWorker from './registerServiceWorker';
import {
    BrowserRouter as Router,
    Route,
    Link
  } from 'react-router-dom'
ReactDOM.render(  
    <Router>
    <Route  component={Containers}/>
    </Router>, document.getElementById('root')
    );
registerServiceWorker();
