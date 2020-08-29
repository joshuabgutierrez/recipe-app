import React, { useContext } from 'react';
import { CardContent } from '@material-ui/core';
import CheckCircleRoundedIcon from '@material-ui/icons/CheckCircleRounded';
import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';
import { RecipeDetailsContext } from '../../Contexts/RecipeDetailsContext';

const StyledCheckCircleRoundedIcon = styled(CheckCircleRoundedIcon)`
    color: ${({ theme }) => theme.palette.primary.main};
    margin: 0.2em 0.5em 0.2em 0;
`;

const StyledIngredient = styled.div`
	display: flex;
	align-items: center;
`;

const Content = () => {
	const { getIngredients } = useContext(RecipeDetailsContext);
	const ingredients = getIngredients();

	return (
		<CardContent>
			{ingredients.map((ingredient) => (
				<StyledIngredient key={ingredient.id}>
					<StyledCheckCircleRoundedIcon />
					<Typography>{ingredient.original}</Typography>
				</StyledIngredient>
			))}
		</CardContent>
	);
};

export default Content;
