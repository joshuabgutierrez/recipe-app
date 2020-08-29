import React, { createContext, useState } from 'react';

export const InitialValuesContext = createContext();

export const InitialValuesContextProvider = ({ children }) => {
	const [ input, setInput ] = useState('');
	const [ category, setCategory ] = useState('');

	function getValues(input, category) {
		setInput(input);
		setCategory(category);
	}

	return (
		<InitialValuesContext.Provider value={{ getValues, input, category }}>{children}</InitialValuesContext.Provider>
	);
};
