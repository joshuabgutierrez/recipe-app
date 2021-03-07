import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/styles';
import styled from 'styled-components';
import { IoRestaurant as AppIcon } from 'react-icons/io5';
import { useMediaQuery } from '@material-ui/core';

const StyledNav = styled.nav`
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 0.5em 0;
	font-style: italic;
	cursor: pointer;
`;

const useStyles = makeStyles({
	icon: {
		margin: '0 1em'
	}
});

function Navbar() {
	const classes = useStyles();
	const isScreenSmall = useMediaQuery('(max-width: 400px)');

	return (
		<StyledNav onClick={() => (window.location = '/')}>
			<Typography variant={isScreenSmall ? 'h4' : 'h3'}>Easy</Typography>
			<AppIcon size={50} className={classes.icon} />
			<Typography variant={isScreenSmall ? 'h4' : 'h3'}>Recipes</Typography>
		</StyledNav>
	);
}

export default Navbar;
