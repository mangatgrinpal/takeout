import React from 'react';

import { Link } from 'react-router-dom';

import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

const DashboardNav = ({
	url,
	userSignOut,
	history,
	dashNavVisible,
	setDashNavVisible
}) => {

	const handleClick = visibility => {
		setDashNavVisible(visibility)
	}


	return (
		<Col md={3} className='fixed-top bg-light vh-100'>
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