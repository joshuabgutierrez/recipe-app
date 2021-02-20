import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
	footerStyles: {
		backgroundColor: theme.palette.primary.main,
		color: '#ffffff',
		padding: '1.5em 0',
		marginTop: '2em'
	}
}));

const printYear = () => {
	return new Date().getFullYear();
};

const Footer = () => {
	const classes = useStyles();
	return (
		<footer className={classes.footerStyles}>
			<Typography variant="subtitle1" align="center">
				&copy;{printYear()} Joshua Gutierrez
			</Typography>
		</footer>
	);
};

export default Footer;
