import React, { createContext, useState } from 'react';

export const FilteredResultsContext = createContext();

export const FilteredResultsContextProvider = ({ children }) => {
	const [ results, setResults ] = useState([]);

	function getData(results) {
		return setResults(results.data.results);
	}

	return <FilteredResultsContext.Provider value={{ getData, results }}>{children}</FilteredResultsContext.Provider>;
};
