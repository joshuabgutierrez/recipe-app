import React from 'react';
import { Typography, Grid } from '@material-ui/core';
import UtensilContainer from './UtensilContainer';
import { makeStyles } from '@material-ui/styles';
import { useContext } from 'react';
import { RecipeDetailsContext } from '../../Contexts/RecipeDetailsContext';

const useStyles = makeStyles({
	marginTop: {
		margin: '2em 0'
	}
});

const Utensils = () => {
	const classes = useStyles();
	const { utensils } = useContext(RecipeDetailsContext);

	return (
		<div className={classes.marginTop}>
			<Typography variant="h6" style={{ fontWeight: 'bold' }}>
				Utensils
			</Typography>
			<Typography variant="body1">You can buy these items on Amazon</Typography>
			<Grid container spacing={1} className={classes.marginTop}>
				{utensils.map((utensil) => (
					<Grid item md={4} key={utensil.name}>
						<UtensilContainer
							name={utensil.name}
							image={`https://spoonacular.com/cdn/equipment_100x100/${utensil.image}`}
						/>
					</Grid>
				))}
			</Grid>
		</div>
	);
};

export default Utensils;
