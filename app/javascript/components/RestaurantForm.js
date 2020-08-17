import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';


const RestaurantForm = () => {
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
			      <Form.Control type='text' placeholder='Enter name' />
			    </Form.Group>
			  </Form.Row> 

			  <Form.Row>
			    <Form.Group as={Col} controlId='formGridDescription'>
			      <Form.Label>Description</Form.Label>
			      <Form.Control as='textarea' placeholder='Write a short description about your restaurant and what kind of cuisine customers can expect' />
			    </Form.Group>
			  </Form.Row>

			  <Form.Group controlId='formGridAddress1'>
			    <Form.Label>Address</Form.Label>
			    <Form.Control placeholder='1234 Main St' />
			  </Form.Group>

			  <Form.Group controlId='formGridAddress2'>
			    <Form.Label>Address 2</Form.Label>
			    <Form.Control placeholder='Apartment, studio, or floor' />
			  </Form.Group>

			  <Form.Row>
			    <Form.Group as={Col} controlId='formGridCity'>
			      <Form.Label>City</Form.Label>
			      <Form.Control />
			    </Form.Group>

			    <Form.Group as={Col} controlId='formGridState'>
			      <Form.Label>State</Form.Label>
			      <Form.Control as='select' defaultValue='Choose...'>
			        <option>Choose...</option>
			        <option>...</option>
			      </Form.Control>
			    </Form.Group>

			    <Form.Group as={Col} controlId='formGridZip'>
			      <Form.Label>Zip</Form.Label>
			      <Form.Control />
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