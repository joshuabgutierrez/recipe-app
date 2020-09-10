import React from 'react';
import styled from 'styled-components';
import Grid from '@material-ui/core/Grid';
import RecipeContainer from '../RecipeContainer';
import { useContext } from 'react';
import { FilteredResultsContext } from '../../Contexts/FilteredResultsContext';
import Typography from '@material-ui/core/Typography';

const RecipesFoundArea = styled.div`@media (max-width: 960px) {margin-top: 2em;}`;

const RecipesFound = () => {
	const { results } = useContext(FilteredResultsContext);

	return (
		<RecipesFoundArea>
			<Grid container>
				{results.length > 0 ? (
					results.map((result) => (
						<Grid item xs={12} sm={6} md={4} key={result.id}>
							<RecipeContainer
								id={result.id}
								image={result.image}
								title={result.title}
								source={result.sourceName}
								url={result.sourceUrl}
								calories={Math.floor(Number(result.nutrition.nutrients[0].amount))}
								servings={result.servings}
								time={result.readyInMinutes}
							/>
						</Grid>
					))
				) : (
					<Typography variant="h6" align="center">
						Loading...
					</Typography>
				)}
			</Grid>
		</RecipesFoundArea>
	);
};

export default RecipesFound;
