import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/styles';
import styled from 'styled-components';
import SearchInput from './SearchInput';

const useStyles = makeStyles({
	textWhite: {
		color: '#FFFFFF'
	},
	textCenter: {
		textAlign: 'center'
	},
	marginTop: {
		marginTop: '0.5em'
	}
});

const StyledSearchArea = styled.div`
	margin-top: 9em;
	max-width: 500px;
	width: 100%;
	display: flex;
	flex-direction: column;
`;

function SearchMeal() {
	const classes = useStyles();
	return (
		<StyledSearchArea>
			<Typography variant="h4" className={`${classes.textWhite} ${classes.textCenter}`}>
				Let's cook a new meal
			</Typography>
			<SearchInput />
			<span className={`${classes.textWhite} ${classes.textCenter} ${classes.marginTop}`}>
				Powered by the Edamam API
			</span>
		</StyledSearchArea>
	);
}

export default SearchMeal;
