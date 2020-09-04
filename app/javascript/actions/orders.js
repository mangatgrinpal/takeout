import {
	ADD_ITEM_TO_ORDER,
	REMOVE_ITEM_FROM_ORDER,
	ADD_QUANTITY_TO_ORDER,
	SUBTRACT_QUANTITY_FROM_ORDER,
	SUBMIT_ORDER_REQUEST,
	SUBMIT_ORDER_SUCCESS,
	SUBMIT_ORDER_FAILURE,
	SET_ITEM_MODAL_VISIBILITY
} from './types';

import {
	setAuthHeaders,
	persistAuthHeadersInDeviceStorage
} from '../utils/auth';

import axios from 'axios';

export const addItemToOrder = (item) => dispatch => {

	dispatch({
		type: ADD_ITEM_TO_ORDER,
		payload: item
	})

	dispatch({
		type: SET_ITEM_MODAL_VISIBILITY,
		payload: false
	})

}

export const removeItemFromOrder = item => dispatch => {

	dispatch({
		type: REMOVE_ITEM_FROM_ORDER,
		payload: item
	})

}

export const addQuantityToOrder = item => dispatch => {
	dispatch({
		type: ADD_QUANTITY_TO_ORDER,
		payload: item
	})
}

export const subtractQuantityFromOrder = item => dispatch => {
	dispatch({
		type: SUBTRACT_QUANTITY_FROM_ORDER,
		payload: item
	})
}

export const submitOrder = () => dispatch => {







}


























