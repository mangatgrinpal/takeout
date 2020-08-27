import {
	FETCH_RESTAURANT_REQUEST,
	FETCH_RESTAURANT_SUCCESS,
	FETCH_RESTAURANT_FAILURE,
	ADD_RESTAURANT_REQUEST,
	ADD_RESTAURANT_SUCCESS,
	ADD_RESTAURANT_FAILURE,
	FETCH_RESTAURANT_LIST_REQUEST,
	FETCH_RESTAURANT_LIST_SUCCESS,
	FETCH_RESTAURANT_LIST_FAILURE
} from '../actions/types';

const initialState = {
	restaurant: [],
	restaurantList: [],
	isFetching: true,
	restaurantFormVisible: false
}

export default function(state = initialState, action) {
	const { type, payload } = action;

	switch(type) {
		case FETCH_RESTAURANT_REQUEST:
		case FETCH_RESTAURANT_LIST_REQUEST:
		case ADD_RESTAURANT_REQUEST:
			return {
				...state,
				isFetching: true
			};
		case FETCH_RESTAURANT_SUCCESS:
		case ADD_RESTAURANT_SUCCESS:
			return {
				...state,
				restaurant: payload,
				isFetching: false
			};
		case FETCH_RESTAURANT_FAILURE:
			return {
				...state,
				isFetching: false,
				restaurantFormVisible: true
			};
		case FETCH_RESTAURANT_LIST_SUCCESS:
			return {
				...state,
				restaurantList: payload
			};
		default:
			return state
	}
}