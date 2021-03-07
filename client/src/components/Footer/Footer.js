import React from 'react';
import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';
import { useTheme } from '@material-ui/core';

const StyledFooter = styled.footer`
	background-color: ${({ backgroundColor }) => backgroundColor};
	color: #fff;
	padding: 1.5em 0;
	position: absolute;
	width: 100%;
`;

const StyledDiv = styled.div`position: relative;`;

function Footer() {
	const { palette: { primary: { main } } } = useTheme();

	const showCurrentYear = () => {
		return new Date().getFullYear();
	};
	return (
		<StyledDiv>
			<StyledFooter backgroundColor={main}>
				<Typography variant="subtitle2" align="center">
					&copy; Copyright {showCurrentYear()} - Made by Joshua Gutierrez
				</Typography>
			</StyledFooter>
		</StyledDiv>
	);
}

export default Footer;
