import React, { Fragment, useEffect } from 'react';
import OrderList from './OrderList';
import OrderView from './OrderView';


import { connect } from 'react-redux';


import { fetchOrders } from '../actions/orders';


const OrderHistory = ({
	fetchOrders,
	restaurants: { restaurant },
	orders: { orderList, selectedOrder }
}) => {

	useEffect(()=> {
		let stringified = JSON.stringify(restaurant.id)
		restaurant ? fetchOrders(stringified) : ''
		
	},[ restaurant ])


	return (
		<Fragment>
			<OrderList />
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
	fetchOrders
}
)(OrderHistory)