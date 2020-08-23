import React from 'react';
import Typography from '@material-ui/core/Typography';
import Information from './Information';

const Description = () => {
	return (
		<div>
			<Typography variant="h4">Chocolate and peanut butter overnight oats</Typography>
			<Information />
			<Typography variant="body1">
				Want a treat for breakfast? Give these overnight oats a try, it's like eating a dessert for brekkie. The
				combination fo peanut butter and cocoa is amazing; just don't add too much cocoa as it's quite bitter
			</Typography>
		</div>
	);
};

export default Description;
