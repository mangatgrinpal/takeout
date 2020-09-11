import React, { useState, useEffect } from 'react';
import DashboardNav from './DashboardNav';
import OrderList from './OrderList';
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
import { fetchOrders } from '../actions/orders';

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
	restaurants: { restaurantFormVisible, restaurant },
	orders: { orderList }
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
						restaurant={restaurant}
						dashNavVisible={dashNavVisible}
						setDashNavVisible={setDashNavVisible}
					/>
				</CSSTransition>
				<Col md={3} className='bg-light vh-100 position-absolute'>
					<FontAwesomeIcon
					 icon={['fas','bars']}
					 onClick={()=>{setDashNavVisible(true)}}
					 size='2x'/>
					 &nbsp;
					 &nbsp;
					 {currentPageName()}
				</Col>

				

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
					<OrderList 
						restaurant={restaurant}
						fetchOrders={fetchOrders}/>
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
		addRestaurant,
		fetchOrders
	}
)(Dashboard)