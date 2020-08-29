import {
	ADD_ITEM_TO_ORDER,
	REMOVE_ITEM_FROM_ORDER,
	SUBMIT_ORDER_REQUEST,
	SUBMIT_ORDER_SUCCESS,
	SUBMIT_ORDER_FAILURE
} from '../actions/types';

const initialState = {
	bag: [],
	isLoading: true
}

export default function(state = initialState, action) {
	const { type, payload } = action;


	switch(type) {
		case ADD_ITEM_TO_ORDER:
			return {
				...state,
				bag: [...state.bag, payload]
			};
		case REMOVE_ITEM_FROM_ORDER:
			return {
				...state,
				bag: payload
			};
		default:
			return state
	}
}