import { useState, useEffect } from 'react';
import Axios from 'axios';

const useSearchRecipes = ({ query, mealType, dietType, cuisine, intolerances, minCalories, maxCalories }) => {
	const [ recipes, setRecipes ] = useState([]);
	const [ err, setErr ] = useState('');

	const API_KEY = 'YOUR API KEY';
	let apiUri = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&query=${query}&type=${mealType}&diet=${dietType}&cuisine=${cuisine}&intolerances=${intolerances.join(
		','
	)}&minCalories=${minCalories}&maxCalories=${maxCalories}&addRecipeInformation=true`;

	useEffect(
		() => {
			async function apiCall() {
				try {
					const response = await Axios.get(apiUri);
					setRecipes(response);
				} catch (error) {
					setErr(error);
				}
			}
			apiCall();
		},
		[ apiUri ]
	);

	return { recipes, err };
};

export default useSearchRecipes;
