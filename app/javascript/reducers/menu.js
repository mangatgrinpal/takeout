import {
	FETCH_MENU_REQUEST,
	FETCH_MENU_SUCCESS,
	FETCH_MENU_FAILURE,
	ADD_MENU_ITEM,
	DELETE_MENU_ITEM,
	SET_ITEM_FORM_VISIBILITY
} from '../actions/types';

const initialState = {
	items: [],
	isFetching: true,
	itemFormVisible: false
}

export default function(state = initialState, action) {
	const { type, payload } = action;
	switch(type) {
		case FETCH_MENU_REQUEST:
			return {
				...state,
				isFetching: true
			};
		case FETCH_MENU_SUCCESS:
			return {
				...state,
				items: payload,
				isFetching: false
			};
		case FETCH_MENU_FAILURE:
			return {
				...state,
				isFetching: false
			};
		case ADD_MENU_ITEM:
		case DELETE_MENU_ITEM:
			return {
				...state,
				items: payload
			};
		case SET_ITEM_FORM_VISIBILITY:
			return {
				...state,
				itemFormVisible: payload
			};
		default:
			return state
	}
}