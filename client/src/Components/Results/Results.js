import React from 'react';
import Typography from '@material-ui/core/Typography';
import FilterArea from './FilterArea';
import RecipesFound from './RecipesFound';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/styles';
import { FilteredResultsContextProvider } from '../../Contexts/FilteredResultsContext';

const useClasses = makeStyles({
	spacing: {
		marginTop: '2em'
	}
});

const Results = () => {
	const classes = useClasses();
	return (
		<div>
			<FilteredResultsContextProvider>
				<Typography variant="h4" align="center">
					Recipe results
				</Typography>
				<Grid container className={classes.spacing} justify="center">
					<Grid item sm={12} md={4}>
						<FilterArea />
					</Grid>
					<Grid item sm={12} md={8}>
						<RecipesFound />
					</Grid>
				</Grid>
			</FilteredResultsContextProvider>
		</div>
	);
};

export default Results;
