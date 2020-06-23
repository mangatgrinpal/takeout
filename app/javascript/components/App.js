import React, { Fragment } from 'react';
import Dashboard from './Dashboard';

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
							home
						</Link>
					</li>
					<li>
						<Link to='/dashboard'>
							go dashboard
						</Link>
					</li>
				</ul>
			</nav>			
			<Switch>
				<Route exact path ='/'>
					<Container>
						<h1>this is the home page.</h1>
					</Container>
				</Route>
				<Route path='/dashboard'>
					<Dashboard />
				</Route>
			</Switch>
			
		</Router>	
	)
}

export default App