import React, { useState, useEffect } from 'react';
import Typography from '@material-ui/core/Typography';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import Axios from 'axios';
import RecipeContainer from './RecipeContainer';
import Grid from '@material-ui/core/Grid';

const RecipeButtonsContainer = styled.div`
	margin: 1em 0 3em 0;
	display: flex;
	justify-content: center;
`;

const SuggestedButton = styled(Button)`
	border: none;
	padding: 0.25em 1.5em;
	margin: 0 0.5em;
	border-radius: 10px;
	font-size: 0.8rem;
	outline: none;
	cursor: pointer;
	background-color: ${({ selected }) => selected && 'red'};
	color: ${({ selected }) => selected && '#ffffff'};

	&:hover {
		background-color: ${({ selected }) => selected && 'red'};
		color: ${({ selected }) => selected && '#ffffff'};
	}
`;

const StyledSection = styled.section`margin-top: 2em;`;

const SuggestedRecipes = () => {
	const suggestions = [
		{
			id: 1,
			query: 'cheese'
		},
		{
			id: 2,
			query: 'pancakes'
		},
		{
			id: 3,
			query: 'chocolate'
		},
		{
			id: 4,
			query: 'eggs'
		},
		{
			id: 5,
			query: 'rice'
		},
		{
			id: 6,
			query: 'fish'
		}
	];

	const [ selected, setSelected ] = useState(suggestions[0].id);
	const [ query, setQuery ] = useState('cheese');
	const [ results, setResults ] = useState([]);

	const handleClick = (id, value) => {
		setSelected(id);
		setQuery(value);
	};

	useEffect(
		() => {
			async function getData() {
				try {
					const response = await Axios.get('api/v1/recipe', {
						params: { query: query, addRecipeInformation: true, addRecipeNutrition: true }
					});
					setResults(response.data.results);
				} catch (error) {
					console.log(error);
				}
			}
			getData();
		},
		[ query ]
	);

	return (
		<StyledSection>
			<Grid container>
				<Grid item xs={12} sm={12} md={12} lg={12}>
					<Typography variant="h4" align="center">
						Suggested Recipes
					</Typography>
					<Typography variant="body1" align="center">
						Some recipes we think you might like
					</Typography>
					<RecipeButtonsContainer>
						{suggestions.map((suggestion) => (
							<SuggestedButton
								variant="contained"
								selected={selected === suggestion.id}
								disableRipple={true}
								key={suggestion.id}
								onClick={() => handleClick(suggestion.id, suggestion.query)}
							>
								{suggestion.query}
							</SuggestedButton>
						))}
					</RecipeButtonsContainer>
				</Grid>
				<Grid item xs={12} sm={12} md={12} lg={12}>
					<Grid container spacing={2} justify="center" style={{ maxWidth: '100%' }}>
						{results.length > 0 ? (
							results.map((result) => (
								<Grid item key={result.id}>
									<RecipeContainer
										id={result.id}
										image={result.image}
										title={result.title}
										source={result.sourceName}
										calories={Math.floor(result.nutrition.nutrients[0].amount)}
										servings={result.servings}
										time={result.readyInMinutes}
									/>
								</Grid>
							))
						) : (
							<Typography variant="overline" align="center">
								Loading...
							</Typography>
						)}
					</Grid>
				</Grid>
			</Grid>
		</StyledSection>
	);
};

export default SuggestedRecipes;
