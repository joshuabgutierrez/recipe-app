import React from 'react';
import Description from '../Components/Description/Description';
import Utensils from '../Components/Utensils/Utensils';
import Instructions from '../Components/Instructions/Instructions';
import Nutrition from '../Components/Nutrition/Nutrition';
import Ingredients from '../Components/Ingredients/Ingredients';
import { Grid, Typography } from '@material-ui/core';
import styled from 'styled-components';
import { useContext } from 'react';
import { RecipeDetailsContext } from '../Contexts/RecipeDetailsContext';

const StyledImage = styled.img`
	display: block;
	max-width: 100%;
	width: 420px;
	height: 380px;
`;

const RecipeDetails = () => {
	const { data, loading } = useContext(RecipeDetailsContext);

	return (
		<div style={{ padding: '3em' }}>
			{loading ? (
				<Typography align="center">Loading...</Typography>
			) : (
				<Grid container>
					<Grid item md={6}>
						<Grid container>
							<Grid item>
								<Description />
							</Grid>
							<Grid item>
								<Utensils />
							</Grid>
							<Grid item md={12}>
								<Instructions />
							</Grid>
							<Grid item md={12}>
								<Nutrition />
							</Grid>
						</Grid>
					</Grid>
					<Grid item md={6} style={{ margin: '0 auto' }}>
						<Grid container justify="center">
							<Grid item>
								<StyledImage src={data.image} alt="recipe image aside" />
								<Ingredients />
							</Grid>
						</Grid>
					</Grid>
				</Grid>
			)}
		</div>
	);
};

export default RecipeDetails;
