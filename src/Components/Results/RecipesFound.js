import React from 'react';
import styled from 'styled-components';
import Grid from '@material-ui/core/Grid';
import RecipeContainer from '../RecipeContainer';
import img from '../../assets/pancakes.jpg';

const RecipesFoundArea = styled.div`@media (max-width: 960px) {margin-top: 2em;}`;

const RecipesFound = () => {
	return (
		<RecipesFoundArea>
			<Grid container>
				<Grid item xs={12} sm={6} md={4}>
					<RecipeContainer
						image={img}
						label="Pancakes"
						source="Joshua"
						url="sdjfhaf"
						calories={200}
						servings={8}
						totalDaily
					/>
				</Grid>
				<Grid item xs={12} sm={6} md={4}>
					<RecipeContainer
						image={img}
						label="pancakes"
						source="Joshua"
						url="sdjfhaf"
						calories={200}
						servings={8}
						totalDaily
					/>
				</Grid>
				<Grid item xs={12} sm={6} md={4}>
					<RecipeContainer
						image={img}
						label="pancakes"
						source="Joshua"
						url="sdjfhaf"
						calories={200}
						servings={8}
						totalDaily
					/>
				</Grid>
				<Grid item xs={12} sm={6} md={4}>
					<RecipeContainer
						image={img}
						label="pancakes"
						source="Joshua"
						url="sdjfhaf"
						calories={200}
						servings={8}
						totalDaily
					/>
				</Grid>
				<Grid item xs={12} sm={6} md={4}>
					<RecipeContainer
						image={img}
						label="pancakes"
						source="Joshua"
						url="sdjfhaf"
						calories={200}
						servings={8}
						totalDaily
					/>
				</Grid>
				<Grid item xs={12} sm={6} md={4}>
					<RecipeContainer
						image={img}
						label="pancakes"
						source="Joshua"
						url="sdjfhaf"
						calories={200}
						servings={8}
						totalDaily
					/>
				</Grid>
			</Grid>
		</RecipesFoundArea>
	);
};

export default RecipesFound;
