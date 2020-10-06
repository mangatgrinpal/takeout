import React, { Fragment, useEffect } from 'react';
import OrderList from './OrderList';
import OrderView from './OrderView';

import { connect } from 'react-redux';

import { fetchOrders, setSelectedOrder, setOrderStatus } from '../actions/orders';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const OrderPage = ({
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

	const newOrders = orderList.filter(order=> order.status === 'New')
	const ordersInProgress = orderList.filter(order=> order.status === 'In Progress')
	const readyForPickup = orderList.filter(order=> order.status === 'Ready for pickup')



	return (
		<Fragment>
			<Col md={3} className='pt-4'>
				<OrderList 
					restaurant={restaurant}
					orderList={newOrders}
					setSelectedOrder={setSelectedOrder} />
				<OrderList 
					restaurant={restaurant}
					orderList={ordersInProgress}
					setSelectedOrder={setSelectedOrder} />
				<OrderList 
					restaurant={restaurant}
					orderList={readyForPickup}
					setSelectedOrder={setSelectedOrder} />
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
)(OrderPage)