import React from 'react';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

const OrderView = ({
	selectedOrder,
	setSelectedOrder,
	setOrderStatus
}) => {
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

				<Button 
					className='mx-5 mt-5' 
					onClick={()=>{setOrderStatus(selectedOrder[0].id, 'In Progress')}}
					block>
					Confirm order sent to kitchen
				</Button>
			</Row>
		</Col>
	)	
}

export default OrderView