import React, { createContext } from 'react';

const initialResults = {
	results: [],
	loading: true
};

export const FilteredResultsContext = createContext(initialResults);

export const FilteredResultsContextProvider = ({ children }) => {
	return <FilteredResultsContext.Provider value="">{children}</FilteredResultsContext.Provider>;
};
