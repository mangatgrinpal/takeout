import React, { Fragment, useEffect, useState } from 'react';

import OrderListSection from './OrderListSection';

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col';

const OrderList = ({
	restaurant,
	fetchOrders,
	orderList,
	setSelectedOrder,
	selectedOrder
}) => {



	useEffect(()=> {

		let stringified = JSON.stringify(restaurant.id)
		restaurant ? fetchOrders(stringified) : ''
		
	},[ restaurant ])

	const statuses = [
		'New', 
		'In Progress', 
		'Ready for Pickup', 
		'Completed', 
		'Cancelled'
	]

	const newOrders = orderList.filter(order=> order.status === 'New')

	return (
		<Fragment>
			<Col md={3} className='pt-4'>
				<Row>
					<Col className='border'>
						New orders
					</Col>
				</Row>
				{newOrders.map(order=> {
					return (
						<Row key={order.id}>
							<Col className='border border-top-0' onClick={()=>{setSelectedOrder(order.id)}}>
								{order.customer.first_name} {order.customer.last_name.charAt(0)}
							</Col>
						</Row>
					)
				})}
			</Col>
			<Col md={{span: 9, offset: 3}} className='position-fixed'>
				<Row>
					<Col md={12}>
						<h1>View orders</h1>
					</Col>
				</Row>
				<Row>
					<Col md={12}>
						{selectedOrder && selectedOrder[0].order_number}
					</Col>
				</Row>
			</Col>

			


		</Fragment>
		
		
	)	
}

export default OrderList