import React, { useEffect } from 'react';
import RecipeHeader from '../components/Recipe/RecipeHeader';
import styled from 'styled-components';
import RecipeMain from '../components/Recipe/RecipeMain';
import { useLocation, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getSingleRecipe } from '../actions/recipesActions';

const StyledDiv = styled.div`margin: 4em 0;`;

function Recipe() {
	const { id } = useParams();
	const dispatch = useDispatch();
	const { details } = useSelector((state) => state.singleRecipe);
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
		</StyledDiv>
	);
}

export default Recipe;
