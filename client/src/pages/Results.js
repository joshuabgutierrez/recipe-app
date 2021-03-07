import React from 'react';
import { Grid } from '@material-ui/core';
import FilteredResults from '../components/Results/FilteredResults';
import FilterForm from '../components/Results/FilterForm';

function Results() {
	return (
		<Grid container>
			<Grid item xs={12} md={4}>
				<FilterForm />
			</Grid>
			<Grid item xs={12} md={8}>
				<FilteredResults />
			</Grid>
		</Grid>
	);
}

export default Results;
