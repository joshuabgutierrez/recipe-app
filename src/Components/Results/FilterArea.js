import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import { Typography, makeStyles, InputAdornment, OutlinedInput } from '@material-ui/core';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { useState } from 'react';
import styled from 'styled-components';
import useSearchRecipes from '../../Hooks/useSearchRecipes';

const useStyles = makeStyles((theme) => ({
	formControl: {
		minWidth: 240
	},
	range: {
		width: '100%',
		maxWidth: '120px'
	}
}));

const StyledForm = styled.form`
	max-width: 300px;
	width: 100%;
	margin: 0 auto;

	@media (max-width: 675px) {
		padding: 0em;
	}
`;

const FilterArea = () => {
	const classes = useStyles();
	const [ query, setQuery ] = useState('');
	const [ mealType, setMealType ] = useState('');
	const [ dietType, setDietType ] = useState('');
	const [ cuisine, setCuisine ] = useState('');
	const [ intolerances, setIntolerances ] = useState([]);
	const [ minCalories, setMinCalories ] = useState(0);
	const [ maxCalories, setMaxCalories ] = useState(100);

	const handleIntolerances = (newValue) => {
		if (intolerances.includes(newValue)) {
			return setIntolerances(intolerances.filter((intolerance) => intolerance !== newValue));
		} else {
			return setIntolerances([ ...intolerances, newValue ]);
		}
	};

	const formValues = {
		query,
		mealType,
		dietType,
		cuisine,
		intolerances,
		minCalories,
		maxCalories
	};

	const { recipes } = useSearchRecipes(formValues);

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(recipes);
	};

	return (
		<StyledForm onSubmit={handleSubmit}>
			<Grid container spacing={3} justify="center">
				<Grid item md={12}>
					<FormControl variant="outlined" color="secondary" size="small">
						<InputLabel htmlFor="outlined-adornment-query">Search</InputLabel>
						<OutlinedInput
							id="outlined-adornment-password"
							type="text"
							value={query}
							onChange={(e) => setQuery(e.target.value)}
							endAdornment={
								<InputAdornment position="end">
									<SearchIcon aria-label="search icon" edge="end" />
								</InputAdornment>
							}
							labelWidth={70}
						/>
					</FormControl>
				</Grid>
				<Grid item md={12}>
					<Typography variant="subtitle2">Meal Type</Typography>
					<FormControl className={classes.formControl} variant="outlined" color="secondary" size="small">
						<Select
							native
							value={mealType}
							onChange={(e) => setMealType(e.target.value)}
							inputProps={{
								name: 'mealType',
								id: 'mealType-native-simple'
							}}
						>
							<option aria-label="None" value="" disabled>
								Meal
							</option>
							<option value="appetizer">Appetizer</option>
							<option value="breakfast">Breakfast</option>
							<option value="mainCourse">Main Course</option>
							<option value="salad">Salad</option>
							<option value="beverage">Beverage</option>
						</Select>
					</FormControl>
				</Grid>
				<Grid item md={12}>
					<Typography variant="subtitle2">Diet Type</Typography>
					<FormControl className={classes.formControl} variant="outlined" color="secondary" size="small">
						<Select
							native
							value={dietType}
							onChange={(e) => setDietType(e.target.value)}
							inputProps={{
								name: 'dietType',
								id: 'dietType-native-simple'
							}}
						>
							<option aria-label="None" value="" disabled>
								Diet
							</option>
							<option value="glutenFree">Gluten Free</option>
							<option value="ketogenic">Ketogenic</option>
							<option value="vegetarian">Vegetarian</option>
							<option value="vegan">Vegan</option>
							<option value="pescatarian">Pescatarian</option>
						</Select>
					</FormControl>
				</Grid>
				<Grid item md={12}>
					<Typography variant="subtitle2">Cuisine</Typography>
					<FormControl className={classes.formControl} variant="outlined" color="secondary" size="small">
						<Select
							native
							value={cuisine}
							onChange={(e) => setCuisine(e.target.value)}
							inputProps={{
								name: 'cuisine',
								id: 'cuisine-native-simple'
							}}
						>
							<option aria-label="None" value="" disabled>
								None
							</option>
							<option value="italian">Italian</option>
							<option value="chinese">Chinese</option>
							<option value="french">French</option>
							<option value="mexican">Mexican</option>
							<option value="american">American</option>
						</Select>
					</FormControl>
				</Grid>
				<Grid item md={12}>
					<Typography variant="subtitle2">Intolerancies</Typography>
					<ButtonGroup aria-label="outlined primary button group" size="small">
						<Button color="secondary" onClick={(e) => handleIntolerances(e.target.textContent)}>
							Gluten
						</Button>
						<Button color="secondary" onClick={(e) => handleIntolerances(e.target.textContent)}>
							Dairy
						</Button>
						<Button color="secondary" onClick={(e) => handleIntolerances(e.target.textContent)}>
							Soy
						</Button>
						<Button color="secondary" onClick={(e) => handleIntolerances(e.target.textContent)}>
							Wheat
						</Button>
					</ButtonGroup>
				</Grid>
				<Grid item md={12}>
					<Typography variant="subtitle2">Calorie Range</Typography>
					<FormControl variant="outlined" size="small" color="secondary" className={classes.range}>
						<OutlinedInput
							type="number"
							id="outlined-adornment-amount"
							value={minCalories}
							onChange={(e) => setMinCalories(e.target.value)}
							startAdornment={<InputAdornment position="start">Min</InputAdornment>}
						/>
					</FormControl>
					<FormControl variant="outlined" size="small" color="secondary" className={classes.range}>
						<OutlinedInput
							type="number"
							id="outlined-adornment-amount"
							value={maxCalories}
							onChange={(e) => setMaxCalories(e.target.value)}
							startAdornment={<InputAdornment position="start">Max</InputAdornment>}
						/>
					</FormControl>
				</Grid>
				<Grid item md={12}>
					<Button variant="contained" color="primary" type="submit">
						Submit
					</Button>
				</Grid>
			</Grid>
		</StyledForm>
	);
};

export default FilterArea;
