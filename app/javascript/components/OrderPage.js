import React, { Fragment, useEffect } from 'react';
import OrderList from './OrderList';
import OrderView from './OrderView';

import { connect } from 'react-redux';

import { fetchOrders, setSelectedOrder, setOrderStatus } from '../actions/orders';

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


	return (
		<Fragment>
			<OrderList 
				restaurant={restaurant}
				fetchOrders={fetchOrders}
				orderList={orderList}
				setSelectedOrder={setSelectedOrder} />

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