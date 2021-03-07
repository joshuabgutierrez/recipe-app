import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home';
import Recipe from './pages/Recipe';
import Results from './pages/Results';

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
