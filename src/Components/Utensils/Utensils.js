import React from 'react';
import { Typography, Grid } from '@material-ui/core';
import UtensilContainer from './UtensilContainer';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
	marginTop: {
		margin: '2em 0'
	}
});

const Utensils = () => {
	const classes = useStyles();
	return (
		<div className={classes.marginTop}>
			<Typography variant="h6" style={{ fontWeight: 'bold' }}>
				Utensils
			</Typography>
			<Typography variant="body1">You can buy these items on Amazon</Typography>
			<Grid container spacing={1} className={classes.marginTop}>
				<Grid item md={4}>
					<UtensilContainer />
				</Grid>
				<Grid item md={4}>
					<UtensilContainer />
				</Grid>
				<Grid item md={4}>
					<UtensilContainer />
				</Grid>
			</Grid>
		</div>
	);
};

export default Utensils;
