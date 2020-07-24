import { createStore, applyMiddleware } from 'redux';

import thunk from 'redux-thunk';

import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from './reducers';

import { loadState, saveState } from './localStorage';



const persistedState = loadState();

const store = createStore(
	rootReducer,
	persistedState,
	composeWithDevTools(
		applyMiddleware(thunk)
	)
);

store.subscribe(() => {
	saveState({
		users: store.getState().users
	});
});

export {
	store
}