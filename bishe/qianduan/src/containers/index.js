import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from './../actions';
import routes from '../routers';
import {
	BrowserRouter as Router,
	Route,
	Link
} from 'react-router-dom';
class Containers extends Component {
  constructor(props) {
    super(props);
   
}
  render() {
   
    return (
     	<div>
          {routes.map((route, i) => (
             <Route key={i} path={route.path} render={props => (
              <route.component {...props} routes={route.routes}/>
            )}/>
          ))}
     	</div>
    );
  }
}
export default connect((store) => {
  return {
    common: store.common
  }
}, {
  ...actions
})(Containers);
