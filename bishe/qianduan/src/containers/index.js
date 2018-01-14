import React, { Component } from 'react';
import routes from '../routers';
import {
	BrowserRouter as Router,
	Route,
	Link
} from 'react-router-dom'
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

export default Containers;