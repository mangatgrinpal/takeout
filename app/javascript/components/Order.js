import React, { useState } from 'react';

import { connect } from 'react-redux';

import { useParams } from 'react-router-dom';

import { removeItemFromOrder } from '../actions/orders';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

const Order = ({
	removeItemFromOrder,
	orders: { bag }
}) => {

	return (
		<Container>
			<Row>
				<Col>
					<h1> Order Details</h1>

				</Col>
			</Row>
			<Row>
				<Col md={{span: 3,offset: 9}}>
					{bag.length > 0 ? bag.map(item=>{
						return(
							<Row>
								<Col>
									{item.name}
									<Button onClick={()=>{removeItemFromOrder(item.id)}}>
										Remove Item
									</Button>
								</Col>
							</Row>
						)
					}) : 'You have no items in your cart'}
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