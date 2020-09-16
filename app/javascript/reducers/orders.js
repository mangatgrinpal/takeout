import {
	ADD_ITEM_TO_ORDER,
	REMOVE_ITEM_FROM_ORDER,
	ADD_QUANTITY_TO_ORDER,
	SUBTRACT_QUANTITY_FROM_ORDER,
	CLEAR_ORDER,
	SUBMIT_ORDER_REQUEST,
	SUBMIT_ORDER_SUCCESS,
	SUBMIT_ORDER_FAILURE,
	FETCH_ORDERS_REQUEST,
	FETCH_ORDERS_SUCCESS,
	FETCH_ORDERS_FAILURE,
	SET_SELECTED_ORDER,
	UPDATE_ORDER_STATUS_REQUEST,
	UPDATE_ORDER_STATUS_SUCCESS,
	UPDATE_ORDER_STATUS_FAILURE
} from '../actions/types';

const initialState = {
	bag: [],
	isLoading: true,
	total: 0.00,
	orderList: [],
	selectedOrder: []
}

export default function(state = initialState, action) {
	const { type, payload } = action;


	switch(type) {
		case ADD_ITEM_TO_ORDER:

			let item = state.bag.find(item=> item.id === payload.id)
			let price = Number(payload.price)
			if (item) {
				item.quantity += 1
				return {
					...state,
					total: state.total + price
				};
			} else {
				let newItem = payload
				newItem.quantity = 1;
				let newTotal = state.total + price
				return {
					...state,
					bag: [...state.bag, newItem],
					total: newTotal
				};
			};
		case REMOVE_ITEM_FROM_ORDER:

			let itemToRemove = payload

			let updatedBag = state.bag.filter(item => item.id != payload.id)
			if (updatedBag.length === 0) {
				return {
					...state,
					bag: [],
					total: 0.00
				};
			};

			let newTotalAfterSub = state.total - (Number(itemToRemove.price) * itemToRemove.quantity)
			return {
				...state,
				bag: updatedBag,
				total: newTotalAfterSub
			};
		case ADD_QUANTITY_TO_ORDER:
			item = state.bag.find(item=> item.id === payload.id)
			item.quantity += 1

			let newTotalAfterAdd = state.total + Number(item.price)

			return {
				...state,
				total: newTotalAfterAdd
			};

		case SUBTRACT_QUANTITY_FROM_ORDER:
			let selectedItem = state.bag.find(item=> item.id === payload.id)
			if (selectedItem.quantity === 1) {
				let newItems = state.bag.filter(item=> item.id != payload.id)
				let newTotal = state.total - Number(selectedItem.price)

				return {
					...state,
					bag: newItems,
					total: newTotal
				};

			} else {
				let item = payload
				item.quantity -= 1
				let newTotalAfterSub = state.total - Number(item.price)

				return {
					...state,
					total: newTotalAfterSub
				};
			};
		case CLEAR_ORDER:
			return {
				bag: [],
				total: 0.00
			};
		case SUBMIT_ORDER_REQUEST:
		case FETCH_ORDERS_REQUEST:
			return {
				...state,
				isLoading: true
			};
		case SUBMIT_ORDER_SUCCESS:
			return {
				...state,
				isLoading: false,
				bag: [],
				total: 0.00
			};

		case SUBMIT_ORDER_FAILURE:
			return {
				...state
			};

		case FETCH_ORDERS_SUCCESS:
			return {
				...state,
				isLoading: false,
				orderList: payload
			}
		case SET_SELECTED_ORDER:
			return {
				...state,
				selectedOrder: state.orderList.filter(order => order.id === payload)
			}
		default:
			return state
	}
}