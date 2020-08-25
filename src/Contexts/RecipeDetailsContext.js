import React from 'react';
import { createContext } from 'react';
import { useParams } from 'react-router-dom';
import useFetchDetails from '../Hooks/useFetchDetails';

export const RecipeDetailsContext = createContext();

export const RecipeDetailsContextProvider = ({ children }) => {
	const { id } = useParams();
	const API_KEY = 'YOUR API KEY';
	const apiUri = `https://api.spoonacular.com/recipes/${id}/information?apiKey=${API_KEY}&includeNutrition=${true}&addRecipeInformation=${true}`;

	const { data, loading } = useFetchDetails(apiUri);

	function getNutrients() {
		const nutrients = [ 'Calories', 'Carbohydrates', 'Protein', 'Fat', 'Sugar' ];
		return data.nutrition.nutrients.filter((nutrient) => nutrients.includes(nutrient.title));
	}

	return (
		<RecipeDetailsContext.Provider value={{ data, loading, getNutrients }}>
			{children}
		</RecipeDetailsContext.Provider>
	);
};
