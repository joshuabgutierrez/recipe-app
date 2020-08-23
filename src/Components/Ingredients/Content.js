import React from 'react';
import { CardContent } from '@material-ui/core';
import CheckCircleRoundedIcon from '@material-ui/icons/CheckCircleRounded';
import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';

const StyledCheckCircleRoundedIcon = styled(CheckCircleRoundedIcon)`
    color: ${({ theme }) => theme.palette.primary.main};
    margin: 0.2em 0.5em 0.2em 0;
`;

const StyledIngredient = styled.div`
	display: flex;
	align-items: center;
`;

const Content = () => {
	return (
		<CardContent>
			<StyledIngredient>
				<StyledCheckCircleRoundedIcon />
				<Typography>45g rolled oats</Typography>
			</StyledIngredient>
			<StyledIngredient>
				<StyledCheckCircleRoundedIcon />
				<Typography>45g rolled oats</Typography>
			</StyledIngredient>
		</CardContent>
	);
};

export default Content;
