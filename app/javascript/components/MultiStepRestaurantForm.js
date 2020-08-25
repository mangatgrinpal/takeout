import React, { Fragment, useState } from 'react';

import { CSSTransition, TransitionGroup } from 'react-transition-group';

import Welcome from './Welcome';
import RestaurantInfo from './RestaurantInfo';
import AddressInfo from './AddressInfo';
import RestaurantLogoForm from './RestaurantLogoForm';
import ReviewForm from './ReviewForm';

import Col from 'react-bootstrap/Col';


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
	const renderStep = (currentPage) => {
		switch (currentPage) {
			case 'welcome':
				return <Welcome key={currentStep} {...props}/>;
			case 'restaurantInfo':
				return <RestaurantInfo key={currentStep} {...props}/>;
			case 'addressInfo':
				return <AddressInfo key={currentStep} {...props}/>;
			case 'restaurantLogo':
				return <RestaurantLogoForm key={currentStep} {...props}/>;
			case 'review':
				return <ReviewForm key={currentStep} {...props}/>;
			case 'submit':
				return <Submit />;
			default:
				return null;
		}	
	}

	return (
		<Fragment>
			<TransitionGroup component={Col} className='pt-5'>
				<CSSTransition
					key={currentStep}
					unmountOnExit
					timeout={300}
					classNames='page-change'>
						{renderStep(currentStep)}
				</CSSTransition>
			</TransitionGroup>
		</Fragment>
	)
	
};

export default MultiStepRestaurantForm