import React from 'react';

import { Link } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';

const Home = () => {
	return (
		<Container fluid={true}>
			<Row className='hero-image'>
				<Col className='text-center my-auto'>
					<Row>
						<Col xs={{span:10, offset: 1}} md={{span:4,offset: 4}}>
							<h1>Place a takeout order online today</h1>
						</Col>
					</Row>
					<Form>
						<Form.Group as={Row}>
							<Col className='py-2' md={{span: 4, offset: 4}}>
								<Form.Control 
									className='rounded-pill'
									placeholder='Enter address'/>
							</Col>
							
						</Form.Group>
					</Form>
				</Col>
			</Row>
			<Row>
				<Col>
					<ul>
						<li>
							<Link to='/sign-up'>sign up now</Link>
						</li>
						<li>
							<Link to='/sign-in'>sign in now</Link>
						</li>
					</ul>
				</Col>
			</Row>
		</Container>
	)
}

export default Home