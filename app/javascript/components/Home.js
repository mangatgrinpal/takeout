import React from 'react';

import { Link } from 'react-router-dom';

const Home = () => {
	return (
		<div>
			<h1>Sup foo. This is Takeout.</h1>
			<ul>
				<li>
					<Link to='/sign-up'>sign up now</Link>
				</li>
				<li>
					<Link to='/sign-in'>sign in now</Link>
				</li>
			</ul>
			
			
		</div>
	)
}

export default Home