import {
	FETCH_RESTAURANT_REQUEST,
	FETCH_RESTAURANT_SUCCESS,
	FETCH_RESTAURANT_FAILURE,
	ADD_RESTAURANT_REQUEST,
	ADD_RESTAURANT_SUCCESS,
	ADD_RESTAURANT_FAILURE,
	FETCH_RESTAURANT_LIST_REQUEST,
	FETCH_RESTAURANT_LIST_SUCCESS,
	FETCH_RESTAURANT_LIST_FAILURE,
	SET_RESTAURANT_FORM_VISIBILITY
} from './types';

import {
	setAuthHeaders,
	persistAuthHeadersInDeviceStorage
} from '../utils/auth';

import axios from 'axios';

export const fetchRestaurant = (user, history) => async dispatch => {

	dispatch({
		type: FETCH_RESTAURANT_REQUEST
	})

	const currentUserCredentials = {
		'access-token': await localStorage.getItem('access-token'),
		'client': await localStorage.getItem('client'),
		'uid': await localStorage.getItem('uid')
	}

	try {

		const res = await axios.get(`/restaurants/${user}`, {
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

export const addRestaurant = (restaurant, history) => async dispatch => {
	
	dispatch({
		type: ADD_RESTAURANT_REQUEST
	})

	const currentUserCredentials = {
		'access-token': await localStorage.getItem('access-token'),
		'client': await localStorage.getItem('client'),
		'uid': await localStorage.getItem('uid')
	}

	try {


		const res = await axios.post('/restaurants', restaurant,{
			headers: currentUserCredentials
			
		});

		setAuthHeaders(res.headers)
		persistAuthHeadersInDeviceStorage(res.headers)

		const { data } = res;

		dispatch({
			type: ADD_RESTAURANT_SUCCESS,
			payload: data
		})

		history.push('/dashboard/menu')

	} catch(error) {

		dispatch({
			type: ADD_RESTAURANT_FAILURE,
			payload: error
		})

	}
}

export const fetchRestaurantList = () => async dispatch => {
	
	dispatch({
		type: FETCH_RESTAURANT_LIST_REQUEST
	})

	const currentUserCredentials = {
		'access-token': await localStorage.getItem('access-token'),
		'client': await localStorage.getItem('client'),
		'uid': await localStorage.getItem('uid')
	}

	try {
		const res = await axios.get('/restaurants')

		setAuthHeaders(res.headers)
		persistAuthHeadersInDeviceStorage(res.headers)

		const { data } = res;


		dispatch({
			type: FETCH_RESTAURANT_LIST_SUCCESS,
			payload: data
		})
	} catch(error) {
		console.log(error)


	}
}

export const setRestaurantFormVisibility = visibility => dispatch => {
	dispatch({
		type: SET_RESTAURANT_FORM_VISIBILITY,
		payload: visibility
	})
}