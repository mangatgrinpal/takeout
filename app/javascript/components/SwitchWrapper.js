import React, { Fragment } from 'react'

import Navigation from './Navigation';
import Home from './Home';
import Dashboard from './Dashboard';
import RestaurantList from './RestaurantList';
import Menu from './Menu';
import UserSignUp from './UserSignUp';
import UserSignIn from './UserSignIn';
import PrivateRouteWrapper from './PrivateRouteWrapper';
import PublicRoute from './PublicRoute';
import MenuItemView from './MenuItemView';

import { 
	BrowserRouter as Router,
	Switch,
	Route,
	Link,
	withRouter,
	useLocation
} from 'react-router-dom';

const SwitchWrapper = () => {

	const location = useLocation();

	const background = location.state && location.state.background

	return (
		<Fragment>
			<Switch location={background || location}>

				<PrivateRouteWrapper path='/dashboard'>
					<Dashboard />
				</PrivateRouteWrapper>

				<PublicRoute exact path='/' component={Home} />
				<PublicRoute exact path='/restaurant-list' component={RestaurantList} />
				<Route exact path='/menu/:restaurantId' children={<Menu background={background}/>}/>
				<PublicRoute exact path='/sign-up' component={UserSignUp} />
				<PublicRoute exact path='/sign-in' component={UserSignIn} />


			</Switch>
				
			{background && <Route exact path ='/menu/:restaurantId/menu-item/:id' children={<MenuItemView />}/>}
		</Fragment>
	)
}

export default SwitchWrapper