import React, { useState } from 'react';
import { Container, Grid } from '@material-ui/core';
import FilterFormFirst from './FilterFormFirst';
import FilterFormSecond from './FilterFormSecond';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { getFilteredRecipes } from '../../actions/recipesActions';

const StyledForm = styled.form`
	display: flex;
	justify-content: center;
	align-items: center;
	margin: 5em 0;
`;

function FilterForm() {
	const [ query, setQuery ] = useState(localStorage.getItem('query'));
	const [ mealType, setMealType ] = useState(localStorage.getItem('mealType'));
	const [ dietType, setDietType ] = useState('default');
	const [ cuisine, setCuisine ] = useState('default');
	const [ intolerances, setIntolerances ] = useState('default');
	const [ minCalories, setMinCalories ] = useState('');
	const [ maxCalories, setMaxCalories ] = useState('');
	const dispatch = useDispatch();

	const handleSubmit = (e) => {
		e.preventDefault();

		dispatch(
			getFilteredRecipes(
				query,
				mealType,
				dietType,
				cuisine,
				intolerances,
				Number(minCalories),
				Number(maxCalories)
			)
		);
	};

	return (
		<StyledForm onSubmit={(e) => handleSubmit(e)}>
			<Container>
				<Grid container spacing={3}>
					<FilterFormFirst
						{...{ query, setQuery, mealType, setMealType, dietType, setDietType, cuisine, setCuisine }}
					/>
					<FilterFormSecond
						{...{ intolerances, setIntolerances, minCalories, setMinCalories, maxCalories, setMaxCalories }}
					/>
				</Grid>
			</Container>
		</StyledForm>
	);
}

export default FilterForm;
