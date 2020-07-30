import React from 'react';
import DashboardNav from './DashboardNav';
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
		<Container fluid={true}>
			<Row>
			<DashboardNav 
				url={url}
				userSignOut={userSignOut}
				history={history}
				currentUser={currentUser}
			/>
				<Col md={{span: 9, offset: 3}}>

					
				</Col>
			</Row>

			<Switch>
				<Route exact path={`${path}/orders`}>
					<Orders />
				</Route>
				<Route exact path={`${path}/menu`}>
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