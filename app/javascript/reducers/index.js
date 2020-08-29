import { combineReducers } from 'redux';

import users from './users';
import menu from './menu';
import restaurants from './restaurants';
import orders from './orders';

export default combineReducers({
	users,
	menu,
	restaurants,
	orders
})