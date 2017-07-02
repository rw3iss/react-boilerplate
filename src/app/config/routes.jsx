import React from "react";
import { Router, Route, Switch } from 'react-router-dom';
import createHashHistory from 'history/createHashHistory';
//import AppContainer from '../components/shared/AppContainer';
import Dashboard from 'components/Dashboard';

const history = createHashHistory();

// import libs
const Routes = () => (
	<Router history={history}>
		<Switch>
		  <Route exact path='/' component={Dashboard}/>
		  <Route exact path='/dashboard' component={Dashboard}/>
		</Switch>
	</Router>
)

export default Routes;
