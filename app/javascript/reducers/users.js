import {
	USER_SIGN_UP_REQUEST,
	USER_SIGN_UP_SUCCESS,
	USER_SIGN_UP_FAILURE
} from '../actions/types';

const initialState = {
	currentUser: null,
	loading: false,
	errorMessages: '',
	isAuthenticated: false
}

export default function(state=initialState, action) {
	const { type, payload } = action;

	switch(type) {
		case USER_SIGN_UP_REQUEST:
			return {
				...state,
				loading: true,
				errorMessages: ''
			}
		default:
			return state
	}
}