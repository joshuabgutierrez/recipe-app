import React, { useState } from 'react';
import { Typography, IconButton, CardContent, makeStyles, Grid } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';

const useStyles = makeStyles((theme) => ({
	root: {
		border: `2px solid ${theme.palette.primary.main}`,
		color: '#000'
	},
	marginTop: {
		marginTop: '1em'
	}
}));

const Header = () => {
	const classes = useStyles();
	const [ servings, setServings ] = useState(4);

	const decrement = () => {
		if (servings < 2) return;
		else {
			setServings(servings - 1);
		}
	};

	return (
		<CardContent>
			<Typography variant="h4" style={{ fontWeight: 'bold' }}>
				Ingredients
			</Typography>
			<Grid container alignItems="center" className={classes.marginTop}>
				<Grid item md={2}>
					<IconButton className={classes.root} size="small" onClick={() => decrement()}>
						<RemoveIcon />
					</IconButton>
				</Grid>
				<Grid item md={4}>
					<Typography style={{ margin: '0 0.5em' }}>Servings {servings}</Typography>
				</Grid>
				<Grid item md={2}>
					<IconButton className={classes.root} size="small" onClick={() => setServings(servings + 1)}>
						<AddIcon />
					</IconButton>
				</Grid>
			</Grid>
		</CardContent>
	);
};

export default Header;
