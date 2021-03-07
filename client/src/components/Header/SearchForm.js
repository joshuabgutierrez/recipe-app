import React, { useState } from 'react';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import { MdRestaurantMenu as UtensilsIcon } from 'react-icons/md';
import { Divider, FormControl, Grid, makeStyles, MenuItem, Select } from '@material-ui/core';
import { GoSearch as SearchIcon } from 'react-icons/go';
import { useTheme } from '@material-ui/styles';

const StyledForm = styled.form`
	background-color: #ffffff;
	border-radius: 5px;
	padding: 0.5em;
	margin: 0.5em 0;
`;

const StyledSearchIcon = styled(SearchIcon)`
    color: #FFF;
`;

const SearchMealInput = styled.input`
	width: 100%;
	border: none;
	outline: none;
	${(props) => props.error};
`;

const StyledDivider = styled(Divider)`
	margin-right: 1em;
`;

const responsiveStyles = makeStyles((theme) => ({
	button: {
		[theme.breakpoints.down('xs')]: {
			maxWidth: '100%'
		}
	},
	hidden: {
		[theme.breakpoints.down('xs')]: {
			display: 'none'
		}
	}
}));

const SearchForm = () => {
	const classes = responsiveStyles();
	const [ food, setFood ] = useState('');
	const [ mealType, setMealType ] = useState('default');
	const theme = useTheme();

	const handleSubmit = (e) => {
		e.preventDefault();
		window.location = '/results';

		// Store main form values on local storage
		localStorage.setItem('query', food);
		localStorage.setItem('mealType', mealType);
	};

	return (
		<StyledForm onSubmit={(e) => handleSubmit(e)}>
			<Grid container>
				<Grid item xs={12}>
					<Grid container justify="space-between" alignItems="center">
						<Grid item xs={1} className={classes.hidden}>
							<UtensilsIcon size={25} color={theme.palette.primary.main} />
						</Grid>
						<Grid item xs={5}>
							<SearchMealInput
								required
								type="text"
								placeholder="What do you have in your fridge?"
								value={food}
								onChange={(e) => setFood(e.target.value)}
							/>
						</Grid>
						<StyledDivider orientation="vertical" flexItem />
						<Grid item xs={3}>
							<FormControl fullWidth>
								<Select
									disableUnderline
									labelId="category"
									id="category"
									value={mealType}
									onChange={(e) => setMealType(e.target.value)}
								>
									<MenuItem value="default" disabled>
										Meal Type
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
						<Grid item xs={2} className={classes.button}>
							<Button variant="contained" color="primary" type="submit" fullWidth>
								<StyledSearchIcon size={20} />
							</Button>
						</Grid>
					</Grid>
				</Grid>
			</Grid>
		</StyledForm>
	);
};

export default SearchForm;
