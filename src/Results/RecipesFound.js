import React from 'react';
import Typography from '@material-ui/core/Typography';
import styled from 'styled-components';

const RecipesFoundArea = styled.div`border: 1px solid red;`;

const RecipesFound = () => {
	return (
		<RecipesFoundArea>
			<Typography variant="h6" color="initial">
				Recipes found
			</Typography>
		</RecipesFoundArea>
	);
};

export default RecipesFound;
