import React, { Fragment } from 'react';

import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

const RestaurantInfo = ({
	restaurant, 
	handleInputChange,
	next,
	previous
}) => {

	const { name, description } = restaurant;

	return (
		<Container>
			<Row>
				<Col>
					<h3>Tell us about your restaurant</h3>

				</Col>
			</Row>
			<Form>
				<Form.Row>
			    <Form.Group as={Col} controlId='formGridName'>
			      <Form.Label>Name</Form.Label>
			      <Form.Control 
			      	name='name' 
			      	type='text' 
			      	placeholder='Enter name'
			      	onChange={handleInputChange}
			      	value={name} />
			    </Form.Group>
			  </Form.Row> 

			  <Form.Row>
			    <Form.Group as={Col} controlId='formGridDescription'>
			      <Form.Label>Description</Form.Label>
			      <Form.Control 
			      	name='description' 
			      	as='textarea' 
			      	placeholder='Write a short description about your restaurant and what kind of cuisine customers can expect'
			      	onChange={handleInputChange}
			      	value={description} />
			    </Form.Group>
			  </Form.Row>
			  <Button onClick={previous}>Previous</Button>
			  <Button onClick={next}>Next</Button>
		  </Form>
	  </Container>
	)
}

export default RestaurantInfo