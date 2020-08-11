import React from 'react';
import RestaurantIcon from '@material-ui/icons/Restaurant';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/styles';
import styled from 'styled-components';

const useStyles = makeStyles({
	fontSizeLarge: {
		fontSize: '70px'
	},

	logoStyles: {
		alignSelf: 'center',
		margin: '0 0.25em',
		fontStyle: 'italic',
		fontWeight: 600
	}
});

const StyledNav = styled.nav`
	display: flex;
	justify-content: center;
	margin: 1em 0;
`;

function Navbar() {
	const classes = useStyles();
	return (
		<StyledNav>
			<Typography className={classes.logoStyles} variant="h4">
				Mom's
			</Typography>
			<RestaurantIcon color="primary" className={classes.fontSizeLarge} />
			<Typography className={classes.logoStyles} variant="h4">
				Recipes
			</Typography>
		</StyledNav>
	);
}

export default Navbar;
