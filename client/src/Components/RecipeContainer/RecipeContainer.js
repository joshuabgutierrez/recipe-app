import { Card, CardActionArea, CardContent, CardMedia, Grid, makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

const StyledCardMedia = styled(CardMedia)`
    height: 200px;
    object-fit: cover;
`;

const StyledCard = styled(Card)`
    margin: 1em;
`;

const useStyles = makeStyles({
	root: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		padding: '1em'
	}
});

function RecipeContainer(recipe) {
	const classes = useStyles();
	const history = useHistory();

	const redirect = () => {
		history.push({
			pathname: `/results/${recipe.id}`
		});
	};

	return (
		<StyledCard onClick={redirect}>
			<CardActionArea>
				<StyledCardMedia image={recipe.image} title={recipe.title} />
				<CardContent>
					<Typography variant="h6" align="center">
						{recipe.title}
					</Typography>
					<Typography gutterBottom variant="subtitle2" align="center">
						By {recipe.sourceName || 'Spoonacular'}
					</Typography>
					<Grid container>
						<Grid item xs={4} sm={6} md={4} className={classes.root}>
							<Typography variant="body2">{Math.floor(recipe.nutrition.nutrients[0].amount)}</Typography>
							<Typography variant="subtitle2">Calories</Typography>
						</Grid>
						<Grid item xs={4} sm={6} md={4} className={classes.root}>
							<Typography variant="body2">{recipe.readyInMinutes}</Typography>
							<Typography variant="subtitle2">Duration</Typography>
						</Grid>
						<Grid item xs={4} sm={12} md={4} className={classes.root}>
							<Typography variant="body2">{recipe.servings}</Typography>
							<Typography variant="subtitle2">Servings</Typography>
						</Grid>
					</Grid>
				</CardContent>
			</CardActionArea>
		</StyledCard>
	);
}

export default RecipeContainer;
