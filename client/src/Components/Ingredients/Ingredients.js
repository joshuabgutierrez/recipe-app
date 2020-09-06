import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Header from './Header';
import { Card } from '@material-ui/core';
import Content from './Content';
import { useContext } from 'react';
import { RecipeDetailsContext } from '../../Contexts/RecipeDetailsContext';

const IngredientsContainer = styled(Card)`
	background-color: rgba(0, 0, 0, 0.08);
	max-width: 420px;
	margin: 2em 0;
`;

const Ingredients = () => {
	const { data, getIngredients } = useContext(RecipeDetailsContext);
	const [ currentServings, setCurrentServings ] = useState(data.servings);
	const [ currentIngredients, setCurrentIngredients ] = useState(getIngredients());

	const baseIngredients = getIngredients();
	const baseAmounts = getIngredients().map((currentIngredient) => currentIngredient.amount);

	function updateServings(newSize) {
		if (newSize === 'small') {
			setCurrentServings(Math.round(data.servings / 2));
		} else if (newSize === 'double') {
			setCurrentServings(Math.round(data.servings * 2));
		} else {
			setCurrentServings(Math.round(data.servings));
		}
	}

	useEffect(
		() => {
			function updateIngredients() {
				const newIngredients = baseIngredients.map((currentIngredient, index) => {
					return { ...currentIngredient, amount: currentServings * baseAmounts[index] / data.servings };
				});
				setCurrentIngredients(newIngredients);
			}
			updateIngredients();
		},
		[ currentServings ]
	);

	return (
		<IngredientsContainer raised={false}>
			<Header updateServings={updateServings} currentServings={currentServings} />
			<Content ingredients={currentIngredients} />
		</IngredientsContainer>
	);
};

export default Ingredients;
