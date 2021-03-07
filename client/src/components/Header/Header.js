import React from 'react';
import styled from 'styled-components';
import HomePageImage from '../../assets/homepage-image.jpg';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/styles';
import SearchForm from './SearchForm';
import { Grid } from '@material-ui/core';

const ImageContainer = styled.div`
	height: 90vh;
	background: #000000;
	overflow: hidden;
	background: linear-gradient(rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.45)), url(${HomePageImage});
	background-position: center;
	background-size: cover;
	display: flex;
	justify-content: 'center';
	align-items: center;
`;

const useStyles = makeStyles({
	textWhite: {
		color: '#FFFFFF'
	}
});

function Header() {
	const classes = useStyles();

	return (
		<ImageContainer>
			<Grid container justify="center">
				<Grid item xs={10} sm={10} md={6} lg={5}>
					<Grid container>
						<Grid item xs={12}>
							<Typography variant="h5" align="center" className={classes.textWhite}>
								Let's cook a new meal
							</Typography>
						</Grid>
						<Grid item xs={12}>
							<SearchForm />
						</Grid>
						<Grid item xs={12}>
							<Typography variant="subtitle2" align="center" className={classes.textWhite}>
								Powered by the Spoonacular API
							</Typography>
						</Grid>
					</Grid>
				</Grid>
			</Grid>
		</ImageContainer>
	);
}

export default Header;
