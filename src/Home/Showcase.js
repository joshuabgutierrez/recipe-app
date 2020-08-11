import React from 'react';
import homepageImage from '../assets/homepage-image.jpg';
import styled from 'styled-components';
import SearchMeal from './SearchMeal';

const ImageContainer = styled.div`
	min-height: 70vh;
	margin: 1em 0;
	background: url(${homepageImage}) center no-repeat;
	background-size: cover;
	display: flex;
	justify-content: center;
`;

function Showcase() {
	return (
		<ImageContainer>
			<SearchMeal />
		</ImageContainer>
	);
}

export default Showcase;
