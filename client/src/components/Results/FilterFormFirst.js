import React from 'react';
import {
	FormControl,
	Grid,
	InputAdornment,
	makeStyles,
	MenuItem,
	Select,
	TextField,
	Typography
} from '@material-ui/core';
import { BiSearchAlt2 as SearchIcon } from 'react-icons/bi';

const useStyles = makeStyles((theme) => ({
	fixedWidth: {
		width: '60%',
		[theme.breakpoints.down('xs')]: {
			width: '80%'
		}
	},
	flex: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center'
	}
}));

function FilterFormFirst({ query, setQuery, mealType, setMealType, dietType, setDietType, cuisine, setCuisine }) {
	const classes = useStyles();
	return (
		<React.Fragment>
			<Grid item xs={12} className={classes.flex}>
				<TextField
					required
					className={classes.fixedWidth}
					id="input-with-icon-textfield"
					label="Search"
					variant="outlined"
					size="small"
					InputProps={{
						endAdornment: (
							<InputAdornment position="end">
								<SearchIcon />
							</InputAdornment>
						)
					}}
					value={query}
					onChange={(e) => setQuery(e.target.value)}
				/>
			</Grid>
			<Grid item xs={12} className={classes.flex}>
				<FormControl size="small" className={classes.fixedWidth}>
					<Typography variant="body2">Meal Type</Typography>
					<Select
						labelId="meal_type"
						id="meal_type"
						variant="outlined"
						value={mealType}
						onChange={(e) => setMealType(e.target.value)}
					>
						<MenuItem value="default" disabled>
							Select a meal type
						</MenuItem>
						<MenuItem value="main course">Main Course</MenuItem>
						<MenuItem value="side dish">Side Dish</MenuItem>
						<MenuItem value="dessert">Dessert</MenuItem>
						<MenuItem value="appetizer">Appetizer</MenuItem>
						<MenuItem value="salad">Salad</MenuItem>
						<MenuItem value="breakfast">Breakfast</MenuItem>
						<MenuItem value="soup">Soup</MenuItem>
						<MenuItem value="beverage">Beverage</MenuItem>
						<MenuItem value="snack">Snack</MenuItem>
						<MenuItem value="drink">Drink</MenuItem>
					</Select>
				</FormControl>
			</Grid>
			<Grid item xs={12} className={classes.flex}>
				<FormControl size="small" className={classes.fixedWidth}>
					<Typography variant="body2">Diet Type</Typography>
					<Select
						labelId="diet_type"
						id="diet_type"
						variant="outlined"
						value={dietType}
						onChange={(e) => setDietType(e.target.value)}
					>
						<MenuItem value="default" disabled>
							Select a diet type
						</MenuItem>
						<MenuItem value="glutenFree">Gluten Free</MenuItem>
						<MenuItem value="ketogenic">Ketogenic</MenuItem>
						<MenuItem value="vegetarian">Vegetarian</MenuItem>
						<MenuItem value="vegan">Vegan</MenuItem>
						<MenuItem value="pescatarian">Pescatarian</MenuItem>
					</Select>
				</FormControl>
			</Grid>
			<Grid item xs={12} className={classes.flex}>
				<FormControl variant="outlined" color="secondary" size="small" className={classes.fixedWidth}>
					<Typography variant="body2">Cuisine</Typography>
					<Select
						labelId="cuisine"
						id="cuisine"
						variant="outlined"
						value={cuisine}
						onChange={(e) => setCuisine(e.target.value)}
					>
						<MenuItem value="default" disabled>
							None
						</MenuItem>
						<MenuItem value="italian">Italian</MenuItem>
						<MenuItem value="chinese">Chinese</MenuItem>
						<MenuItem value="french">French</MenuItem>
						<MenuItem value="mexican">Mexican</MenuItem>
						<MenuItem value="american">American</MenuItem>
					</Select>
				</FormControl>
			</Grid>
		</React.Fragment>
	);
}

export default FilterFormFirst;
