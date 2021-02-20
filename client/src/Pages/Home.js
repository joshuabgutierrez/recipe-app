import React from 'react';
import Header from '../Components/Header/Header';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import SuggestedRecipes from '../Components/SuggestedRecipes';
import { Grid } from '@material-ui/core';

const Home = () => {
	return (
		<React.Fragment>
			<Grid container>
				<Grid item xs={12} sm={12} md={12} lg={12}>
					<Navbar />
				</Grid>
				<Grid item xs={12} sm={12} md={12} lg={12}>
					<Header />
				</Grid>
				<Grid item xs={12} sm={12} md={12} lg={12}>
					<SuggestedRecipes />
				</Grid>
				<Grid item xs={12} sm={12} md={12} lg={12}>
					<Footer />
				</Grid>
			</Grid>
		</React.Fragment>
	);
};

export default Home;
