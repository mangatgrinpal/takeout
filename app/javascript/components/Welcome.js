import React, { Fragment } from 'react';

import Button from 'react-bootstrap/Button';


const Welcome = ({
	next
}) => {
	return (
		<Fragment>
			<h1>Welcome</h1>
			<Button onClick={next}>Next</Button>
		</Fragment>
		
	)
}

export default Welcome