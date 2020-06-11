import React, { Fragment } from 'react';

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
						<Link to='/home'>
							go HOME
						</Link>
					</li>
					<li>
						<Link to='/'>
							go back
						</Link>
					</li>
				</ul>
			</nav>			
			<Switch>
				<Route exact path ='/'>
					<Container>
						<h1>Hola mundo</h1>
					</Container>
				</Route>
				<Route path='/home'>
					<Container>
						<h1>Hello World!</h1>
					</Container>
				</Route>
			</Switch>
			
		</Router>	
	)
}

export default App