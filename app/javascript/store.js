import { createStore, applyMiddleware } from 'redux';

import thunk from 'redux-thunk';

import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from './reducers';

const initialState = {
	cat: 'dog'
};

const store = createStore(
	rootReducer,
	initialState,
	composeWithDevTools(
		applyMiddleware(thunk)
	)
);

export {
	store
}