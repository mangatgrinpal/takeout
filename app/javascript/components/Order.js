import React, { useState } from 'react';

import { connect } from 'react-redux';

import { useParams, useHistory } from 'react-router-dom';

import { removeItemFromOrder } from '../actions/orders';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Order = ({
	removeItemFromOrder,
	orders: { bag, total }
}) => {

	const history = useHistory();

	const back = () => {
		history.goBack();
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
						{bag.length > 0 ? bag.length : ''}
					</Badge>
				</Col>
			</Row>
			<Row>
				<Col md={{span: 10, offset: 1}}>
					<h1 className='text-center'> Order Details</h1>

				</Col>
			</Row>
			<Row>
				<Col md={9}>
					<h6>
						View your order details on the right.
						</h6>
				</Col>
				<Col md={{span: 3,offset: 0}}>
					{bag.length > 0 ? bag.map(item=>{
						return(
							<Row key={item.id} className='border justify-content-around'>
								<Col>
									{item.name}&nbsp;x&nbsp;{item.quantity}
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
							Items subtotal: {total}
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
		removeItemFromOrder
	}
)(Order)