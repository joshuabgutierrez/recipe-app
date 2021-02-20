import React, { useState } from 'react';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router-dom';
import { useContext } from 'react';
import { InitialValuesContext } from '../../Contexts/InitialValuesContext';
import { MdRestaurantMenu as UtensilsIcon } from 'react-icons/md';
import { Divider, FormControl, Grid, MenuItem, Select } from '@material-ui/core';
import { GoSearch as SearchIcon } from 'react-icons/go';
import { useTheme } from '@material-ui/styles';

const StyledForm = styled.form`
	background-color: #ffffff;
	border-radius: 5px;
	padding: 0.5em;
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

const SearchForm = () => {
	const [ input, setInput ] = useState('');
	const [ category, setCategory ] = useState('default');
	let history = useHistory();
	const { getValues } = useContext(InitialValuesContext);
	const theme = useTheme();

	const handleSubmit = (e) => {
		e.preventDefault();
		getValues(input, category);
		history.push('/results');
	};

	return (
		<StyledForm onSubmit={handleSubmit}>
			<Grid container>
				<Grid item xs={12} sm={12} md={12} lg={12}>
					<Grid container justify="space-between" alignItems="center">
						<Grid item xs={1} sm={1} md={1} lg={1}>
							<UtensilsIcon size={25} color={theme.palette.primary.main} />
						</Grid>
						<Grid item xs={5} sm={5} md={5} lg={5}>
							<SearchMealInput
								required
								type="text"
								placeholder="What do you have in your fridge?"
								value={input}
								onChange={(e) => setInput(e.target.value)}
							/>
						</Grid>
						<StyledDivider orientation="vertical" flexItem />
						<Grid item xs={3} sm={3} md={3} lg={3}>
							<FormControl fullWidth>
								<Select
									disableUnderline
									labelId="category"
									id="category"
									value={category}
									onChange={(e) => setCategory(e.target.value)}
								>
									<MenuItem value="default" disabled>
										Meal Type
									</MenuItem>
									<MenuItem value="appetizer">Appetizer</MenuItem>
									<MenuItem value="breakfast">Breakfast</MenuItem>
									<MenuItem value="mainCourse">Main Course</MenuItem>
									<MenuItem value="salad">Salad</MenuItem>
									<MenuItem value="beverage">Beverage</MenuItem>
								</Select>
							</FormControl>
						</Grid>
						<Grid item xs={2} sm={2} md={2} lg={2}>
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
