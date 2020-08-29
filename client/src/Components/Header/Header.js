import React from 'react';
import styled from 'styled-components';
import homepageImage from '../../assets/homepage-image.jpg';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/styles';
import SearchForm from './SearchForm';

const ImageContainer = styled.div`
	min-height: 70vh;
	margin: 1em 0;
	background: url(${homepageImage}) center no-repeat;
	background-size: cover;
	display: flex;
	justify-content: center;
`;

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

function Header() {
	const classes = useStyles();

	return (
		<ImageContainer>
			<StyledSearchArea>
				<Typography variant="h4" className={`${classes.textWhite} ${classes.textCenter}`}>
					Let's cook a new meal
				</Typography>
				<SearchForm />
				<span className={`${classes.textWhite} ${classes.textCenter} ${classes.marginTop}`}>
					Powered by the Spoonacular API
				</span>
			</StyledSearchArea>
		</ImageContainer>
	);
}

export default Header;
