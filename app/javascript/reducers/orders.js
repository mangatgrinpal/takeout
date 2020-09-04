import {
	ADD_ITEM_TO_ORDER,
	REMOVE_ITEM_FROM_ORDER,
	ADD_QUANTITY_TO_ORDER,
	SUBTRACT_QUANTITY_FROM_ORDER,
	SUBMIT_ORDER_REQUEST,
	SUBMIT_ORDER_SUCCESS,
	SUBMIT_ORDER_FAILURE
} from '../actions/types';

const initialState = {
	bag: [],
	isLoading: true,
	total: 0.00
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
				}
			}

			let newTotalAfterSub = state.total - (Number(itemToRemove.price) * itemToRemove.quantity)
			return {
				...state,
				bag: updatedBag,
				total: newTotalAfterSub
			};
		case ADD_QUANTITY_TO_ORDER:
			let targetItem = state.bag.find(item=> item.id === payload.id)
			targetItem.quantity += 1

			let newTotalAfterAdd = state.total + Number(targetItem.price)

			return {
				...state,
				total: newTotalAfterAdd
			}

		case SUBTRACT_QUANTITY_FROM_ORDER:
			let selectedItem = state.bag.find(item=> item.id === payload.id)
			if (selectedItem.quantity === 1) {
				let newItems = state.bag.filter(item=> item.id != payload.id)
				let newTotal = state.total - Number(selectedItem.price)

				return {
					...state,
					bag: newItems,
					total: newTotal
				}

			} else {
				let item = payload
				item.quantity -= 1
				let newTotalAfterSub = state.total - Number(item.price)

				return {
					...state,
					total: newTotalAfterSub
				}
			}


		default:
			return state
	}
}