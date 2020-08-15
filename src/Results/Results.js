import React from 'react';
import Typography from '@material-ui/core/Typography';
import FilterArea from './FilterArea';
import RecipesFound from './RecipesFound';
import Grid from '@material-ui/core/Grid';

const Results = () => {
	return (
		<div>
			<Typography variant="h4" align="center">
				Your Results
			</Typography>
			<Grid container spacing={2}>
				<Grid item md={4}>
					<FilterArea />
				</Grid>
				<Grid item md={8}>
					<RecipesFound />
				</Grid>
			</Grid>
		</div>
	);
};

export default Results;
