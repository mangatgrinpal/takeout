import React from 'react';

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
		<Col md={3} className='fixed-top bg-light' style={{overflow: 'hidden'}}>
			<div className='w-100'>
				<Image className='embed-responsive-item embed-responsive-1by1' src={image.url}/>
			</div>
			
			<h6>{name}</h6>
			<ul>
				<li>
					<Link 
						to={`${url}/orders`}
						onClick={()=>{handleClick(false)}}
					>View Orders</Link>
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