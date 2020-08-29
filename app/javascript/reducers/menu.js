import {
	FETCH_MENU_REQUEST,
	FETCH_MENU_SUCCESS,
	FETCH_MENU_FAILURE,
	ADD_MENU_ITEM,
	DELETE_MENU_ITEM,
	SET_ITEM_FORM_VISIBILITY,
	SET_ITEM_MODAL_VISIBILITY
} from '../actions/types';

const initialState = {
	items: [],
	isFetching: true,
	itemFormVisible: false,
	itemModalVisible: true
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
		case SET_ITEM_MODAL_VISIBILITY:
			return {
				...state,
				itemModalVisible: payload
			}
		default:
			return state
	}
}