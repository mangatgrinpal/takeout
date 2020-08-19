import {
	FETCH_RESTAURANT_REQUEST,
	FETCH_RESTAURANT_SUCCESS,
	FETCH_RESTAURANT_FAILURE,
	ADD_RESTAURANT_REQUEST,
	ADD_RESTAURANT_SUCCESS,
	ADD_RESTAURANT_FAILURE
} from '../actions/types';

const initialState = {
	restaurant: [],
	isFetching: true
}

export default function(state = initialState, action) {
	const { type, payload } = action;

	switch(type) {
		case FETCH_RESTAURANT_REQUEST:
			return {
				...state,
				isFetching: true
			};
		case FETCH_RESTAURANT_SUCCESS:
			return {
				...state,
				restaurant: payload,
				isFetching: false
			};
		case FETCH_RESTAURANT_FAILURE:
			return {
				...state,
				isFetching: false
			};
		default:
			return state
	}
}