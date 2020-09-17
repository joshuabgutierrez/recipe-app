import React from 'react';
import { Grid, makeStyles, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { mergeClasses } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
	root: {
		textAlign: 'center',
		maxWidth: '100%'
	},
	link: {
		textDecoration: 'underline',
		color: theme.palette.primary.main
	}
}));

const NotFound = () => {
	const classes = useStyles();

	return (
		<Grid container justify="center">
			<Grid item>
				<header className={classes.root}>
					<Typography variant="h2">Oh no!</Typography>
					<Typography variant="h4">Something went wrong!</Typography>
					<Typography variant="body1">
						The server is not responding or you might have made too many requests. In the meantime, try
						again later or{' '}
						<Link to="/" className={classes.link}>
							return to the home page
						</Link>
					</Typography>
				</header>
			</Grid>
		</Grid>
	);
};

export default NotFound;
