import React from 'react';
import Home from './Pages/Home';
import Results from './Pages/FilteredResults';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { InitialValuesContextProvider } from './Contexts/InitialValuesContext';
import RecipeDetails from './Pages/RecipeDetails';
import { RecipeDetailsContextProvider } from './Contexts/RecipeDetailsContext';
import NotFound from './Pages/NotFound';

function App() {
	return (
		<Router>
			<InitialValuesContextProvider>
				<div className="App">
					<Switch>
						<Route exact path="/" component={Home} />
						<Route exact path="/results" component={Results} />
						<Route path="/results/:id">
							<RecipeDetailsContextProvider>
								<RecipeDetails />
							</RecipeDetailsContextProvider>
						</Route>
						<Route component={NotFound} />
					</Switch>
				</div>
			</InitialValuesContextProvider>
		</Router>
	);
}

export default App;
