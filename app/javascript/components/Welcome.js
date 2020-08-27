import React, { Fragment } from 'react';

import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';


const Welcome = ({
	next
}) => {
	return (
		<Container className='position-absolute'>
			<h1>Welcome</h1>
			<Button onClick={next}>Get started</Button>
		</Container>

	)
}

export default Welcome