import React, { Fragment, useEffect } from 'react';

import { connect } from 'react-redux';

import { 
	fetchMenu, 
	setItemFormVisibility, 
	addItem 
} from '../actions/menu';

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

import { CSSTransition } from 'react-transition-group';

const Menu = ({
	fetchMenu,
	restaurant,
	setItemFormVisibility,
	addItem,
	isAuthenticated,
	background,
	menu: { items, itemFormVisible }
}) => {

	const { restaurantId } = useParams();
	const location = useLocation();


	useEffect(()=>{

		fetchMenu(restaurantId)

	},[ restaurant ]);



	return (
		<Fragment>

				<Col>
					<Link to='/restaurant-list' className='btn btn-primary'>
						go back
					</Link>

				</Col>

			<Col>
				<Row>
					{items.length > 0 ? items.map(item=> {
						
						const { id, image, name, price } = item;
							
						return (
							
							<Col md={2} key={id}>
								<Link 
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
	menu: state.menu
})

export default connect(
	mapStateToProps,
	{
		fetchMenu,
		setItemFormVisibility,
		addItem
	}
)(Menu)

