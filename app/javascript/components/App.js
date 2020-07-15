import React, { Fragment } from 'react';
import Navigation from './Navigation';
import Home from './Home';
import Dashboard from './Dashboard';
import RestaurantList from './RestaurantList';
// import UserSignUp from './UserSignUp';
// import UserSignIn from './UserSignIn';

import { 
	BrowserRouter as Router,
	Switch,
	Route,
	Link
} from 'react-router-dom';


import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

const App = () => {
	return (
		<Router>
			<Navigation />
		
			<Switch>
				<Route exact path ='/'>
					<Home />
				</Route>
				<Route path='/dashboard'>
					<Dashboard />
				</Route>
				<Route path='/restaurant-list'>
					<RestaurantList />
				</Route>
{/*
				<Route path='/sign-up'>
					<UserSignUp />
				</Route>

				<Route path='/sign-in'>
					<UserSignIn />
				</Route>
*/}				
			</Switch>
			
		</Router>	
	)
}

export default App