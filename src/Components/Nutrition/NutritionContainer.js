import React from 'react';
import styled from 'styled-components';
import { Typography } from '@material-ui/core';

const StyledContainer = styled.div`
	background-color: #dddddd;
	padding: 0.2em;
	border-radius: 5px;
	width: 100%;
	max-width: 100px;
`;

const SubContainer = styled.div`background-color: #ffffff;`;

const NutritionContainer = () => {
	return (
		<StyledContainer>
			<Typography align="center">Calories</Typography>
			<SubContainer>
				<Typography align="center">200</Typography>
			</SubContainer>
		</StyledContainer>
	);
};

export default NutritionContainer;
