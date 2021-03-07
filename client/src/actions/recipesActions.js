import axios from 'axios';
import { filteredRecipesActions, singleRecipeActions, suggestedRecipesActions } from './constants';

// Get suggested recipes
export function getSuggestedRecipes(query) {
	return async function(dispatch) {
		try {
			dispatch({
				type: suggestedRecipesActions.SUGGESTED_RECIPES_LOADING
			});

			const response = await axios.get('api/recipes', {
				params: {
					query
				}
			});

			dispatch({
				type: suggestedRecipesActions.SUGGESTED_RECIPES_SUCCESS,
				payload: response.data.results
			});
		} catch (error) {
			dispatch({
				type: suggestedRecipesActions.SUGGESTED_RECIPES_FAIL
			});
		}
	};
}

// Get filtered recipes
export function getFilteredRecipes(
	query = '',
	type = '',
	diet = '',
	cuisine = '',
	intolerances = '',
	minCalories = 0,
	maxCalories = 0
) {
	return async function(dispatch) {
		try {
			dispatch({
				type: filteredRecipesActions.FILTERED_RECIPES_LOADING
			});

			const response = await axios.get('api/recipes/filter', {
				params: {
					query,
					type,
					diet,
					cuisine,
					intolerances,
					minCalories,
					maxCalories
				}
			});

			dispatch({
				type: filteredRecipesActions.FILTERED_RECIPES_SUCCESS,
				payload: response.data.results
			});
		} catch (error) {
			dispatch({
				type: filteredRecipesActions.FILTERED_RECIPES_FAIL
			});
		}
	};
}

export function getSingleRecipe(id) {
	return function(dispatch) {
		dispatch({
			type: singleRecipeActions.SINGLE_RECIPE_LOADING
		});

		const detailsPromise = axios.get(`api/recipes/details/${id}`);
		const instructionsPromise = axios.get(`api/recipes/instructions/${id}`);

		Promise.all([ detailsPromise, instructionsPromise ])
			.then((values) => dispatch({ type: singleRecipeActions.SINGLE_RECIPE_SUCCESS, payload: values }))
			.catch((error) => dispatch({ type: singleRecipeActions.SINGLE_RECIPE_FAIL }));
	};
}
