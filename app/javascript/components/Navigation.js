import React from 'react';

import { Link, useLocation } from 'react-router-dom';

import Navbar from 'react-bootstrap/Navbar';

const Navigation = () => {

	const location = useLocation();


	return (
		<Navbar>
			<ul>
				{
					location.pathname === '/' ?
					<div/> :
					<li>
					<Link to='/'>
						go home
					</Link>
				</li>
				}
				
				{/*<li>
					<Link to='/dashboard'>
						go dashboard
					</Link>
				</li>
				*/}
				{
					location.pathname === '/restaurant-list' ?
					<div/> :
					<li>
					<Link to='/restaurant-list'>
						view restaurants
					</Link>
				</li>
				}
				
			</ul>
		</Navbar>
	)
}

export default Navigation