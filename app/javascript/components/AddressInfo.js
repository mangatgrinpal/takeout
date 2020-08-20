import React, { Fragment } from 'react';

import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';



const AddressInfo = ({
	restaurant,
	handleInputChange,
	previous,
	next
}) => {
	return (
		<Form>
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
			<Button onClick={previous}>Previous</Button>
			<Button onClick={next}>Next</Button>
		</Form>

	)
}

export default AddressInfo