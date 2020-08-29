import React from 'react';
import { createContext } from 'react';
import { useParams } from 'react-router-dom';
import useFetchDetails from '../Hooks/useFetchDetails';

export const RecipeDetailsContext = createContext();

export const RecipeDetailsContextProvider = ({ children }) => {
	const { id } = useParams();

	const apiUri = `http://localhost:5000/recipe/details/${id}`;
	const secondApiUri = `http://localhost:5000/recipe/equipment/${id}`;

	const { data, utensils, loading } = useFetchDetails(apiUri, secondApiUri);

	function getNutrients() {
		const nutrients = [ 'Calories', 'Carbohydrates', 'Protein', 'Fat', 'Sugar' ];
		return data.nutrition.nutrients.filter((nutrient) => nutrients.includes(nutrient.title));
	}

	function getIngredients() {
		const values = [];
		data.extendedIngredients.forEach((ingredient) => {
			let valuesObject = {
				id: ingredient.id,
				amount: ingredient.amount,
				unit: ingredient.unit,
				originalName: ingredient.originalName,
				original: ingredient.original
			};
			values.push(valuesObject);
		});
		return values;
	}

	function getInstructions() {
		return data.analyzedInstructions[0].steps;
	}

	return (
		<RecipeDetailsContext.Provider
			value={{ data, loading, getNutrients, getIngredients, getInstructions, utensils }}
		>
			{children}
		</RecipeDetailsContext.Provider>
	);
};
