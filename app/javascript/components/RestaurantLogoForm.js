import React, { Fragment } from 'react';

import ImageUploader from './ImageUploader';

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
		<Fragment>
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
		</Fragment>

	)

}

export default RestaurantLogoForm