import React from 'react';
import { Grid, Typography, IconButton } from '@material-ui/core';
import ShareIcon from '@material-ui/icons/Share';
import styled from 'styled-components';
import { useContext } from 'react';
import { RecipeDetailsContext } from '../../Contexts/RecipeDetailsContext';

const StyledIconButton = styled(IconButton)`
    color: #fff;
    background-color: ${({ theme }) => theme.palette.primary.main};

    &:hover {
        background-color: ${({ theme }) => theme.palette.primary.main};
        opacity: 0.9;
    }
`;

const Information = () => {
	const { data } = useContext(RecipeDetailsContext);
	return (
		<div style={{ margin: '1em 0' }}>
			<Grid container justify="space-between">
				<Grid item md={8}>
					<Grid container spacing={2}>
						<Grid item md={4}>
							<Typography variant="subtitle1">Total time</Typography>
							<Typography variant="subtitle1">{data.readyInMinutes}m</Typography>
						</Grid>
						<Grid item md={4}>
							<Typography variant="subtitle1">Prep time</Typography>
							<Typography variant="subtitle1">{data.preparationMinutes || '0'}m</Typography>
						</Grid>
						<Grid item md={4}>
							<Typography variant="subtitle1">Cook time</Typography>
							<Typography variant="subtitle1">{data.cookingMinutes || '0'}m</Typography>
						</Grid>
					</Grid>
				</Grid>
				<Grid item md={4}>
					<Grid container justify="center">
						<Grid item>
							<StyledIconButton size="medium">
								<ShareIcon fontSize="small" />
							</StyledIconButton>
						</Grid>
					</Grid>
				</Grid>
			</Grid>
		</div>
	);
};

export default Information;
