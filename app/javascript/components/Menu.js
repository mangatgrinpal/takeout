import React, { Fragment, useEffect } from 'react';

import { connect } from 'react-redux';

import { 
	fetchMenu, 
	setItemFormVisibility, 
	addItem,
	setItemModalVisibility
} from '../actions/menu';

import { fetchRestaurantList } from '../actions/restaurants';

import { 
	Link, 
	useParams, 
	useLocation,
	Route 
} from 'react-router-dom';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';

import { CSSTransition } from 'react-transition-group';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Menu = ({
	fetchMenu,
	restaurant,
	setItemFormVisibility,
	setItemModalVisibility,
	addItem,
	isAuthenticated,
	background,
	fetchRestaurantList,
	menu: { items, itemFormVisible },
	restaurants: { restaurantList },
	orders: { bag }
}) => {

	const { restaurantId } = useParams();
	const location = useLocation();


	useEffect(()=>{

		fetchMenu(restaurantId)

		restaurantList.length == 0 ? fetchRestaurantList() : null

	},[ restaurant ]);

	const currentRestaurant = restaurantList ? restaurantList.filter(restaurant => restaurant.id == restaurantId) : null

	const totalQuantity = () => {
		
		return bag.reduce(function (acc,obj) { return acc + obj.quantity; }, 0)

	}



	return (
		<Fragment>

			<Col>
				<Row className='justify-content-around'>
					<Col>
						<Link to='/restaurant-list' className='btn btn-primary'>
							go back
						</Link>
					</Col>
					<Col md={2}>
						<Link className='text-right' to='/checkout'>
							
							<FontAwesomeIcon 
								icon={['fas','shopping-bag']}
								size='2x'/>
							<Badge pill variant='success'>
								{bag.length > 0 ? totalQuantity() : ''}
							</Badge>
						</Link>
					</Col>
				</Row>
			</Col>

			<Col>
				<Row>
					<Col>Menu for restaurant</Col>
				</Row>
				<Row>
					{items.length > 0 ? items.map(item=> {
						
						const { id, image, name, price } = item;
							
						return (
							
							<Col md={2} key={id}>
								<Link
									onClick={()=>{
										setItemModalVisibility(true)
									}} 
									to={{
										pathname: `${restaurantId}/menu-item/${id}`,
										state: { background: location }
									}}
								>
									<Card>
										<Card.Img variant='top' src={image.url} />
										<Card.Body>
											<Card.Header>
												{name}			
											</Card.Header>
											<Card.Footer>
												{price}
											</Card.Footer>
										</Card.Body>
									</Card>
								</Link>
								
							</Col>
						)
					})

					:
					<Col>
						<h1 className='text-center'>This restaurant doesnt have a menu yet</h1>
					</Col>
				}
				</Row>

				
			</Col>
			
			
		</Fragment>
	)
}


const mapStateToProps = state => ({
	menu: state.menu,
	restaurants: state.restaurants,
	orders: state.orders
})

export default connect(
	mapStateToProps,
	{
		fetchMenu,
		setItemFormVisibility,
		setItemModalVisibility,
		addItem,
		fetchRestaurantList
	}
)(Menu)

