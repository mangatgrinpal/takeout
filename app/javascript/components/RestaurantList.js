import React, { useEffect } from 'react';

import { connect } from 'react-redux';

import { fetchRestaurantList } from '../actions/restaurants';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

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
				</Col>
			</Row>
			<Row>
				{restaurantList.length > 0 &&

						restaurantList.map(restaurant=>{
							const { id, name, image } = restaurant
							return(
								<Col md={3} key={id}>
									<Card>
										<Card.Img variant='top' src={image.url}>
										</Card.Img>
										<Card.Title>
											{name}
										</Card.Title>

									</Card>
								</Col>
							)
						})
					}
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