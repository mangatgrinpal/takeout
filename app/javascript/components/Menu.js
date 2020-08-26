import React, { Fragment, useEffect } from 'react';

import { connect } from 'react-redux';

import { 
	fetchMenu, 
	setItemFormVisibility, 
	addItem 
} from '../actions/menu';

import MenuItemForm from './MenuItemForm';

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
	menu: { items, itemFormVisible }
}) => {


	useEffect(()=>{

		restaurant.id ? fetchMenu(restaurant.id) : null


	},[ restaurant ]);

	console.log(items)
	return (
		<Fragment>
			{items.length == 0 ? 
				<Col md={{span: 9, offset: 3}}>
				<p>You don't have any items yet</p>
				<Button onClick={()=>{setItemFormVisibility(true)}}>Add menu Item</Button>
			</Col>
				:
				<Col md={{span: 9, offset: 3}}>
				<p>Menu page foo</p>
				<Button onClick={()=>{setItemFormVisibility(true)}}>Add menu Item</Button>
			</Col>
			}
			<Col md={{span: 9, offset: 3}}>
				<Row>
					{items.length > 0 && items.map(item=> {
						return (
							<Col md={3} key={item.id}>
								<Card>
									<Card.Img variant='top' src={item.image.url} />
									<Card.Body>
										<Card.Header>
											{item.name}			
										</Card.Header>
									</Card.Body>
								</Card>
								
							</Col>
						)
					})}
				</Row>
				
			</Col>
			

			<CSSTransition
				in={itemFormVisible}
				timeout={600}
				unmountOnExit
				classNames='complete-fade'
			>
				<Col md={{span: 6, offset: 3}} className='fixed-top bg-light h-100'>
					<MenuItemForm 
						items={items}
						restaurant={restaurant.id}
						addItem={addItem}
						setItemFormVisibility={setItemFormVisibility}/>
				</Col>
			</CSSTransition>

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

