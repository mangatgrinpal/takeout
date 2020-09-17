import React, { Fragment, useEffect, useState } from 'react';

import OrderListSection from './OrderListSection';

import moment from 'moment';

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

const OrderList = ({
	restaurant,
	fetchOrders,
	orderList,
	setSelectedOrder,
	selectedOrder,
	setOrderStatus
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
	const ordersInProgress = orderList.filter(order=> order.status === 'In Progress')

	

	return (
		<Fragment>
			<Col md={3} className='pt-4'>
				<Row>
					<Col className='border'>
						New orders
					</Col>
				</Row>
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
				<Row>
					<Col>
						In Progress
					</Col>
				</Row>
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
			<Col md={{span: 9, offset: 3}} className='position-fixed'>
				<Row>
					<Col md={12}>
						<h1>Order Details</h1>
					</Col>
				</Row>
				<Row>
					<Col md={12} className='border vh-50 overflow-auto'>
						<Row>
							<Col>
								Order number: {selectedOrder.length == 1 && selectedOrder[0].order_number}
							</Col>
							<Col>
								Received at: {selectedOrder.length == 1 && selectedOrder[0].time_placed}
							</Col>
						</Row>
						{selectedOrder.length == 1 && selectedOrder[0].order_items.map(orderItem=>{
							const item = selectedOrder[0].items.filter(item=> item.id == orderItem.item_id)
							return (
								<Row key={item[0].id}>
									<Col>
										{item[0].name} x {orderItem.quantity}
									</Col>
									<Col>
										{item[0].price}
									</Col>
								</Row>
							)
						})}
					</Col>
				</Row>
				<Row>

					<Button 
						className='mx-5 mt-5' 
						onClick={()=>{setOrderStatus(selectedOrder[0].id, 'In Progress')}}
						block>
						Confirm order sent to kitchen
					</Button>
				</Row>
			</Col>

			


		</Fragment>
		
		
	)	
}

export default OrderList