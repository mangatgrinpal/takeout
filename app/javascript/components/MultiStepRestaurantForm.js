import React, { useState } from 'react';

import Welcome from './Welcome';
import RestaurantInfo from './RestaurantInfo';
import AddressInfo from './AddressInfo';
import RestaurantLogoForm from './RestaurantLogoForm';


const MultiStepRestaurantForm = () => {

		const pages = {
		0: 'welcome',
		1: 'restaurantInfo' ,
		2: 'addressInfo' ,
		3: 'restaurantLogo' ,
		4: 'review' ,
		5: 'submit' 
	};

	const [ restaurant, setRestaurant ] = useState({
		name:'',
		description: '',
		address: '',
		address2: '',
		city: '',
		state: '',
		zipCode: ''
	});

	const [ imageData, setImageData ] = useState([])
	const [ step, setStep ] = useState(0)

	const handleInputChange = e => {
		setRestaurant({...restaurant, [e.target.name]: e.target.value})
	}

	const next = () => {
		setStep(step + 1)
	}

	const previous = () => {
		setStep(step - 1)
	}

	const currentStep = pages[step]

	const props = { 
		restaurant, 
		setRestaurant, 
		pages, 
		next, 
		previous, 
		handleInputChange,
		currentStep,
		imageData,
		setImageData
	}

	switch (currentStep) {
		case 'welcome':
			return <Welcome {...props}/>;
		case 'restaurantInfo':
			return <RestaurantInfo {...props}/>;
		case 'addressInfo':
			return <AddressInfo {...props}/>;
		case 'restaurantLogo':
			return <RestaurantLogoForm {...props}/>;
		case 'review':
			return <Review />;
		case 'submit':
			return <Submit />;
		default:
			return null;
	}
};

export default MultiStepRestaurantForm