import React, { useContext } from 'react';
import Typography from '@material-ui/core/Typography';
import Information from './Information';
import { RecipeDetailsContext } from '../../Contexts/RecipeDetailsContext';

const Description = () => {
	const { data } = useContext(RecipeDetailsContext);
	const { title, summary } = data;

	function createMarkup() {
		return { __html: summary };
	}

	return (
		<div>
			<Typography variant="h4">{title}</Typography>
			<Information />
			<Typography variant="body1" dangerouslySetInnerHTML={createMarkup()} />
		</div>
	);
};

export default Description;
