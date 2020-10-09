import React from 'react';

import { Link, useLocation } from 'react-router-dom';

import Navbar from 'react-bootstrap/Navbar';

const Navigation = () => {

	const location = useLocation();


	return (
		<Navbar className='position-absolute'>
			<ul>
				{
					location.pathname === '/' ?
					<div/> 
					:
					<li>
						<Link className='btn btn-primary' to='/'>
							go home
						</Link>
					</li>
				}
				
				{
					location.pathname === '/restaurant-list' ?
					<div/> 
					:
					<li>
						<Link className='btn btn-primary' to='/restaurant-list'>
							view restaurants
						</Link>
					</li>
				}
				
			</ul>
		</Navbar>
	)
}

export default Navigation