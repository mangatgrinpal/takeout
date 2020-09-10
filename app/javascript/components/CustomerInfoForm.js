import React, { useState } from 'react';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';



const CustomerInfoForm = ({
	bag,
	total
}) => {

	const [ customer, setCustomer ] = useState({
		first_name: '',
		last_name: '',
		email: '',
		phone_number: ''
	})

	const handleInputChange = e => {
		setCustomer({
			...customer, 
			[e.target.name]: e.target.value
		})
	}

	const { first_name, last_name, email, phone_number } = customer;

	return (
		<Form>
			<Form.Row>
				<Form.Group as={Col}>
					<Form.Label>First Name</Form.Label>
					<Form.Control
						name='first_name'
						type='text'
						placeholder='First name'
						onChange={handleInputChange}
						value={first_name}/>
				</Form.Group>
				<Form.Group as={Col}>
					<Form.Label>Last Name</Form.Label>
					<Form.Control
						name='last_name'
						type='text'
						placeholder='Last name'
						onChange={handleInputChange}
						value={last_name}/>
				</Form.Group>
			</Form.Row>
			<Form.Row>
				<Form.Group as={Col}>
					<Form.Label>E-mail Address</Form.Label>
					<Form.Control 
						name='email'
						type='email'
						placeholder='Email'
						onChange={handleInputChange}
						value={email}/>
				</Form.Group>
			</Form.Row>
			<Form.Row>
				<Form.Group as={Col}>
					<Form.Label>Phone number (optional)</Form.Label>
					<Form.Control 
						name='phone_number'
						type='email'
						placeholder='Phone no.'
						onChange={handleInputChange}
						value={phone_number}/>
				</Form.Group>
			</Form.Row>
			<Button 
				variant='success'
				type='submit'
				disabled={true} 
				size='lg' 
				block>
				Place Your Order
			</Button>
		</Form>
	)
}

export default CustomerInfoForm