import React from 'react';
import { createContext } from 'react';
import { useParams } from 'react-router-dom';
import useFetchDetails from '../Hooks/useFetchDetails';

export const RecipeDetailsContext = createContext();

export const RecipeDetailsContextProvider = ({ children }) => {
	const { id } = useParams();

	const apiUri = `http://localhost:5000/recipe/details/${id}`;
	const secondApiUri = `http://localhost:5000/recipe/equipment/${id}`;
	const thirdUri = `http://localhost:5000/recipe/instructions/${id}`;

	const { data, utensils, instructions, loading } = useFetchDetails(apiUri, secondApiUri, thirdUri);

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
			value={{ data, loading, getNutrients, getIngredients, getInstructions, utensils }}
		>
			{children}
		</RecipeDetailsContext.Provider>
	);
};
