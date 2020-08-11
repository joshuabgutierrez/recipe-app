import React, { useState, useEffect } from 'react';
import Typography from '@material-ui/core/Typography';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import axios from 'axios';
import RecipeContainer from '../RecipeContainer';
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

const SuggestedRecipes = () => {
	const suggestions = [
		{
			id: 1,
			meal: 'cheese'
		},
		{
			id: 2,
			meal: 'pancakes'
		},
		{
			id: 3,
			meal: 'chocolate'
		},
		{
			id: 4,
			meal: 'eggs'
		},
		{
			id: 5,
			meal: 'rice'
		},
		{
			id: 6,
			meal: 'fish'
		}
	];

	const [ selected, setSelected ] = useState(suggestions[0].id);
	const [ keyword, setKeyword ] = useState('cheese');
	const [ results, setResults ] = useState([]);

	const handleClick = (id, value) => {
		setSelected(id);
		setKeyword(value);
	};

	useEffect(
		() => {
			const getData = async () => {
				const api_id = 'YOUR API ID';
				const api_key = 'YOUR API KEY';
				try {
					const response = await axios.get(
						`https://api.edamam.com/search?q=${keyword}&app_id=${api_id}&app_key=${api_key}`
					);
					setResults(response.data.hits);
				} catch (error) {
					console.log(error);
				}
			};
			getData();
		},
		[ keyword ]
	);

	return (
		<div>
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
						onClick={() => handleClick(suggestion.id, suggestion.meal)}
					>
						{suggestion.meal}
					</SuggestedButton>
				))}
			</RecipeButtonsContainer>
			<Grid container spacing={3} justify="center">
				{results.length > 0 ? (
					results.map((result) => (
						<Grid item key={result.recipe.uri}>
							<RecipeContainer
								image={result.recipe.image}
								label={result.recipe.label}
								source={result.recipe.source}
								url={result.recipe.url}
							/>
						</Grid>
					))
				) : (
					'Loading...'
				)}
			</Grid>
		</div>
	);
};

export default SuggestedRecipes;
