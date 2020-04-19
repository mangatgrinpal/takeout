import React, { Fragment } from 'react';

import { 
	BrowserRouter as Router,
	Switch,
	Route,
	Link
} from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

import Container from 'react-bootstrap/Container';

const App = () => {
	return (
		<Router>
			<Container>
				<h1>Hello World!</h1>
			</Container>
		</Router>	
	)
}

export default App