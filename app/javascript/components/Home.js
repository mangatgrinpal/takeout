import React from 'react';
import HeroImage from './HeroImage';


import { Link } from 'react-router-dom';

const Home = () => {
	return (
		<div>

			{/* hero image with hero title */}

			<h1>Sup foo. This is Takeout.</h1>

			{/* nav bar will go here */}
			{/* includes: home, view restaurants, sign in, sign up buttons */}
			{/* where are the home and restaurant button's code located? */}

			<div>
				<div>
					<span><Link to='/sign-up'>Sign up  </Link></span>
					<span><Link to='/sign-in'>  Sign In</Link></span>
				</div>
			</div>

			{/* input form goes here */}
			
			<div>
				<input type="search" placeholder="Your delivery address"/>
			</div>

		</div>
	)
}

export default Home