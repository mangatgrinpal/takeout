import React, { Fragment } from 'react';

import { Link } from 'react-router-dom';

import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';

const DashboardNav = ({
	url,
	userSignOut,
	history,
	dashNavVisible,
	setDashNavVisible,
	restaurant
}) => {

	const handleClick = visibility => {
		setDashNavVisible(visibility)
	}

	const { name, description, image } = restaurant;

	return (
		<Col md={3} className='position-absolute bg-light h-100' style={{zIndex: 1}}>
			<div className='dashnav-image-container'>
				<Image src={image ? image.url : ''}/>
			</div>
			
			<h6>{name ? name : ''}</h6>
			<ul>
				<li>
					<Link 
						to={`${url}/orders`}
						onClick={()=>{handleClick(false)}}
					>Active Orders</Link>
				</li>
				<li>
					<Link 
						to={`${url}/orders`}
						onClick={()=>{handleClick(false)}}
					>Order History</Link>
				</li>
				<li>
					<Link 
						to={`${url}/menu`}
						onClick={()=>{handleClick(false)}}
					>View Menu</Link>
				</li>
				<li>

					<Button onClick={()=>{userSignOut(history)}}> Sign Out</Button>

				</li>
			</ul>
		</Col>

	)
}

export default DashboardNav