import {
	FETCH_ITEMS_REQUEST,
	FETCH_ITEMS_SUCCESS,
	FETCH_ITEMS_FAILURE,
	ADD_MENU_ITEM,
	DELETE_MENU_ITEM,
	SET_ITEM_FORM_VISIBILITY
} from '../actions/types';

const initialState = {
	menu: [],
	isFetching: true,
	itemFormVisible: false
}

export default function(state = initialState, action) {
	const { type, payload } = action;
	switch(type) {
		case FETCH_ITEMS_REQUEST:
			return {
				...state,
				isFetching: true
			};
		case FETCH_ITEMS_SUCCESS:
			return {
				...state,
				itemList: payload,
				isFetching: false
			};
		case FETCH_ITEMS_FAILURE:
			return {
				...state,
				isFetching: false
			};
		case ADD_MENU_ITEM:
		case DELETE_MENU_ITEM:
			return {
				...state,
				itemList: payload
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