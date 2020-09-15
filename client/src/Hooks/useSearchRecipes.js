import { useState, useEffect } from 'react';
import Axios from 'axios';

const useSearchRecipes = ({ query, mealType, dietType, cuisine, intolerances, minCalories, maxCalories }) => {
	const [ recipes, setRecipes ] = useState([]);
	const [ err, setErr ] = useState('');

	const formattedIntolerances = intolerances.join(',');

	useEffect(() => {
		async function apiCall() {
			try {
				const response = await Axios.get('api/v1/recipe/filter', {
					params: {
						query,
						type: mealType,
						diet: dietType,
						cuisine,
						intolerances: formattedIntolerances,
						minCalories,
						maxCalories,
						addRecipeInformation: true
					}
				});
				setRecipes(response.data.results);
			} catch (error) {
				setErr(error);
			}
		}
		apiCall();
	}, []);

	return { recipes, err };
};

export default useSearchRecipes;
