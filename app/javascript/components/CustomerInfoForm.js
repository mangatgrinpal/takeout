import React, { useState } from 'react';

import { useHistory } from 'react-router-dom';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';



const CustomerInfoForm = ({
	bag,
	total,
	submitOrder
}) => {

	const history = useHistory();

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

	const validate = () => {
		return true
	}

	const handleSubmit = e => {
		e.preventDefault();

		const isValid = validate();
		if (isValid) {

			const restaurant_id = bag.length > 0 ? bag[0].restaurant.id : 'no restaurant error'
			const formData = new FormData();
			// let customerStringified = JSON.stringify(customer)
			// let bagStringified = JSON.stringify(bag)

			formData.append('[customer]first_name', first_name)
			formData.append('[customer]last_name', last_name)
			formData.append('[customer]email', email)
			formData.append('[customer]phone_number', phone_number)
			formData.append('[order]order_price', total)
			formData.append('[items]', bag)
			formData.append('[restaurant_id]', restaurant_id)

			submitOrder(formData, history)
		}
	
	}

	


	return (

		<Form onSubmit={handleSubmit}>
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
						type='tel'
						placeholder='(123)456-7890'
						onChange={handleInputChange}
						value={phone_number}/>
				</Form.Group>
			</Form.Row>
			<Button 
				variant='success'
				type='submit'
				disabled={!(first_name && last_name && email)} 
				size='lg' 
				block>
				Place Your Order
			</Button>
		</Form>
	)
}

export default CustomerInfoForm