import { Grid, Typography } from '@material-ui/core';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getFilteredRecipes } from '../../actions/recipesActions';
import RecipeContainer from '../RecipeContainer/RecipeContainer';

function FilteredResults() {
	const filteredRecipes = useSelector((state) => state.filteredRecipes);
	const dispatch = useDispatch();
	const query = localStorage.getItem('query');
	const mealType = localStorage.getItem('mealType');

	const showResults = () => {
		if (filteredRecipes.loading) {
			return <Typography variant="h6">Loading ...</Typography>;
		}

		if (filteredRecipes.errorMessage) {
			return <Typography variant="h6">{filteredRecipes.errorMessage}</Typography>;
		}

		if (filteredRecipes.recipes.length > 0) {
			return filteredRecipes.recipes.map((recipe) => (
				<Grid item xs={10} sm={4} md={6} lg={4} key={recipe.id}>
					<RecipeContainer {...recipe} />
				</Grid>
			));
		}
	};

	const fetchRecipes = (query, type) => {
		dispatch(getFilteredRecipes(query, type));
	};

	useEffect(() => {
		fetchRecipes(query, mealType);
	}, []);
	return (
		<Grid container justify="center">
			{showResults()}
		</Grid>
	);
}

export default FilteredResults;
