import React from 'react';
import { Typography } from '@material-ui/core';
import styled from 'styled-components';

const StyledContainer = styled.div`
	background-color: rgba(0, 0, 0, 0.08);
	width: 130px;
	height: 150px;
	padding: 0.3em;
	border-radius: 5px;
	display: grid;
	place-items: center;
`;

const StyledImage = styled.img`
	max-width: 100%;
	height: 100px;
`;

const UtensilContainer = ({ name, image }) => {
	return (
		<StyledContainer>
			<StyledImage src={image} alt={name} />
			<Typography variant="body2" align="center">
				{name}
			</Typography>
		</StyledContainer>
	);
};

export default UtensilContainer;
