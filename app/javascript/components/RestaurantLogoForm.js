import React, { Fragment } from 'react';

import ImageUploader from './ImageUploader';

import Button from 'react-bootstrap/Button';

const RestaurantLogoForm = ({
	imageData,
	setImageData,
	previous,
	next
}) => {
	return (
		<Fragment>
			<ImageUploader 
				imageData={imageData}
				setImageData={setImageData}/>
			<Button onClick={previous}>Previous</Button>
			<Button onClick={next}>Next</Button>
		</Fragment>

	)

}

export default RestaurantLogoForm