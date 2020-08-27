import React, { Fragment } from 'react';

import { Provider } from 'react-redux';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';

library.add(fas, far)

import Navigation from './Navigation';
import Home from './Home';
import Dashboard from './Dashboard';
import RestaurantList from './RestaurantList';
import Menu from './Menu';
import UserSignUp from './UserSignUp';
import UserSignIn from './UserSignIn';
import PrivateRouteWrapper from './PrivateRouteWrapper';
import PublicRoute from './PublicRoute';

import { 
	BrowserRouter as Router,
	Switch,
	Route,
	Link,
	withRouter
} from 'react-router-dom';


import { store } from '../store';

const App = () => {
	
	
	return (
		<Provider store={store}>
			<Router>
				<Switch>

					<PrivateRouteWrapper path='/dashboard'>
						<Dashboard />
					</PrivateRouteWrapper>

					<PublicRoute exact path='/' component={Home} />
					<PublicRoute exact path='/restaurant-list' component={RestaurantList} />
					<PublicRoute exact path='/menu/:restaurantId' component={Menu}/>
					<PublicRoute exact path='/sign-up' component={UserSignUp} />
					<PublicRoute exact path='/sign-in' component={UserSignIn} />
				</Switch>
				
			</Router>			
		</Provider>
		
	)
}

export default App