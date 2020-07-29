import React from 'react';

import { Link } from 'react-router-dom';

import Navbar from 'react-bootstrap/Navbar';

const Navigation = () => {
	return (
		<Navbar>
			<ul>
				<li>
					<Link to='/'>
						go home
					</Link>
				</li>
				{/*<li>
					<Link to='/dashboard'>
						go dashboard
					</Link>
				</li>
				*/}
				<li>
					<Link to='/restaurant-list'>
						view restaurants
					</Link>
				</li>
			</ul>
		</Navbar>
	)
}

export default Navigation