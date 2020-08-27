import {
	FETCH_MENU_REQUEST,
	FETCH_MENU_SUCCESS,
	FETCH_MENU_FAILURE,
	ADD_MENU_ITEM,
	DELETE_MENU_ITEM,
	SET_ITEM_FORM_VISIBILITY
} from './types';

import {
	setAuthHeaders,
	persistAuthHeadersInDeviceStorage
} from '../utils/auth';

import axios from 'axios';


export const fetchMenu = restaurant => async dispatch => {

	dispatch({
		type: FETCH_MENU_REQUEST
	})

	const currentUserCredentials = {
		'access-token': await localStorage.getItem('access-token'),
		'client': await localStorage.getItem('client'),
		'uid': await localStorage.getItem('uid')
	}

	try {


		const res = await axios.get(`/items?restaurant=${restaurant}`, { 
			headers: currentUserCredentials
		});

		setAuthHeaders(res.headers)
		persistAuthHeadersInDeviceStorage(res.headers)

		const { data } = res;

		if (data.length === 0) {
			dispatch({
				type: SET_ITEM_FORM_VISIBILITY,
				payload: true
			})
		}

		dispatch({
			type: FETCH_MENU_SUCCESS,
			payload: data
		})

	} catch(error) {
		console.log(error)
	}
}

export const addItem = (item, restaurant) => async dispatch => {

	const currentUserCredentials = {
		'access-token': await localStorage.getItem('access-token'),
		'client': await localStorage.getItem('client'),
		'uid': await localStorage.getItem('uid')
	}

	try {

		let stringified = JSON.stringify(restaurant)

		const res = await axios.post(`/items?restaurant=${stringified}`, item,{
			headers: currentUserCredentials
		});


		const { data } = res;

		dispatch({
			type: ADD_MENU_ITEM,
			payload: data
		})

		dispatch({
			type: SET_ITEM_FORM_VISIBILITY,
			payload: false
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