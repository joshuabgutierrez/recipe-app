import React from 'react';
import { Container, Grid } from '@material-ui/core';
import RecipeInstructions from './RecipeInstructions';
import RecipeIngredients from './RecipeIngredients';

function RecipeMain() {
	return (
		<Container>
			<Grid container justify="center" spacing={4}>
				<Grid item xs={12} sm={10} md={5}>
					<RecipeInstructions />
				</Grid>
				<Grid item xs={12} sm={10} md={5}>
					<RecipeIngredients />
				</Grid>
			</Grid>
		</Container>
	);
}

export default RecipeMain;
