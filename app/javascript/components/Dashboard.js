import React from 'react';
import Orders from './Orders';
import Menu from './Menu';
import Container from 'react-bootstrap/Container';

import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link,
	useParams,
	useRouteMatch
} from 'react-router-dom';

const Dashboard = () => {

	let { path, url } = useRouteMatch();

	return (
		<Container>
			<h1>Hello Dashboard</h1>

			<ul>
				<li>
					<Link to={`${url}/orders`}>Orders</Link>
				</li>
				<li>
					<Link to={`${url}/menu`}>Menu</Link>
				</li>
			</ul>

			<Switch>
				<Route exact path={path}>
					<h3>What would you like to do today?</h3>
				</Route>
				<Route path={`${path}/orders`}>
					<Orders />
				</Route>
				<Route path={`${path}/menu`}>
					<Menu />
				</Route>
			</Switch>
		</Container>		
		
	)
}

export default Dashboard