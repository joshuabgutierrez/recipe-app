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

	const API_KEY = 'YOUR API KEY';

	useEffect(
		() => {
			async function getData() {
				try {
					const response = await Axios.get(
						`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&query=${query}`
					);
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
						onClick={() => handleClick(suggestion.id, suggestion.query)}
					>
						{suggestion.query}
					</SuggestedButton>
				))}
			</RecipeButtonsContainer>
			<Grid container spacing={2} justify="center">
				{results.length > 0 ? (
					results.map((result) => (
						<Grid item key={result.id}>
							<RecipeContainer
								image={result.image}
								label={result.title}
								source={result.author}
								url={'Not yet'}
								calories={180}
								servings={4}
								totalDaily={10}
							/>
						</Grid>
					))
				) : (
					<Typography variant="overline" align="center">
						Loading...
					</Typography>
				)}
			</Grid>
		</div>
	);
};

export default SuggestedRecipes;
