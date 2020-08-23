import React from 'react';
import { Typography } from '@material-ui/core';
import Steps from './Steps';

const Instructions = () => {
	return (
		<div>
			<Typography variant="h5" style={{ fontWeight: 'bold' }}>
				How to make it
			</Typography>
			<Steps />
		</div>
	);
};

export default Instructions;
