import React, { Fragment, useEffect, useState } from 'react';

import OrderListSection from './OrderListSection';

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col';

const OrderList = ({
	restaurant,
	fetchOrders,
	orderList
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

	return (
		<Fragment>
			<Col md={3} className='pt-5'>
				<h1>Hello</h1>
			</Col>
			<Col md={{span: 9}}>
				<Row>
					<Col md={12}>
						<h1>View orders</h1>
					</Col>
				</Row>
				<Row>
					<Col md={12}>
						<OrderListSection/>
					</Col>
				</Row>
			</Col>

			


		</Fragment>
		
		
	)	
}

export default OrderList