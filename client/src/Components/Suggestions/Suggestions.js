import React from 'react';
import { Button, Grid } from '@material-ui/core';
import Header from './Header';
import styled from 'styled-components';
import SuggestedRecipes from './SuggestedRecipes';

const StyledSection = styled.section`margin: 3em 0;`;

function Suggestions() {
	return (
		<StyledSection>
			<Grid container justify="center">
				<Grid item xs={12}>
					<Header />
				</Grid>
				<Grid item xs={12}>
					<SuggestedRecipes />
				</Grid>
				<Grid item xs={12}>
					<Grid container justify="center">
						<Grid item>
							<Button variant="contained" color="primary">
								Load More
							</Button>
						</Grid>
					</Grid>
				</Grid>
			</Grid>
		</StyledSection>
	);
}

export default Suggestions;
