import React, { useState } from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';


const RestaurantForm = () => {

	const [ restaurant, setRestaurant ] = useState({
		name:'',
		description: '',
		address: '',
		address2: '',
		city: '',
		state: '',
		zipCode: ''
	});

	const handleInputChange = e => {
		setRestaurant({...restaurant, [e.target.name]: e.target.value})
	}

	return (
		<Container>
			<Row>
				<Col>
					<h6>Add your restaurant information</h6>
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
			      	value={restaurant.name} />
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
			      	value={restaurant.description} />
			    </Form.Group>
			  </Form.Row>

			  <Form.Group controlId='formGridAddress1'>
			    <Form.Label>Address</Form.Label>
			    <Form.Control 
			    	name='address' 
			    	placeholder='1234 Main St'
			    	onChange={handleInputChange}
			    	value={restaurant.address} />
			  </Form.Group>

			  <Form.Group controlId='formGridAddress2'>
			    <Form.Label>Address 2</Form.Label>
			    <Form.Control 
			    	name='address2' 
			    	placeholder='Apartment, studio, or floor'
			    	onChange={handleInputChange}
			    	value={restaurant.address2} />
			  </Form.Group>

			  <Form.Row>
			    <Form.Group as={Col} controlId='formGridCity'>
			      <Form.Label>City</Form.Label>
			      <Form.Control 
			      	name='city'
			      	onChange={handleInputChange}
			      	value={restaurant.city} />
			    </Form.Group>

			    <Form.Group as={Col} controlId='formGridState'>
			      <Form.Label>State</Form.Label>
			      <Form.Control 
			      	name='state' 
			      	as='select' 
			      	onChange={handleInputChange}
			      	value={restaurant.state}>
			        <option>Choose...</option>
			        <option>...</option>
			      </Form.Control>
			    </Form.Group>

			    <Form.Group as={Col} controlId='formGridZip'>
			      <Form.Label>Zip</Form.Label>
			      <Form.Control 
			      	name='zipCode'
			      	onChange={handleInputChange}
			      	value={restaurant.zipCode} />
			    </Form.Group>
			  </Form.Row>

			  <Button variant='primary' type='submit'>
			    Submit
			  </Button>
			</Form>
		</Container>
	)
}

export default RestaurantForm