import React from 'react';
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

const StyledDivider = styled.hr`
	border: none;
	border-top: 3px dotted #f00;
	color: #fff;
	background-color: #fff;
	height: 1px;
	width: 50%;
	margin: 1em 0;
`;

function RecipeIngredients() {
	const recipe = useSelector((state) => state.singleRecipe);

	const showIngredients = () => {
		if (recipe.loading) {
			return <Typography variant="subtitle2">Loading ...</Typography>;
		}

		if (recipe.detailsErrorMessage) {
			return <Typography variant="subtitle2">{recipe.detailsErrorMessage}</Typography>;
		}

		if (recipe.details !== {}) {
			return recipe.details.extendedIngredients.map((ingredient, index) => (
				<Grid item xs={12} key={index}>
					<Typography variant="body1">{ingredient.original}</Typography>
					<StyledDivider />
				</Grid>
			));
		}
	};

	return recipe.loading ? (
		<Typography variant="subtitle2">...</Typography>
	) : (
		<Grid container justify="center">
			<Grid item xs={10} md={10}>
				<Typography gutterBottom variant="h6">
					Ingredients
				</Typography>
			</Grid>
			<Grid item xs={10} md={10}>
				<Grid container>{showIngredients()}</Grid>
			</Grid>
		</Grid>
	);
}

export default RecipeIngredients;
