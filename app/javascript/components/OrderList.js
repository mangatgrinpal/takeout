import React, { useEffect, useState } from 'react';

import Col from 'react-bootstrap/Col';

const OrderList = ({
	restaurant,
	fetchOrders
}) => {



	useEffect(()=> {

		let stringified = JSON.stringify(restaurant.id)
		restaurant ? fetchOrders(stringified) : ''
		
	},[ restaurant ])

	return (
		<Col md={{span: 9, offset: 3}}>
			<h1>Order page foo</h1>
		</Col>
	)	
}

export default OrderList