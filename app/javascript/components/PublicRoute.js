import React, { Fragment } from 'react';
import Navigation from './Navigation';

import { Route, Redirect } from 'react-router-dom';

import { connect } from 'react-redux';

const PublicRoute = ({ 
	component: Component,
	users: { isAuthenticated },
	...rest
}) => {
	return (

		<Route 
			{...rest} 
			component={(props) => (
				isAuthenticated ? (
					<Redirect 
					 to='/dashboard/orders'
					/>
				) : (
				<Fragment>
					<Navigation />
					<Component {...props} />
				</Fragment>
			))}

		/>
	)
}

const mapStateToProps = state => ({
	users: state.users
})

export default connect(
	mapStateToProps
)(PublicRoute)