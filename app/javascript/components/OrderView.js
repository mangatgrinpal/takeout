import React, { useState } from 'react';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

const OrderView = ({
	selectedOrder,
	setSelectedOrder,
	setOrderStatus
}) => {



	const handleClick = () => {
		console.log(selectedOrder)
		const order = selectedOrder.length > 0 ? selectedOrder[0] : ''
		const { id, status } = order;
		switch (status) {
			case 'New':
				setOrderStatus(id, 'In Progress')
				break
			case 'In Progress':
				setOrderStatus(id, 'Ready for pickup')
				break
			case 'Ready for pickup':
				setOrderStatus(id, 'Completed')
				break
				// I previously didn't havbe these breaks so when I set the status of a 
				// order with the status of New it went to In progress and hit the conditionl
				// and 
		}
		// setOrderStatus(selectedOrder[0].id, 'In Progress')
	}

	const handleCancel = () => {
		const order = selectedOrder.length > 0 ? selectedOrder[0] : ''
		const { id, status } = order;
		setOrderStatus(id, 'Cancelled')

	}

	const buttonText = () => {
		const order = selectedOrder.length > 0 ? selectedOrder[0] : ''
		const { id, status } = order;
		let text;
		switch (status) {
			case 'New':
				text = 'Confirm order was sent to kitchen'
				break
			case 'In Progress':
				text = 'Mark order as ready for pickup'
				break
			case 'Ready for pickup':
				text = 'Confirm order has been picked up'
				break
				// I previously didn't havbe these breaks so when I set the status of a 
				// order with the status of New it went to In progress and hit the conditionl
				// and 
		}

		return text
	}


	return (
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

				{selectedOrder.length > 0 && selectedOrder[0].status === 'New' ?
				<Button
					variant='danger'
					className='mx-5 mt-5'
					onClick={handleCancel}
					block>
				 Cancel
				</Button>
				 : <div/>
				}
				{selectedOrder.length > 0 && selectedOrder[0].status != 'Completed' || 'Cancelled' ?
					<div/>	
				: 
				
				<Button 
					className='mx-5 mt-5' 
					onClick={handleClick}
					block>
					{buttonText()}
				</Button>
				}
				
			</Row>
		</Col>
	)	
}

export default OrderView