import React from 'react';
import Home from './Pages/Home';
import Results from './Pages/FilteredResults';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
	return (
		<Router>
			<div className="App">
				<Switch>
					<Route exact path="/">
						<Home />
					</Route>
					<Route path="/results">
						<Results />
					</Route>
				</Switch>
			</div>
		</Router>
	);
}

export default App;
