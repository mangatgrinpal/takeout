import React from 'react';
import Orders from './Orders';
import Menu from './Menu';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import { connect } from 'react-redux';

import { userSignOut } from '../actions/users';

import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link,
	useParams,
	useRouteMatch,
	useHistory
} from 'react-router-dom';

const Dashboard = ({
	userSignOut,
	users: { currentUser }
}) => {

	let { path, url } = useRouteMatch();
	const history = useHistory();

	return (
		<Container>
			<Row>
				<Col>
					<h1>Hello Dashboard</h1>
					{ currentUser &&
					<Button onClick={()=>{userSignOut(history)}}> Sign Out</Button>
					}
				</Col>
			</Row>
			
			<ul>
				<li>
					<Link to={`${url}/orders`}>View Orders</Link>
				</li>
				<li>
					<Link to={`${url}/menu`}>View Menu</Link>
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

const mapStateToProps = state => ({
	users: state.users
})

export default connect(
	mapStateToProps,
	{userSignOut}
	)(Dashboard)