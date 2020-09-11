import React, { Fragment, useEffect, useState } from 'react';

import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

import { Link } from 'react-router-dom';

const ConfirmationModal = ({
	show,
	clearOrder,
	onHide
}) => {

	return (
		<Modal
			show={show}
			size='lg'
			centered
			onHide={onHide}
			id='confirmation-modal'
		>
			<Modal.Header closeButton>
				<Modal.Title>
					Confirmation
				</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<p>Are you sure you want to go back? This will clear your order.</p>
			</Modal.Body>
			<Modal.Footer>
				<Button onClick={onHide}>Cancel</Button>
				<Link
					className='btn btn-danger' 
					to='/restaurant-list' 
					onClick={()=>{clearOrder()}}>Go back</Link>
			</Modal.Footer>

		</Modal>
	)
}

export default ConfirmationModal