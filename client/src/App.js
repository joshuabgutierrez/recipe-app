import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import Recipe from './Pages/Recipe';
import Results from './Pages/Results';
import Home from './Pages/Home';

function App() {
	return (
		<Router>
			<Navbar />
			<Switch>
				<Route exact path="/">
					<Home />
				</Route>
				<Route exact path="/results">
					<Results />
				</Route>
				<Route exact path="/results/:id">
					<Recipe />
				</Route>
				<Redirect to="/" />
			</Switch>
			<Footer />
		</Router>
	);
}

export default App;
