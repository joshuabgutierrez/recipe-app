import React, { useEffect } from 'react';
import RecipeHeader from '../components/Recipe/RecipeHeader';
import styled from 'styled-components';
import RecipeMain from '../components/Recipe/RecipeMain';
import { useLocation, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getSingleRecipe } from '../actions/recipesActions';
import Typography from '@material-ui/core/Typography';

const StyledDiv = styled.div`
	margin: 4em 0;
	min-height: 100vh;
`;

function Recipe() {
	const { id } = useParams();
	const dispatch = useDispatch();
	const { details, loading } = useSelector((state) => state.singleRecipe);
	const { pathname } = useLocation();

	const fetchRecipe = (id) => {
		dispatch(getSingleRecipe(id));
	};

	useEffect(
		() => {
			window.scrollTo(0, 0);
		},
		[ pathname ]
	);

	useEffect(() => {
		fetchRecipe(id);
	}, []);

	return (
		<StyledDiv>
			{loading ? (
				<Typography variant="h6" align="center">
					Loading ...
				</Typography>
			) : (
				<React.Fragment>
					<RecipeHeader
						image={details.image}
						title={details.title}
						summary={details.summary}
						preparationTime={details.preparationMinutes || details.readyInMinutes}
						totalTime={details.readyInMinutes}
						servings={details.servings}
						source={details.sourceName || 'Spoonacular'}
					/>
					<RecipeMain />
				</React.Fragment>
			)}
		</StyledDiv>
	);
}

export default Recipe;
