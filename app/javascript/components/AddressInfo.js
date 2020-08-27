import React, { Fragment } from 'react';

import Container from 'react-bootstrap/Container';
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
		<Container className='position-absolute'>
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
							<option value="AL">Alabama</option>
							<option value="AK">Alaska</option>
							<option value="AZ">Arizona</option>
							<option value="AR">Arkansas</option>
							<option value="CA">California</option>
							<option value="CO">Colorado</option>
							<option value="CT">Connecticut</option>
							<option value="DE">Delaware</option>
							<option value="DC">District Of Columbia</option>
							<option value="FL">Florida</option>
							<option value="GA">Georgia</option>
							<option value="HI">Hawaii</option>
							<option value="ID">Idaho</option>
							<option value="IL">Illinois</option>
							<option value="IN">Indiana</option>
							<option value="IA">Iowa</option>
							<option value="KS">Kansas</option>
							<option value="KY">Kentucky</option>
							<option value="LA">Louisiana</option>
							<option value="ME">Maine</option>
							<option value="MD">Maryland</option>
							<option value="MA">Massachusetts</option>
							<option value="MI">Michigan</option>
							<option value="MN">Minnesota</option>
							<option value="MS">Mississippi</option>
							<option value="MO">Missouri</option>
							<option value="MT">Montana</option>
							<option value="NE">Nebraska</option>
							<option value="NV">Nevada</option>
							<option value="NH">New Hampshire</option>
							<option value="NJ">New Jersey</option>
							<option value="NM">New Mexico</option>
							<option value="NY">New York</option>
							<option value="NC">North Carolina</option>
							<option value="ND">North Dakota</option>
							<option value="OH">Ohio</option>
							<option value="OK">Oklahoma</option>
							<option value="OR">Oregon</option>
							<option value="PA">Pennsylvania</option>
							<option value="RI">Rhode Island</option>
							<option value="SC">South Carolina</option>
							<option value="SD">South Dakota</option>
							<option value="TN">Tennessee</option>
							<option value="TX">Texas</option>
							<option value="UT">Utah</option>
							<option value="VT">Vermont</option>
							<option value="VA">Virginia</option>
							<option value="WA">Washington</option>
							<option value="WV">West Virginia</option>
							<option value="WI">Wisconsin</option>
							<option value="WY">Wyoming</option>
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
		</Container>
		

	)
}

export default AddressInfo