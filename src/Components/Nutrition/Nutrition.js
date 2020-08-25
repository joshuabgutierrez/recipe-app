import React from 'react';
import { Grid } from '@material-ui/core';
import NutritionContainer from './NutritionContainer';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/styles';
import { useContext } from 'react';
import { RecipeDetailsContext } from '../../Contexts/RecipeDetailsContext';

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
	const { getNutrients } = useContext(RecipeDetailsContext);
	const nutrients = getNutrients();

	return (
		<div>
			<Typography variant="h5" className={classes.bold}>
				Nutrition per serving
			</Typography>
			<Grid container spacing={2} className={classes.margin}>
				{nutrients.map((nutrient) => (
					<Grid item md={3} key={nutrient.title}>
						<NutritionContainer
							title={nutrient.title}
							amount={Math.floor(nutrient.amount)}
							unit={nutrient.unit}
						/>
					</Grid>
				))}
			</Grid>
		</div>
	);
};

export default Nutrition;
