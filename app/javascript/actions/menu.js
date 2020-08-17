import {
	FETCH_ITEMS_REQUEST,
	FETCH_ITEMS_SUCCESS,
	FETCH_ITEMS_FAILURE,
	ADD_MENU_ITEM,
	DELETE_MENU_ITEM
} from './types';

import {
	setAuthHeaders,
	persistAuthHeadersInDeviceStorage
} from '../utils/auth';

import axios from './axios';


export const fetchMenu = restaurant => async dispatch => {

	const currentUserCredentials = {
		'access-token': await localStorage.getItem('access-token'),
		'client': await localStorage.getItem('client'),
		'uid': await localStorage.getItem('uid')
	}

	try {

		dispatch({
			type: FETCH_ITEMS_REQUEST
		})

		const res = await axios.get(`/items>restaurant=${restaurant}`, { headers:
			currentUserCredentials
		});

		setAuthHeaders(res.headers)
		persistAuthHeadersInDeviceStorage(res.headers)

		const { data } = res;

		dispatch({
			type: FETCH_ITEMS_SUCCESS,
			payload: data
		})

	} catch(error) {
		console.log(error)
	}
}

export const addItem = (name, description) => async dispatch => {


	try {
		const res = await axios.post('/items', {

			item: {
				name: name,
				description: description
			}
		});

		const { data: { items }} = res;

		dispatch({
			type: ADD_MENU_ITEM,
			payload: items
		})
	} catch(error) {
		console.log(error)
	}
}

export const deleteMenuItem = (item) => async dispatch => {

	try {
		const res = await axios.delete('/items/' + item)

		const { data } = res;

		dispatch({
			type: DELETE_MENU_ITEM,
			payload: data
		})
	} catch(error) {
		console.log(error)
	}
}

export const setItemFormVisibility = visibility => dispatch => {
	dispatch({
		type: SET_ITEM_FORM_VISIBILITY,
		payload: visibility
	})
}