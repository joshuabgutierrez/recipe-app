import { filteredRecipesActions } from '../actions/constants';

const initialState = {
	recipes: [],
	loading: false,
	errorMessage: ''
};

const filteredRecipesReducer = (state = initialState, action) => {
	switch (action.type) {
		case filteredRecipesActions.FILTERED_RECIPES_LOADING:
			return {
				...state,
				loading: true,
				errorMessage: ''
			};
		case filteredRecipesActions.FILTERED_RECIPES_FAIL:
			return {
				...state,
				loading: false,
				errorMessage: 'Fail to load recipes. Please try again later'
			};
		case filteredRecipesActions.FILTERED_RECIPES_SUCCESS:
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

export default filteredRecipesReducer;
