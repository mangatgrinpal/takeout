import {
	ADD_ITEM_TO_ORDER,
	REMOVE_ITEM_FROM_ORDER,
	ADD_QUANTITY_TO_ORDER,
	SUBTRACT_QUANTITY_FROM_ORDER,
	CLEAR_ORDER,
	SUBMIT_ORDER_REQUEST,
	SUBMIT_ORDER_SUCCESS,
	SUBMIT_ORDER_FAILURE,
	SET_ITEM_MODAL_VISIBILITY,
	FETCH_ORDERS_REQUEST,
	FETCH_ORDERS_SUCCESS,
	FETCH_ORDERS_FAILURE,
	SET_SELECTED_ORDER,
	UPDATE_ORDER_STATUS_REQUEST,
	UPDATE_ORDER_STATUS_SUCCESS,
	UPDATE_ORDER_STATUS_FAILURE
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

export const clearOrder = () => dispatch => {
	dispatch({
		type: CLEAR_ORDER
	})
}

export const submitOrder = (customerOrderDetails, history) => async dispatch => {

	dispatch({
		type: SUBMIT_ORDER_REQUEST
	})

	const currentUserCredentials = {
		'access-token': await localStorage.getItem('access-token'),
		'client': await localStorage.getItem('client'),
		'uid': await localStorage.getItem('uid')
	}

	try {
		const res = await axios.post('/orders', customerOrderDetails,{
			headers: currentUserCredentials
		});

		const { data } = res;

		dispatch({
			type: SUBMIT_ORDER_SUCCESS
		})

		history.push('/confirmation')

	} catch(error) {

		dispatch({
			type: SUBMIT_ORDER_FAILURE
		})
	}



}

export const fetchOrders = restaurant => async dispatch => {



	dispatch({
		type: FETCH_ORDERS_REQUEST
	})

	const currentUserCredentials = {
		'access-token': await localStorage.getItem('access-token'),
		'client': await localStorage.getItem('client'),
		'uid': await localStorage.getItem('uid')
	}

	try {
		const res = await axios.get(`/orders?restaurant=${restaurant}`, {
			headers: currentUserCredentials
		})

		setAuthHeaders(res.headers)
		persistAuthHeadersInDeviceStorage(res.headers)

		const { data } = res;


		dispatch({
			type: FETCH_ORDERS_SUCCESS,
			payload: data
		})
	} catch(error) {

	}

}

export const setSelectedOrder = order => dispatch => {

	dispatch({
		type: SET_SELECTED_ORDER,
		payload: order
	})
}

export const setOrderStatus = (order, status) => async dispatch => {


	dispatch({
		type: UPDATE_ORDER_STATUS_REQUEST
	})

	const currentUserCredentials = {
		'access-token': await localStorage.getItem('access-token'),
		'client': await localStorage.getItem('client'),
		'uid': await localStorage.getItem('uid')
	}

	try {
		const res = await axios.patch(`/orders/${order}`, {new_status: status},{
			headers: currentUserCredentials
		})

		const { data } = res;



		dispatch({
			type: UPDATE_ORDER_STATUS_SUCCESS,
			payload: data
		})


	} catch(error) {

	}

}


























