import React from 'react';
import Typography from '@material-ui/core/Typography';
import { Button, Container, Grid, useMediaQuery } from '@material-ui/core';
import styled from 'styled-components';
import {
	IoTimeOutline as PrepTimeIcon,
	IoTimerOutline as TotalTimeIcon,
	IoPeopleOutline as ServingsIcon
} from 'react-icons/io5';
import { BiArrowBack as BackIcon } from 'react-icons/bi';

const StyledImage = styled.img`
	max-width: 100%;
	height: auto;
	border-radius: 20px;
`;

const StyledContainer = styled(Container)`
	margin-bottom: 5em;
`;

const StyledButton = styled(Button)`
	margin-bottom: 2em;
`;

function RecipeHeader({ image, title, summary, preparationTime, totalTime, servings, source }) {
	const isScreenXS = useMediaQuery('(max-width:600px)');

	const createMarkup = () => {
		return { __html: summary };
	};
	return (
		<StyledContainer>
			<StyledButton
				variant="contained"
				color="primary"
				startIcon={<BackIcon />}
				onClick={() => (window.location = '/results')}
			>
				Back
			</StyledButton>
			<Grid container justify="center" alignItems="center" spacing={isScreenXS ? 1 : 5}>
				<Grid item xs={10} sm={8} md={6}>
					<StyledImage src={image} alt={title} />
				</Grid>
				<Grid item xs={11} sm={10} md={6}>
					<Grid container spacing={3}>
						<Grid item xs={12}>
							<Typography variant="h4">{title}</Typography>
						</Grid>
						<Grid item xs={12}>
							<Typography variant="body1" dangerouslySetInnerHTML={createMarkup()} />
						</Grid>
						<Grid item xs={12}>
							<Grid container>
								<Grid item xs={4}>
									<PrepTimeIcon size={30} />
									<Typography variant="subtitle2">Preparation Time</Typography>
									<Typography variant="body1">{preparationTime} mins</Typography>
								</Grid>
								<Grid item xs={4}>
									<TotalTimeIcon size={30} />
									<Typography variant="subtitle2">Total Time</Typography>
									<Typography variant="body1">{totalTime} mins</Typography>
								</Grid>
								<Grid item xs={4}>
									<ServingsIcon size={30} />
									<Typography variant="subtitle2">Yield</Typography>
									<Typography variant="body1">Serves {servings}</Typography>
								</Grid>
							</Grid>
						</Grid>
						<Grid item xs={12}>
							<Typography variant="subtitle2">Source By {source}</Typography>
						</Grid>
					</Grid>
				</Grid>
			</Grid>
		</StyledContainer>
	);
}

export default RecipeHeader;
