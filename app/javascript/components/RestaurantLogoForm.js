import React, { Fragment } from 'react';

import ImageUploader from './ImageUploader';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

const RestaurantLogoForm = ({
	imageData,
	setImageData,
	previous,
	next
}) => {

	const validate = () => {

		return imageData.length == 0
	}
	return (
		<Container className='position-absolute'>
			<Row>
				<Col>
					<h3>Please add your restaurant's logo below</h3>
				</Col>
			</Row>
			<ImageUploader 
				imageData={imageData}
				setImageData={setImageData}/>
			<Button onClick={previous}>Previous</Button>
			<Button onClick={next}>Next</Button>
		</Container>

	)

}

export default RestaurantLogoForm