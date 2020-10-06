import React, { Fragment, useEffect } from 'react';
import OrderList from './OrderList';
import OrderView from './OrderView';


import { connect } from 'react-redux';


import { fetchOrders, setSelectedOrder, setOrderStatus } from '../actions/orders';

import Col from 'react-bootstrap/Col';


const OrderHistory = ({
	fetchOrders,
	setSelectedOrder,
	setOrderStatus,
	restaurants: { restaurant },
	orders: { orderList, selectedOrder }
}) => {

	useEffect(()=> {
		let stringified = JSON.stringify(restaurant.id)
		restaurant ? fetchOrders(stringified) : ''
		
	},[ restaurant ])

	const completedOrders = orderList.filter(order=> order.status === 'Completed')


	return (
		<Fragment>
			<Col md={3} className='pt-4'>
				<OrderList 
					restaurant={restaurant}
					orderList={completedOrders}
					setSelectedOrder={setSelectedOrder}/>
			</Col>
			<OrderView 
				selectedOrder={selectedOrder}
				setSelectedOrder={setSelectedOrder}
				setOrderStatus={setOrderStatus} />
		</Fragment>
	)
}

const mapStateToProps = state => ({
	restaurants: state.restaurants,
	orders: state.orders
})

export default connect(
	mapStateToProps,
{
	fetchOrders,
	setSelectedOrder,
	setOrderStatus
}
)(OrderHistory)