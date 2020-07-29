export const loadState = () => {
	try {
		const serializedState = localStorage.getItem('userState');

		if (serializedState === null) {
			return undefined;
		}

		return JSON.parse(serializedState);

	} catch (err) {
		return undefined;
	}
};

export const saveState = (state) => {

	try {
		const serializedState = JSON.stringify(state);
		localStorage.setItem('userState', serializedState);
	} catch (err) {
		// ignore write erros for now.. fix later
	}
}

