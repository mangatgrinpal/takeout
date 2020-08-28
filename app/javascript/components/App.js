import React, { Fragment } from 'react';

import { Provider } from 'react-redux';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';

library.add(fas, far)

import SwitchWrapper from './SwitchWrapper';

import { BrowserRouter as Router } from 'react-router-dom';


import { store } from '../store';

const App = () => {
	
	
	
	return (
		<Provider store={store}>
			<Router>
				<SwitchWrapper />
				
			</Router>			
		</Provider>
		
	)
}

export default App