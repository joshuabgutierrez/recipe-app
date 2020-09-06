import React, { useContext } from 'react';
import Typography from '@material-ui/core/Typography';
import Information from './Information';
import { RecipeDetailsContext } from '../../Contexts/RecipeDetailsContext';
import { Breadcrumbs, makeStyles } from '@material-ui/core';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
	spacing: {
		margin: '0.8em 0'
	}
});

const Description = () => {
	const classes = useStyles();
	const { data } = useContext(RecipeDetailsContext);
	const { title, summary } = data;

	function createMarkup() {
		return { __html: summary };
	}

	return (
		<div>
			<Typography variant="h4">{title}</Typography>
			<Breadcrumbs aria-label="breadcrumb" className={classes.spacing}>
				<Link color="primary" to="/">
					Home
				</Link>
				<Link color="primary" to="/results">
					Results
				</Link>
				<Typography>Recipe</Typography>
			</Breadcrumbs>
			<Information />
			<Typography variant="body1" dangerouslySetInnerHTML={createMarkup()} />
		</div>
	);
};

export default Description;
