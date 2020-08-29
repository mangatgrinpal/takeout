import React, { useState } from 'react';

import { connect } from 'react-redux';

import { useParams } from 'react-router-dom';

const Order = ({
	orders: { bag }
}) => {

	console.log(bag)

	return (
		<h1> Order Details</h1>
	)
}

const mapStateToProps = state => ({
	orders: state.orders
})

export default connect(
	mapStateToProps
)(Order)