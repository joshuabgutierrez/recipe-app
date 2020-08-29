import React from 'react';
import Header from '../Components/Header/Header';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import SuggestedRecipes from '../Components/SuggestedRecipes';

const Home = () => {
	return (
		<div>
			<Navbar />
			<Header />
			<SuggestedRecipes />
			<Footer />
		</div>
	);
};

export default Home;
