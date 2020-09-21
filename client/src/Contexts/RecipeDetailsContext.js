import React from 'react';
import { createContext } from 'react';
import { useParams } from 'react-router-dom';
import useFetchDetails from '../Hooks/useFetchDetails';

export const RecipeDetailsContext = createContext();

export const RecipeDetailsContextProvider = ({ children }) => {
	const { id } = useParams();

	const apiUri = `api/v1/recipe/details/${id}`;
	const secondApiUri = `api/v1/recipe/equipment/${id}`;
	const thirdUri = `api/v1/recipe/instructions/${id}`;

	const { data, utensils, instructions, loading, error } = useFetchDetails(apiUri, secondApiUri, thirdUri);

	function getNutrients() {
		const nutrients = [ 'Calories', 'Carbohydrates', 'Protein', 'Fat', 'Sugar' ];
		return data.nutrition.nutrients.filter((nutrient) => nutrients.includes(nutrient.title));
	}

	function getIngredients() {
		const values = [];
		data.extendedIngredients.forEach((ingredient) => {
			let valuesObject = {
				id: ingredient.id,
				amount: ingredient.measures.us.amount,
				unitShort: ingredient.measures.us.unitShort,
				originalName: ingredient.originalName
			};
			values.push(valuesObject);
		});
		return values;
	}

	function getInstructions() {
		return instructions;
	}

	return (
		<RecipeDetailsContext.Provider
			value={{ data, loading, getNutrients, getIngredients, getInstructions, utensils, error }}
		>
			{children}
		</RecipeDetailsContext.Provider>
	);
};
