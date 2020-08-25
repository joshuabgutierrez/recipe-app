import React from 'react';
import styled from 'styled-components';
import { Typography } from '@material-ui/core';

const StyledContainer = styled.div`
	background-color: #dddddd;
	padding: 0.2em;
	border-radius: 5px;
	width: 150px;
	max-width: 100%;
`;

const SubContainer = styled.div`background-color: #ffffff;`;

const NutritionContainer = ({ title, amount, unit }) => {
	return (
		<StyledContainer>
			<Typography align="center">{title}</Typography>
			<SubContainer>
				<Typography align="center">
					{amount} {unit}
				</Typography>
			</SubContainer>
		</StyledContainer>
	);
};

export default NutritionContainer;
