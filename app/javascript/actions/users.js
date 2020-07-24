import {
	USER_SIGN_UP_REQUEST,
	USER_SIGN_UP_SUCCESS,
	USER_SIGN_UP_FAILURE,
	USER_SIGN_IN_REQUEST,
	USER_SIGN_IN_SUCCESS,
	USER_SIGN_IN_FAILURE,
	USER_SIGN_OUT_REQUEST,
	USER_SIGN_OUT_SUCCESS,
	USER_SIGN_OUT_FAILURE
} from './types';

import axios from 'axios';

import {
	setAuthHeaders,
	persistAuthHeadersInDeviceStorage,
	deleteAuthHeaders,
	deleteAuthHeadersFromDeviceStorage
} from '../utils/auth';

export const userSignUp = (email, password, passwordConfirmation, history) => async dispatch => {

	dispatch({
		type: USER_SIGN_UP_REQUEST
	})

	try {

		const res = await axios.post('/users', {
			email: email,
			password: password,
			password_confirmation: passwordConfirmation
		})


		setAuthHeaders(res.headers)
		persistAuthheadersInDeviceStorage(res.headers)

		const { data } = res.data;

		dispatch({
			type: USER_SIGN_UP_SUCCESS,
			payload: data
		})

		history.push('/dashboard')

	} catch(error) {

		dispatch({
			type: USER_SIGN_UP_FAILURE,
			payload: error.response

		})
	}
}

export const userSignIn = (email, password, history) => async dispatch => {

	dispatch({
		type: USER_SIGN_IN_REQUEST
	})

	try {

		const res = await axios.post('/users/sign_in', {
			email: email,
			password: password
		})
	} catch (error) {
		console.log(error)
	}

}