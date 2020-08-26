import React, { Fragment } from 'react';

import { useHistory } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const ReviewForm = ({
	restaurant,
	previous,
	next,
	addRestaurant,
	imageData,
	currentUser
}) => {

	const { name, description, address1, address2, city, state, zipCode } = restaurant;

	const history = useHistory();

	console.log(history)

	const thumbs = imageData.map(file=> (
		<div className='thumb' key={file.name}>
			<div className='thumb-inner embed-responsive justify-content-end'>
				<img 
					src={file.preview}
					className='thumb-img embed-responsive-item'
				/>
			</div>
		</div>
	));

	const validate = () => {



		return true
	}

	const handleSubmit = e => {
		e.preventDefault();

		const isValid = validate()
		if (isValid) {

			const formData = new FormData();
			formData.append('[restaurant]name', name)
			formData.append('[restaurant]description', description)
			formData.append('[restaurant]image', imageData[0])
			formData.append('[restaurant]user_id', currentUser.id)
			formData.append('[address]street_address', address1)
			formData.append('[address]street_address_2', address2)
			formData.append('[address]city', city)
			formData.append('[address]state', state)
			formData.append('[address]zip_code', zipCode)


			addRestaurant(formData, history)
		}
	}


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
					{address1}
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
			<Row>
				<Col>
					Logo
				</Col>
				<Col className='thumbs-container'>
					{thumbs}
				</Col>
			</Row>
			<Form>
				<Button onClick={previous}>Previous</Button>
				<Button onClick={handleSubmit}>Submit</Button>
			</Form>
		</Container>
	)
}

export default ReviewForm