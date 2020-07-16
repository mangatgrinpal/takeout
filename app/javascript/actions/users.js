import {
	USER_SIGN_UP_REQUEST,
	USER_SIGN_UP_SUCCESS,
	USER_SIGN_UP_FAILURE
} from './types';

import axios from 'axios';

import {
	setAuthHeaders,
	persistAuthheadersInDeviceStorage,
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


	} catch(error) {
		dispatch({
			type: USER_SIGN_UP_FAILURE

		})
	}
}