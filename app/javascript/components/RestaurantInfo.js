import React, { Fragment } from 'react';

import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

const RestaurantInfo = ({
	restaurant, 
	handleInputChange,
	next,
	previous
}) => {


	return (
		<Fragment>
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
			  
			  <Button onClick={next}>Next</Button>
		  </Form>
	  </Fragment>
	)
}

export default RestaurantInfo