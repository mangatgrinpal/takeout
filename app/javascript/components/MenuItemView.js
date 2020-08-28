import React from 'react';

import {
	useHistory,
	useParams
} from 'react-router-dom';

import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

const MenuItemView = () => {

	const history = useHistory();
	const { id, restaurantId } = useParams();

	console.log(id, restaurantId)

	const back = e => {
		e.stopPropagation();
		history.goBack();
	}	

	console.log('rendered menu item view')

	return (
		<Modal show={true}>
			<Modal.Header closeButton>
        <Modal.Title>Modal heading</Modal.Title>
      </Modal.Header>
      <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={back}>
          Close
        </Button>
        <Button variant="primary">
          Save Changes
        </Button>
      </Modal.Footer>
		</Modal>
	)

};

export default MenuItemView