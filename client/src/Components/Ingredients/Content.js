import React from 'react';
import { CardContent } from '@material-ui/core';
import CheckCircleRoundedIcon from '@material-ui/icons/CheckCircleRounded';
import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';
import fracty from 'fracty';

const StyledCheckCircleRoundedIcon = styled(CheckCircleRoundedIcon)`
    color: ${({ theme }) => theme.palette.primary.main};
    margin: 0.2em 0.5em 0.2em 0;
`;

const StyledIngredient = styled.div`
	display: flex;
	align-items: center;
`;

const Content = ({ ingredients }) => {
	return (
		<CardContent>
			{ingredients.map((ingredient) => (
				<StyledIngredient key={ingredient.id}>
					<StyledCheckCircleRoundedIcon />
					<Typography>{`${fracty(
						ingredient.amount.toFixed(1)
					)} ${ingredient.unitShort} ${ingredient.originalName}`}</Typography>
				</StyledIngredient>
			))}
		</CardContent>
	);
};

export default Content;
