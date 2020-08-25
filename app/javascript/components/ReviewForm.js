import React, { Fragment } from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

const ReviewForm = ({
	restaurant,
	previous,
	next
}) => {

	const { name, description, address, address2, city, state, zipCode } = restaurant;

	console.log(restaurant)
	return (
		<Container>
			<Row>
				<Col>
					<h3>Confirm details</h3>
				</Col>
			</Row>
			<Row>
				<Col>
					<p>If everything looks correct, press submit below.</p>
				</Col>
			</Row>
			<Row>
				<Col>
					Name
				</Col>
				<Col>
					{name}
				</Col>
			</Row>
			<Row>
				<Col>
					description
				</Col>
				<Col>
					{description}
				</Col>
			</Row>
			<Row>
				<Col>
					address
				</Col>
				<Col>
					{address}
				</Col>
			</Row>
			<Row>
				<Col>
					address 2
				</Col>
				<Col>
					{address2}
				</Col>
			</Row>
			<Row>
				<Col>
					city
				</Col>
				<Col>
					{city}
				</Col>
			</Row>

			<Row>
				<Col>
					state
				</Col>
				<Col>
					{state}
				</Col>
			</Row>
			<Row>
				<Col>
					zip Code
				</Col>
				<Col>
					{zipCode}
				</Col>
			</Row>
			<Button onClick={previous}>Previous</Button>
			<Button onClick={next}>Submit</Button>
		</Container>
	)
}

export default ReviewForm