import React from 'react';

import { Link } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

const OrderConfirmation = () => {
	return (
		<Container>
			<Row>
				<Col>
					<Link className='btn btn-primary' to='/'>Go home</Link>
				</Col>
			</Row>
			<Row>
				<Col>
					<h1>Order successfully placed</h1>
				</Col>
			</Row>
			<Row>
				<Col>
					<p>Thanks for placing your order, you will receive an email shortly.</p>
				</Col>
			</Row>
		</Container>
	)
}


export default OrderConfirmation