import React, { useEffect } from 'react';

import { connect } from 'react-redux';

import { fetchRestaurantList } from '../actions/restaurants';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const RestaurantList = ({ 
	fetchRestaurantList,
	restaurants: { restaurantList }
}) => {
	
	useEffect(()=>{
		fetchRestaurantList();
	},[])

	return (
		<Container>
			<Row>
				<Col>
					<h1 className='text-center'>All Restaurants</h1>
					<ul>
					{restaurantList.length > 0 &&

						restaurantList.map(restaurant=>{
							const { name } = restaurant
							return(
								<li>{name}</li>
							)
						})
					}
					</ul>
				</Col>
			</Row>
		</Container>
		
	)
}

const mapStateToProps = state => ({
	restaurants: state.restaurants
})

export default connect(
	mapStateToProps,
	{
		fetchRestaurantList
	}
)(RestaurantList)