import { Container, Grid, makeStyles } from '@material-ui/core';
import React from 'react';
import { useSelector } from 'react-redux';
import RecipeContainer from '../RecipeContainer/RecipeContainer';
import Typography from '@material-ui/core/Typography';

const recipeStyles = makeStyles({
	spacing: {
		margin: '3em 0'
	}
});

function SuggestedRecipes() {
	const classes = recipeStyles();
	const state = useSelector((state) => state.suggestedRecipes);

	const showSuggestedRecipes = () => {
		if (state.loading) {
			return <Typography variant="h6">Loading ...</Typography>;
		}

		if (state.errorMessage) {
			return <Typography variant="h6">{state.errorMessage}</Typography>;
		}

		if (state.recipes.length > 0) {
			return state.recipes.map((recipe) => (
				<Grid item xs={12} sm={6} md={4} lg={3} key={recipe.id}>
					<RecipeContainer {...recipe} />
				</Grid>
			));
		}
	};
	return (
		<Container>
			<Grid container justify="center" className={classes.spacing}>
				{showSuggestedRecipes()}
			</Grid>
		</Container>
	);
}

export default SuggestedRecipes;
