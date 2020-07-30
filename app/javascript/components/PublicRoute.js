import React, { Fragment } from 'react';
import Navigation from './Navigation';

import { Route } from 'react-router-dom';

const PublicRoute = ({ 
	component: Component,
	...rest
}) => {
	return (

		<Route {...rest} component={(props)=> (
			<Fragment>
				<Navigation />
				<Component {...props} />
			</Fragment>
		)}
		/>

	)
}

export default PublicRoute