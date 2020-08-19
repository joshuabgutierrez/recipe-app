import React, { useState } from 'react';
import LocalDiningIcon from '@material-ui/icons/LocalDining';
import SearchIcon from '@material-ui/icons/Search';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';

const SearchInputContainer = styled.form`
	background-color: #ffffff;
	padding: 0.2em;
	border-radius: 5px;
	margin-top: 1em;
	display: flex;

	& > * {
		margin: 0 0.1em;
	}
`;

const StyledLocalDiningIcon = styled(LocalDiningIcon)`
    align-self: center;
    flex: 5%;
`;
const StyledSearchIcon = styled(SearchIcon)`
    color: #FFF;
`;

const SearchMealInput = styled.input`
	flex: 40%;
	border: none;
	outline: none;
	border-right: 1px solid rgba(0, 0, 0, 0.2);
`;

const CategoryDropdown = styled.select`
	flex: 25%;
	border: none;
	outline: none;
`;

const SearchForm = () => {
	const [ input, setInput ] = useState('');
	const [ category, setCategory ] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log('I just sent a query');
	};

	return (
		<SearchInputContainer onSubmit={handleSubmit}>
			<StyledLocalDiningIcon color="primary" />
			<SearchMealInput
				type="text"
				placeholder="Enter a recipe"
				value={input}
				onChange={(e) => setInput(e.target.value)}
			/>
			<CategoryDropdown value={category} onChange={(e) => setCategory(e.target.value)}>
				<option value="category">Category</option>
				<option value="breakfast">Breakfast</option>
				<option value="lunch">Lunch</option>
				<option value="dinner">Dinner</option>
			</CategoryDropdown>
			<Button variant="contained" color="primary" type="submit">
				<StyledSearchIcon />
			</Button>
		</SearchInputContainer>
	);
};

export default SearchForm;
