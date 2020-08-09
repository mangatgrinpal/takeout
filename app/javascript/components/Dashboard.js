import React, { useState } from 'react';
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
	useHistory,
	useLocation
} from 'react-router-dom';

import { CSSTransition } from 'react-transition-group';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Dashboard = ({
	userSignOut,
	users: { currentUser }
}) => {

	let { path, url } = useRouteMatch();
	const history = useHistory();
	const location = useLocation();

	const [ dashNavVisible, setDashNavVisible ] = useState(false)



	const currentPage = () => {
		let res = location.pathname.split('/')
		let page = res.slice(-1)[0]
		
		let currentPage = page.charAt(0).toUpperCase() + page.slice(1)

		return currentPage
	}

	return (
		<Container fluid={true}>
			<Row>
				<CSSTransition
					in={dashNavVisible}
					timeout={600}
					unmountOnExit
					classNames='slide-right'
				>
					<DashboardNav 
						url={url}
						userSignOut={userSignOut}
						history={history}
						dashNavVisible={dashNavVisible}
						setDashNavVisible={setDashNavVisible}
					/>
				</CSSTransition>
				<Col md={3} className='bg-light h-100'>
					<FontAwesomeIcon
					 icon={['fas','bars']}
					 onClick={()=>{setDashNavVisible(true)}}
					 size='2x'/>
					 &nbsp;
					 {currentPage()}
				</Col>
				
			

			<Switch>
				<Route exact path={`${path}/orders`}>
					<Orders />
				</Route>
				<Route exact path={`${path}/menu`}>
					<Menu />
				</Route>

			</Switch>
			</Row>
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