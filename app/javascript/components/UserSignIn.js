import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const UserSignIn = () => {
	return (
		<Container>
			<Row>
				<Col xs={{span: 8, offset: 2}} md={{span: 4, offset: 4}} className='py-5'>
					<h6>Sign In</h6>
				</Col>
			</Row>
			<Row>
				<Col xs={{span:10, offset: 1}} md={{span:6, offset: 3}}>
					<Form>
						<Form.Group>
							<Form.Label>Email address</Form.Label>
							<Form.Control />

						</Form.Group>
						<Form.Group>
							<Form.Label>Password</Form.Label>
							<Form.Control />

						</Form.Group>

						<Button type='submit'>
							Submit
						</Button>

					</Form>
				</Col>
			</Row>
		</Container>
	)
}

export default UserSignIn