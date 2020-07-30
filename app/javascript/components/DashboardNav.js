import React from 'react';

import { Link } from 'react-router-dom';

import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

const DashboardNav = ({
	url,
	userSignOut,
	history,
	currentUser
}) => {


	return (
		<Col md={3} className='fixed-top'>
			<ul>
				<li>
					<Link to={`${url}/orders`}>View Orders</Link>
				</li>
				<li>
					<Link to={`${url}/menu`}>View Menu</Link>
				</li>
				<li>
				{ currentUser &&
				<Button onClick={()=>{userSignOut(history)}}> Sign Out</Button>
				}
				</li>
			</ul>
		</Col>

	)
}

export default DashboardNav