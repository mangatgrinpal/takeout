import { combineReducers } from 'redux';

import users from './users';
import menu from './menu';

export default combineReducers({
	users,
	menu
})