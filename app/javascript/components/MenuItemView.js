import React,{ useEffect } from 'react';

import { connect } from 'react-redux';

import { 
	fetchMenu,
	setItemModalVisibility
} from '../actions/menu';

import {
	addItemToOrder,
	removeItemFromOrder
} from '../actions/orders';

import {
	useHistory,
	useParams
} from 'react-router-dom';

import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

const MenuItemView = ({
	fetchMenu,
	setItemModalVisibility,
	addItemToOrder,
	removeItemFromOrder,
	menu: { items, itemModalVisible }
}) => {

	const history = useHistory();
	const { id, restaurantId } = useParams();


	const back = e => {
		// e.stopPropagation();
		setItemModalVisibility(false)
		history.goBack();
	}

	useEffect(()=>{

		items.length == 0 ? fetchMenu(restaurantId) : null

	},[])


	const item = items ? items.filter(i => i.id == id)[0] : null


	const handleClick = e => {

		addItemToOrder(item)
		back()
	}




	return (


		<Modal 
			size='lg' 
			show={itemModalVisible}
			className='item-view'
			centered
			onHide={back}>
			<Modal.Header closeButton>
        <Modal.Title>{item && item.name}</Modal.Title>
      </Modal.Header>
      <Modal.Body className='embed-responsive-1by1 overflow-hidden'>
	      <img className='embed-responsive-item'src={item && item.image.url } />
	      {item &&item.description}
      </Modal.Body>
      <Modal.Footer>
      	{item && item.price}
        <Button variant='secondary' onClick={back}>
          Close
        </Button>
        <Button 
        	variant='primary'
        	onClick={handleClick}
        	>
          Add to bag
        </Button>
      </Modal.Footer>
		</Modal>
	)

};

const mapStateToProps = state => ({
	menu: state.menu
})

export default connect(
	mapStateToProps,
	{
		fetchMenu,
		setItemModalVisibility,
		addItemToOrder,
		removeItemFromOrder
	}
)(MenuItemView)