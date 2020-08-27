import React from 'react';
import blender from '../../assets/blender.jpg';
import { Typography } from '@material-ui/core';
import styled from 'styled-components';

const StyledContainer = styled.div`
	background-color: rgba(0, 0, 0, 0.08);
	width: 120px;
	padding: 0.3em;
	border-radius: 5px;
`;

const StyledImage = styled.img`max-width: 100%;`;

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
