import { suggestedRecipesActions } from '../actions/constants';

const initialState = {
	recipes: [],
	loading: false,
	errorMessage: ''
};

const suggestedRecipesReducer = (state = initialState, action) => {
	switch (action.type) {
		case suggestedRecipesActions.SUGGESTED_RECIPES_LOADING:
			return {
				...state,
				loading: true,
				errorMessage: ''
			};
		case suggestedRecipesActions.SUGGESTED_RECIPES_FAIL:
			return {
				...state,
				loading: false,
				errorMessage: 'Fail to load recipes. Please try again later'
			};
		case suggestedRecipesActions.SUGGESTED_RECIPES_SUCCESS:
			return {
				...state,
				loading: false,
				errorMessage: '',
				recipes: action.payload
			};
		default:
			return state;
	}
};

export default suggestedRecipesReducer;
