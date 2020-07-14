import React, { Fragment } from 'react';
import Home from './Home';
import Dashboard from './Dashboard';
import Orders from './Orders';
import Menu from './Menu';

import { 
	BrowserRouter as Router,
	Switch,
	Route,
	Link
} from 'react-router-dom';


import Container from 'react-bootstrap/Container';

const App = () => {
	return (
		<Router>
			<nav>
				<ul>
					<li>
						<Link to='/'>
							go home
						</Link>
					</li>
					<li>
						<Link to='/dashboard'>
							go dashboard
						</Link>
					</li>

					<li>
						<Link to='/restaurants'>
							view restaurants
						</Link>
					</li>
				</ul>
			</nav>			
			<Switch>
				<Route exact path ='/'>
					<Home />
				</Route>
				<Route path='/dashboard'>
					<Dashboard />
				</Route>
				
			</Switch>
			
		</Router>	
	)
}

export default App