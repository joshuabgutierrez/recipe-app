import { combineReducers } from 'redux';
import filteredRecipesReducer from './filteredRecipesReducer';
import singleRecipeReducer from './singleRecipeReducer';
import suggestedRecipesReducer from './suggestedRecipesReducer';

const rootReducer = combineReducers({
	suggestedRecipes: suggestedRecipesReducer,
	filteredRecipes: filteredRecipesReducer,
	singleRecipe: singleRecipeReducer
});

export default rootReducer;
