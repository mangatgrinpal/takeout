import React, { useEffect } from 'react';

import { connect } from 'react-redux';

import { Link } from 'react-router-dom';

import { fetchRestaurantList } from '../actions/restaurants';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

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
							const { 
								id, 
								name, 
								image, 
								address: { 
									street_address, 
									street_address_2,
									city,
									state,
									zip_code
								} 
							} = restaurant
							return(
								<Col md={3} key={id}>
									<Card>
										<Card.Img variant='top' src={image.url}>
										</Card.Img>
										<Card.Title>
											{name}
										</Card.Title>
										<Card.Body>
											{street_address}
											<br/>
											{street_address_2}
											<br/>
											{city}, {state}
											{zip_code}
										</Card.Body>
										<Card.Footer>
											<Link 
												className='btn btn-primary' 
												to={`menu/${id}`}>
												Order here
											</Link>
										</Card.Footer>

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