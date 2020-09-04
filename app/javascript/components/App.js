import React, { Fragment } from 'react';

import { Provider } from 'react-redux';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';

library.add(fas, far)

import SwitchWrapper from './SwitchWrapper';

import { BrowserRouter as Router } from 'react-router-dom';

import { PersistGate } from 'redux-persist/integration/react';

import { store, persistor } from '../store';

const App = () => {

	return (
		<Provider store={store}>
			<PersistGate loading={null} persistor={persistor}>
				<Router>
					<SwitchWrapper />
				</Router>
			</PersistGate>
		</Provider>
	)
}

export default App