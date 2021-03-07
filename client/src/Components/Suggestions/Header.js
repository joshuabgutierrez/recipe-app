import React, { useEffect, useState } from 'react';
import Typography from '@material-ui/core/Typography';
import styled from 'styled-components';
import { Button, Container, Grid } from '@material-ui/core';
import { suggestions } from '../../constants/keywords';
import { useDispatch } from 'react-redux';
import { getSuggestedRecipes } from '../../actions/recipesActions';

const SuggestedButton = styled(Button)`
	width: 90%;

    @media (max-width: 600px) {
        margin: 1em 0;
    }
`;

function Header() {
	const [ selectedButton, setSelectedButton ] = useState(1);
	const dispatch = useDispatch();

	const fetchSuggestedRecipes = (query) => {
		dispatch(getSuggestedRecipes(query));
	};

	const handleClick = (id, query) => {
		setSelectedButton(id);

		fetchSuggestedRecipes(query);
	};

	const showButtons = () => {
		return suggestions.map(({ id, query }) => (
			<Grid item xs={4} sm={2} key={id}>
				<SuggestedButton
					color={id === selectedButton ? 'primary' : 'default'}
					variant="contained"
					size="small"
					onClick={() => handleClick(id, query)}
				>
					{query}
				</SuggestedButton>
			</Grid>
		));
	};

	useEffect(() => {
		fetchSuggestedRecipes(suggestions[0].query);
	}, []);
	return (
		<Container>
			<Grid container justify="center" spacing={3}>
				<Grid item xs={12}>
					<Typography variant="h5" align="center">
						Suggested Recipes
					</Typography>
				</Grid>
				<Grid item xs={12}>
					<Typography variant="body1" align="center">
						Some recipes we think you might like
					</Typography>
				</Grid>
				<Grid item xs={12} md={8}>
					<Grid container>{showButtons()}</Grid>
				</Grid>
			</Grid>
		</Container>
	);
}

export default Header;
