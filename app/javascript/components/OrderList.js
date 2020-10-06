import React, { Fragment, useEffect, useState } from 'react';

import moment from 'moment';

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

const OrderList = ({
	restaurant,
	orderList,
	setSelectedOrder
}) => {

	return (
		<Fragment>			
			{orderList.length > 0 &&
				<Row>
					<Col className='border'>
						{orderList[0].status}
					</Col>
				</Row>
			}
			{orderList.map(order=> {
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
		</Fragment>
		
		
	)	
}

export default OrderList