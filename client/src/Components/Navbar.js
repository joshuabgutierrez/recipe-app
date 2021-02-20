import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/styles';
import styled from 'styled-components';
import { IoRestaurant as AppIcon } from 'react-icons/io5';

const StyledNav = styled.nav`
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 0.5em 0;
	font-style: italic;
`;

const useStyles = makeStyles({
	icon: {
		margin: '0 1em'
	}
});

function Navbar() {
	const classes = useStyles();
	return (
		<StyledNav>
			<Typography variant="h3">Easy</Typography>
			<AppIcon size={50} className={classes.icon} />
			<Typography variant="h3">Recipes</Typography>
		</StyledNav>
	);
}

export default Navbar;
