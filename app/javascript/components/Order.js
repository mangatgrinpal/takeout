import React, { useState } from 'react';

import CustomerInfoForm from './CustomerInfoForm';

import { connect } from 'react-redux';

import { useParams, useHistory } from 'react-router-dom';

import { 
	removeItemFromOrder,
	addQuantityToOrder,
	subtractQuantityFromOrder,
	submitOrder
} from '../actions/orders';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Order = ({
	removeItemFromOrder,
	addQuantityToOrder,
	subtractQuantityFromOrder,
	submitOrder,
	orders: { bag, total }
}) => {

	const history = useHistory();

	const back = () => {
		history.goBack();
	}

	const totalQuantity = () => {
		return bag.reduce((acc,obj) => { return acc + obj.quantity; }, 0)
	}

	return (
		<Container fluid>
			<Row>
				<Col>
					<Button onClick={back}>
						Go back
					</Button>
				</Col>
				<Col className='text-right pr-5'>
					<FontAwesomeIcon 
						icon={['fas','shopping-bag']}
						size='2x'/>
					<Badge pill variant='success'>
						{bag.length > 0 ? totalQuantity() : ''}
					</Badge>
				</Col>
			</Row>
			<Row>
				<Col md={{span: 10, offset: 1}}>
					<h1 className='text-center'> Order Details</h1>

				</Col>
			</Row>
			<Row>
				{bag.length === 0 ? '' :

				<Col md={8}>
					<h6>View your order details on the right.</h6>
					<p>If everything is correct, please provide a name and email for your order.
					</p>
					<p>
					You may also optionally include your phone number to make it easier for the 
					business to contact you about any issues with your order.
					</p>
					<CustomerInfoForm 
						bag={bag} 
						total={total}
						submitOrder={submitOrder}/>
				</Col>

			}
				
				<Col md={{span: 4,offset: 0}}>
					{bag.length > 0 ? bag.map(item=>{
						return(
							<Row key={item.id} className='border justify-content-around'>
								<Col md={6}>
									{item.name}&nbsp;x&nbsp;
								</Col>
								<Col>
									<Button onClick={()=>{subtractQuantityFromOrder(item)}}>
										-
									</Button>
									&nbsp;
									{item.quantity}
									&nbsp;
									<Button onClick={()=>{addQuantityToOrder(item)}}>
										+
									</Button>
								</Col>
								<Col>
									{item.price}&nbsp;
									<Button onClick={()=>{removeItemFromOrder(item)}}>
										X
									</Button>
								</Col>
							</Row>
						)
					}) : 'You have no items in your cart'}
					<Row>
						<Col>
							Items subtotal ({totalQuantity()} items): ${bag.length === 0 ? '0.00' : total.toFixed(2)}
						</Col>
					</Row>
				</Col>
			</Row>
		</Container>
		

	)
}

const mapStateToProps = state => ({
	orders: state.orders
})

export default connect(
	mapStateToProps,
	{
		removeItemFromOrder,
		addQuantityToOrder,
		subtractQuantityFromOrder,
		submitOrder
	}
)(Order)