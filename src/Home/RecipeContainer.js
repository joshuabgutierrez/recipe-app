import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';
import styled from 'styled-components';

const useStyles = makeStyles((theme) => ({
	root: {
		width: 250,
		height: 350
	},
	media: {
		height: 0,
		paddingTop: '56.25%'
	},
	marginTop: {
		marginTop: '1em'
	},
	flex: {
		display: 'grid',
		gridTemplateColumns: '1fr 1fr 1fr',
		gap: '10px',
		fontFamily: theme.typography.fontFamily
	}
}));

const ContentColumn = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: end;
	text-align: center;

	& p {
		margin: 0;
		font-size: 0.85rem;
		margin-top: 0.5em;
	}

	& span {
		font-weight: bold;
	}
`;

const RecipeContainer = ({ image, label, source, url }) => {
	const classes = useStyles();

	return (
		<Card className={classes.root}>
			<CardMedia className={classes.media} image={image} title="Pancakes" />
			<Typography className={classes.marginTop} variant="h6" align="center">
				{label}
			</Typography>
			<Typography variant="body2" align="center">
				By {source}
				{/* <a href={url} target="_blank" rel="noopener noreferrer">
					{source}
				</a> */}
			</Typography>
			<CardContent className={classes.flex}>
				<ContentColumn>
					<span>275</span>
					<p>Calories / Serving</p>
				</ContentColumn>
				<ContentColumn>
					<span>14%</span>
					<p>Daily Value</p>
				</ContentColumn>
				<ContentColumn>
					<span>8</span>
					<p>Servings</p>
				</ContentColumn>
			</CardContent>
		</Card>
	);
};

export default RecipeContainer;
