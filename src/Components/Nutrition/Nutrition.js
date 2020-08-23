import React from 'react';
import { Grid } from '@material-ui/core';
import NutritionContainer from './NutritionContainer';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
	bold: {
		fontWeight: 'bold'
	},
	margin: {
		margin: '2em 0'
	}
});

const Nutrition = () => {
	const classes = useStyles();
	return (
		<div>
			<Typography variant="h5" className={classes.bold}>
				Nutrition per serving
			</Typography>
			<Grid container spacing={2} className={classes.margin}>
				<Grid item md={3}>
					<NutritionContainer />
				</Grid>
				<Grid item md={3}>
					<NutritionContainer />
				</Grid>
				<Grid item md={3}>
					<NutritionContainer />
				</Grid>
				<Grid item md={3}>
					<NutritionContainer />
				</Grid>
				<Grid item md={3}>
					<NutritionContainer />
				</Grid>
			</Grid>
		</div>
	);
};

export default Nutrition;
