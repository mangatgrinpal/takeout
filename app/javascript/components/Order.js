import React from 'react';

import { useParams } from 'react-router-dom';

const Order = () => {

	let { restaurantId } = useParams();

	console.log(restaurantId)

	return (
		<h1> Order Details</h1>
	)
}

export default Order