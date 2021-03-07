import {
	Button,
	FormControl,
	Grid,
	InputAdornment,
	makeStyles,
	MenuItem,
	OutlinedInput,
	Select,
	Typography
} from '@material-ui/core';
import React from 'react';
import { BiArrowBack as BackIcon } from 'react-icons/bi';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

const useStyles = makeStyles((theme) => ({
	fixedWidth: {
		width: '60%',
		[theme.breakpoints.down('xs')]: {
			width: '80%'
		}
	},
	spacing: {
		marginRight: '1em'
	},
	flex: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center'
	},
	width: {
		width: '100px',
		[theme.breakpoints.down('sm')]: {
			width: '150px'
		}
	}
}));

const StyledDiv = styled.div`
	@media (max-width: 400px) {
		display: flex;
		flex-direction: column;
	}
`;

function FilterFormSecond({ intolerances, setIntolerances, minCalories, setMinCalories, maxCalories, setMaxCalories }) {
	const classes = useStyles();
	const history = useHistory();

	const returnHomePage = () => {
		history.push({
			pathname: '/'
		});
	};

	return (
		<React.Fragment>
			<Grid item xs={12} className={classes.flex}>
				<FormControl variant="outlined" color="secondary" size="small" className={classes.fixedWidth}>
					<Typography variant="body2">Intolerances</Typography>
					<Select
						labelId="intolerances"
						id="intolerances"
						variant="outlined"
						value={intolerances}
						onChange={(e) => setIntolerances(e.target.value)}
					>
						<MenuItem value="default" disabled>
							None
						</MenuItem>
						<MenuItem value="gluten">Gluten</MenuItem>
						<MenuItem value="dairy">Dairy</MenuItem>
						<MenuItem value="soy">Soy</MenuItem>
						<MenuItem value="wheat">Wheat</MenuItem>
					</Select>
				</FormControl>
			</Grid>
			<Grid item xs={12} className={classes.flex}>
				<StyledDiv>
					<Typography variant="body2">Calorie Range</Typography>
					<FormControl variant="outlined" size="small" color="secondary" className={classes.width}>
						<OutlinedInput
							id="outlined-adornment-amount"
							startAdornment={<InputAdornment position="start">Min</InputAdornment>}
							value={minCalories}
							onChange={(e) => setMinCalories(e.target.value)}
						/>
					</FormControl>
					<FormControl variant="outlined" size="small" color="secondary" className={classes.width}>
						<OutlinedInput
							id="outlined-adornment-amount"
							startAdornment={<InputAdornment position="start">Max</InputAdornment>}
							value={maxCalories}
							onChange={(e) => setMaxCalories(e.target.value)}
						/>
					</FormControl>
				</StyledDiv>
			</Grid>
			<Grid item xs={12} className={classes.flex}>
				<div>
					<Button
						size="small"
						variant="contained"
						color="default"
						startIcon={<BackIcon />}
						className={classes.spacing}
						onClick={returnHomePage}
					>
						Home
					</Button>
					<Button size="small" variant="contained" color="primary" type="submit">
						Search
					</Button>
				</div>
			</Grid>
		</React.Fragment>
	);
}

export default FilterFormSecond;
