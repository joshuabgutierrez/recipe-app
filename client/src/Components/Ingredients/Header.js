import React, { useState, useEffect } from 'react';
import {
	Typography,
	CardContent,
	makeStyles,
	Grid,
	FormControl,
	FormLabel,
	RadioGroup,
	FormControlLabel,
	Radio
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
	root: {
		border: `2px solid ${theme.palette.primary.main}`,
		color: '#000'
	},
	marginTop: {
		marginTop: '1em',
		flexGrow: 1,
		flexDirection: 'column'
	},
	flex: {
		display: 'flex',
		flexDirection: 'row'
	}
}));

const Header = ({ updateServings, currentServings }) => {
	const classes = useStyles();
	const [ sizeSelected, setSizeSelected ] = useState('medium');

	function handleChange(e) {
		setSizeSelected(e.target.value);
	}

	useEffect(
		() => {
			updateServings(sizeSelected);
		},
		[ sizeSelected ]
	);

	return (
		<CardContent>
			<Typography variant="h4" style={{ fontWeight: 'bold' }}>
				Ingredients
			</Typography>
			<Grid container className={classes.marginTop}>
				<Grid item>
					<FormControl component="fieldset" style={{ margin: '1em 0', flexDirection: 'row' }}>
						<FormLabel>Scale your recipe</FormLabel>
						<RadioGroup
							className={classes.flex}
							aria-label="recipeSize"
							name="recipeSize"
							value={sizeSelected}
							onChange={handleChange}
						>
							<FormControlLabel value="small" control={<Radio />} label="Small" />
							<FormControlLabel value="medium" control={<Radio />} label="Medium" />
							<FormControlLabel value="double" control={<Radio />} label="Double" />
						</RadioGroup>
					</FormControl>
				</Grid>
				<Grid item>
					<Typography style={{ margin: '0 0.5em' }}>Servings {currentServings}</Typography>
				</Grid>
			</Grid>
		</CardContent>
	);
};

export default Header;
