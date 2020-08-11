import React from 'react';
import Header from './Sections/Header';
import SuggestedRecipes from './Sections/SuggestedRecipes';
import Footer from './Sections/Footer';

function Home() {
	return (
		<React.Fragment>
			<Header />
			<SuggestedRecipes />
			<Footer />
		</React.Fragment>
	);
}

export default Home;
