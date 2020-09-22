import React,{ Fragment } from 'react';
import OrderList from './OrderList';

import { connect } from 'react-redux';

const OrderPage = ({
	restaurant,
	fetchOrders,
	orderList,
	selectedOrder,
	setSelectedOrder,
	setOrderStatus
}) => {
	return (
		<OrderList 
			restaurant={restaurant}
			fetchOrders={fetchOrders}
			orderList={orderList}
			selectedOrder={selectedOrder}
			setSelectedOrder={setSelectedOrder}
			setOrderStatus={setOrderStatus}/>
	)
}

const mapStateToProps = state => ({

})

export default connect(
	mapStateToProps,
{

}
)(OrderPage)