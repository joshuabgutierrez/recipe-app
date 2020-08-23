import React from 'react';
import styled from 'styled-components';
import Header from './Header';
import { Card } from '@material-ui/core';
import Content from './Content';

const IngredientsContainer = styled(Card)`
	background-color: rgba(0, 0, 0, 0.08);
	max-width: 420px;
	margin: 2em 0;
`;

const Ingredients = () => {
	return (
		<IngredientsContainer raised={false}>
			<Header />
			<Content />
		</IngredientsContainer>
	);
};

export default Ingredients;
