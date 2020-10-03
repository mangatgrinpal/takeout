import React, { Fragment, useEffect, useState } from 'react';

import moment from 'moment';

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

const OrderList = ({
	restaurant,
	fetchOrders,
	orderList,
	setSelectedOrder
}) => {


	const statuses = [
		'New', 
		'In Progress', 
		'Ready for Pickup', 
		'Completed', 
		'Cancelled'
	]

	const newOrders = orderList.filter(order=> order.status === 'New')
	const ordersInProgress = orderList.filter(order=> order.status === 'In Progress')

	return (
		<Fragment>
			<Col md={3} className='pt-4'>
				{newOrders.length > 0 &&
					<Row>
						<Col className='border'>
							New orders
						</Col>
					</Row>
				}
				{newOrders.map(order=> {
					const timeElapsed = moment(order.created_at).fromNow();

					return (
						<Row key={order.id} className='order-list my-1'>
							<Col className='border' onClick={()=>{setSelectedOrder(order.id)}}>
								{order.customer.first_name} {order.customer.last_name.charAt(0)}
							
							<span className='text-right d-block'>
								{timeElapsed}
							</span>
							</Col>
							
						</Row>
					)
				})}
				{ordersInProgress.length > 0 && 
					<Row>
						<Col>
							In Progress
						</Col>
					</Row>
				}
				
				{ordersInProgress.map(order=> {
					const timeElapsed = moment(order.created_at).fromNow();

					return (
						<Row key={order.id} className='order-list my-1'>
							<Col className='border' onClick={()=>{setSelectedOrder(order.id)}}>
								{order.customer.first_name} {order.customer.last_name.charAt(0)}
							
							<span className='text-right d-block'>
								{timeElapsed}
							</span>
							</Col>
							
						</Row>
					)
				})}
			</Col>
			

			


		</Fragment>
		
		
	)	
}

export default OrderList