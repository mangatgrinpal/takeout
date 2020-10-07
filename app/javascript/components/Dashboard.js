import React, { useState, useEffect } from 'react';
import DashboardNav from './DashboardNav';
import OrderPage from './OrderPage';
import OrderHistory from './OrderHistory';
import Inventory from './Inventory';
import MenuItemForm from './MenuItemForm';
import MultiStepRestaurantForm from './MultiStepRestaurantForm';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import { connect } from 'react-redux';

import { userSignOut } from '../actions/users';

import { fetchRestaurant, addRestaurant } from '../actions/restaurants';

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
	fetchRestaurant,
	addRestaurant,
	fetchOrders,
	users: { currentUser, isAuthenticated },
	restaurants: { restaurantFormVisible, restaurant }
}) => {

	let { path, url } = useRouteMatch();
	const history = useHistory();
	const location = useLocation();

	const [ dashNavVisible, setDashNavVisible ] = useState(false)

	useEffect(()=>{
		
		fetchRestaurant(currentUser.id)

	},[]);


	const currentPageName = () => {
		let res = location.pathname.split('/')
		let page = res.slice(-1)[0]
		
		let pageCapitalized = page.charAt(0).toUpperCase() + page.slice(1)

		return pageCapitalized
	}



	return (
		<Container fluid={true}>
			<Row className='vh-100 overflow-auto'>
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
						restaurant={restaurant}
						dashNavVisible={dashNavVisible}
						setDashNavVisible={setDashNavVisible}
					/>
				</CSSTransition>
				<Col md={3} className='bg-light position-fixed border-bottom border-right' style={{'zIndex': 1}}>
					<FontAwesomeIcon
						className='border rounded mx-1 px-1 toggle-dashnav-icon'
						icon={['fas','bars']}
						onClick={()=>{setDashNavVisible(!dashNavVisible)}}
						size='2x'/>
						&nbsp;
						&nbsp;
					 {currentPageName()}
				</Col>
				<CSSTransition
					in={dashNavVisible}
					timeout={600}
					unmountOnExit
					classNames='fade'>
					<Col  
						md={{span: 9, offset: 3}}
						onClick={()=>{setDashNavVisible(false)}}
						className='vh-100 dashboard-overlay position-fixed'/>
				</CSSTransition>


				

			<Switch>
				<Route exact path={`${path}`}>
					
					<CSSTransition
						in={restaurantFormVisible}
						timeout={600}
						unmountOnExit
						classNames='complete-fade'
					>
						<Col md={{span: 6, offset: 3}} className='fixed-top bg-light h-100'>
							<MultiStepRestaurantForm 
								addRestaurant={addRestaurant} 
								currentUser={currentUser}/>
						</Col>
					</CSSTransition>
				
				</Route>
				<Route exact path={`${path}/orders`}>
					<OrderPage />
				</Route>
				<Route exact path={`${path}/order_history`}>
					<OrderHistory />
				</Route>
				<Route exact path={`${path}/menu`}>
					<Inventory 
						restaurant={restaurant}/>
				</Route>

			</Switch>
			</Row>
		</Container>		
		
	)
}

const mapStateToProps = state => ({
	users: state.users,
	restaurants: state.restaurants,
	orders: state.orders
})

export default connect(
	mapStateToProps,
	{
		userSignOut,
		fetchRestaurant,
		addRestaurant
	}
)(Dashboard)