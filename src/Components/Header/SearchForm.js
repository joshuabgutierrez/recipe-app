import React, { useState } from 'react';
import LocalDiningIcon from '@material-ui/icons/LocalDining';
import SearchIcon from '@material-ui/icons/Search';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router-dom';
import { useContext } from 'react';
import { InitialValuesContext } from '../../Contexts/InitialValuesContext';

const SearchInputContainer = styled.form`
	background-color: #ffffff;
	padding: 0.2em;
	border-radius: 5px;
	margin-top: 1em;
	display: flex;

	& > * {
		margin: 0 0.1em;
	}

	@media (max-width: 580px) {
		width: 100%;
		max-width: 270px;
		margin: 1em auto 0em auto;
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
	${(props) => props.error};
`;

const CategoryDropdown = styled.select`
	flex: 25%;
	border: none;
	outline: none;

	@media (max-width: 580px) {
		display: none;
	}
`;

const SearchForm = () => {
	const [ input, setInput ] = useState('');
	const [ category, setCategory ] = useState('');
	const [ errorStyles, setErrorStyles ] = useState();
	let history = useHistory();
	const { getValues } = useContext(InitialValuesContext);

	const handleSubmit = (e) => {
		e.preventDefault();
		if (input === '') {
			setErrorStyles({ 'background-color': '#ddd', border: '1px solid red' });
		} else {
			getValues(input, category);
			history.push('/results');
		}
	};

	return (
		<SearchInputContainer onSubmit={handleSubmit}>
			<StyledLocalDiningIcon color="primary" />
			<SearchMealInput
				type="text"
				placeholder="What do you have in your fridge?"
				value={input}
				onChange={(e) => setInput(e.target.value)}
				error={input === '' && errorStyles}
			/>
			<CategoryDropdown value={category} onChange={(e) => setCategory(e.target.value)}>
				<option aria-label="None" value="" disabled>
					Meal Type
				</option>
				<option value="appetizer">Appetizer</option>
				<option value="breakfast">Breakfast</option>
				<option value="mainCourse">Main Course</option>
				<option value="salad">Salad</option>
				<option value="beverage">Beverage</option>
			</CategoryDropdown>
			<Button variant="contained" color="primary" type="submit">
				<StyledSearchIcon />
			</Button>
		</SearchInputContainer>
	);
};

export default SearchForm;
