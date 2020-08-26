import React, { Fragment } from 'react';

import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';



const AddressInfo = ({
	restaurant,
	handleInputChange,
	previous,
	next
}) => {

	const { address1, address2, city, state, zipCode } = restaurant

	return (
		<Fragment>
			<Row>
				<Col>
					<h3>Where is it located?</h3>
				</Col>
			</Row>
			<Form>
				<Form.Group controlId='formGridAddress1'>
					<Form.Label>Address</Form.Label>
					<Form.Control 
					name='address1' 
					placeholder='1234 Main St'
					onChange={handleInputChange}
					value={address1} />
				</Form.Group>

				<Form.Group controlId='formGridAddress2'>
					<Form.Label>Address 2</Form.Label>
					<Form.Control 
					name='address2' 
					placeholder='Apartment, studio, or floor'
					onChange={handleInputChange}
					value={address2} />
				</Form.Group>

				<Form.Row>
					<Form.Group as={Col} controlId='formGridCity'>
						<Form.Label>City</Form.Label>
						<Form.Control 
						name='city'
						onChange={handleInputChange}
						value={city} />
					</Form.Group>

					<Form.Group as={Col} controlId='formGridState'>
						<Form.Label>State</Form.Label>
						<Form.Control 
						name='state' 
						as='select' 
						onChange={handleInputChange}
						value={state}>
							<option>Choose...</option>
							<option>...</option>
						</Form.Control>
					</Form.Group>

					<Form.Group as={Col} controlId='formGridZip'>
						<Form.Label>Zip</Form.Label>
						<Form.Control 
						name='zipCode'
						onChange={handleInputChange}
						value={zipCode} />
					</Form.Group>
				</Form.Row>
				<Button onClick={previous}>Previous</Button>
				<Button onClick={next}>Next</Button>
			</Form>
		</Fragment>
		

	)
}

export default AddressInfo