import React from 'react';
import Description from '../Components/Description/Description';
import Utensils from '../Components/Utensils/Utensils';
import Instructions from '../Components/Instructions/Instructions';
import Nutrition from '../Components/Nutrition/Nutrition';
import Ingredients from '../Components/Ingredients/Ingredients';
import { Grid } from '@material-ui/core';
import styled from 'styled-components';
import cake from '../assets/chocolateCake.jpg';

const StyledImage = styled.img`
	display: block;
	max-width: 100%;
	width: 420px;
	height: 380px;
`;

const RecipeDetails = () => {
	return (
		<div style={{ padding: '3em' }}>
			<Grid container>
				<Grid item md={6}>
					<Grid container>
						<Grid item>
							<Description />
						</Grid>
						<Grid item>
							<Utensils />
						</Grid>
						<Grid item>
							<Instructions />
						</Grid>
						<Grid item>
							<Nutrition />
						</Grid>
					</Grid>
				</Grid>
				<Grid item md={6}>
					<Grid container justify="center">
						<Grid item>
							<StyledImage src={cake} alt="recipe image aside" />
							<Ingredients />
						</Grid>
					</Grid>
				</Grid>
			</Grid>
		</div>
	);
};

export default RecipeDetails;
