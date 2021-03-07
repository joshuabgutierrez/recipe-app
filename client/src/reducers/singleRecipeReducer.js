import { singleRecipeActions } from '../actions/constants';

const initialState = {
	loading: true,
	errorMessage: '',
	details: {},
	instructions: []
};

const singleRecipeReducer = (state = initialState, action) => {
	switch (action.type) {
		case singleRecipeActions.SINGLE_RECIPE_LOADING:
			return {
				...state,
				loading: true,
				errorMessage: ''
			};
		case singleRecipeActions.SINGLE_RECIPE_DETAILS_FAIL:
			return {
				...state,
				loading: false,
				errorMessage: 'Details not available. Please reload or try again later.'
			};
		case singleRecipeActions.SINGLE_RECIPE_SUCCESS:
			return {
				...state,
				loading: false,
				details: action.payload[0].data,
				instructions: action.payload[1].data[0].steps
			};
		default:
			return state;
	}
};

export default singleRecipeReducer;
