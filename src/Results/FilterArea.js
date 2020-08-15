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

const useStyles = makeStyles((theme) => ({
	formControl: {
		minWidth: 240
	},
	range: {
		width: '100%',
		maxWidth: '130px'
	}
}));

const StyledForm = styled.form`
	border: 1px solid blue;
	padding: 3em 0.5em 3em 5em;
`;

const FilterArea = () => {
	const classes = useStyles();
	const [ query, setQuery ] = useState('');
	const [ mealType, setMealType ] = useState('');
	const [ dietType, setDietType ] = useState('');
	const [ cuisine, setCuisine ] = useState('');
	const [ minCalories, setMinCalories ] = useState(0);
	const [ maxCalories, setMaxCalories ] = useState(100);

	return (
		<StyledForm>
			<Grid container spacing={3} alignItems="flex-end">
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
							<option value="main course">Main Course</option>
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
							<option value="Gluten Free">Gluten Free</option>
							<option value="Ketogenic">Ketogenic</option>
							<option value="Vegetarian">Vegetarian</option>
							<option value="Vegan">Vegan</option>
							<option value="Pescatarian">Pescatarian</option>
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
							<option value="Italian">Italian</option>
							<option value="Chinese">Chinese</option>
							<option value="French">French</option>
							<option value="Mexican">Mexican</option>
							<option value="American">American</option>
						</Select>
					</FormControl>
				</Grid>
				<Grid item md={12}>
					<Typography variant="subtitle2">Intolerancies</Typography>
					<ButtonGroup color="secondary" aria-label="outlined primary button group">
						<Button>Gluten</Button>
						<Button>Dairy</Button>
						<Button>Soy</Button>
						<Button>Wheat</Button>
					</ButtonGroup>
				</Grid>
				<Grid item md={12}>
					<Typography id="range-slider" gutterBottom>
						Calorie range
					</Typography>
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
					<Button variant="contained" color="primary">
						Submit
					</Button>
				</Grid>
			</Grid>
		</StyledForm>
	);
};

export default FilterArea;
