import {
	FETCH_RESTAURANT_REQUEST,
	FETCH_RESTAURANT_SUCCESS,
	FETCH_RESTAURANT_FAILURE,
	ADD_RESTAURANT_REQUEST,
	ADD_RESTAURANT_SUCCESS,
	ADD_RESTAURANT_FAILURE,
	SET_RESTAURANT_FORM_VISIBILITY
} from './types';

import {
	setAuthHeaders,
	persistAuthHeadersInDeviceStorage
} from '../utils/auth';

import axios from 'axios';

export const fetchRestaurant = history => async dispatch => {

	dispatch({
		type: FETCH_RESTAURANT_REQUEST
	})

	const currentUserCredentials = {
		'access-token': await localStorage.getItem('access-token'),
		'client': await localStorage.getItem('client'),
		'uid': await localStorage.getItem('uid')
	}

	try {

		const res = await axios.get(`/restaurants`, {
			headers: currentUserCredentials
		});

		setAuthHeaders(res.headers)
		persistAuthHeadersInDeviceStorage(res.headers)

		const { data } = res;


		dispatch({
			type: FETCH_RESTAURANT_SUCCESS,
			payload: data
		})

	} catch(error) {

		dispatch({
			type: FETCH_RESTAURANT_FAILURE,
			payload: error
		})
	}
}

export const addRestaurant = () => async dispatch => {

}

export const fetchRestaurantList = () => async dispatch => {

}

export const setRestaurantFormVisibility = visibility => dispatch => {
	dispatch({
		type: SET_RESTAURANT_FORM_VISIBILITY,
		payload: visibility
	})
}