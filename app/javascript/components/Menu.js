import React, { Fragment, useEffect } from 'react';

import { connect } from 'react-redux';

import { fetchMenu } from '../actions/menu';

import MenuItemForm from './MenuItemForm';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { CSSTransition } from 'react-transition-group';

const Menu = ({
	fetchMenu,
	restaurant,
	menu: { items, itemFormVisible }
}) => {


	useEffect(()=>{

		restaurant.id ? fetchMenu(restaurant.id) : null
		// fetchMenu(restaurant.id)

	},[ restaurant ]);

	return (
		<Fragment>

			<Col md={{span: 9, offset: 3}}>
				<p>Menu page foo</p>
			</Col>

			<CSSTransition
				in={itemFormVisible}
				timeout={600}
				unmountOnExit
				classNames='slide-right'
			>
				<MenuItemForm />
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
		fetchMenu
	}
)(Menu)

