import React from 'react';

import { connect } from 'react-redux';

import {
	useHistory,
	useParams
} from 'react-router-dom';

import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

const MenuItemView = ({
	menu: { items }
}) => {

	const history = useHistory();
	const { id, restaurantId } = useParams();


	const back = e => {
		// e.stopPropagation();
		history.goBack();
	}	


	const item = items ? items.filter(i => i.id == id)[0] : null


	return (


		<Modal 
			size='lg' 
			show={true}
			className='item-view'
			centered
			onHide={back}>
			<Modal.Header closeButton>
        <Modal.Title>{item && item.name}</Modal.Title>
      </Modal.Header>
      <Modal.Body className='embed-responsive-1by1 overflow-hidden'>
      <img className='embed-responsive-item'src={item && item.image.url } />
      {item &&item.description}</Modal.Body>
      <Modal.Footer>
      	{item && item.price}
        <Button variant="secondary" onClick={back}>
          Close
        </Button>
        <Button variant="primary">
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

	}
)(MenuItemView)