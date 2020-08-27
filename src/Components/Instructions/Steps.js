import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { useContext } from 'react';
import { RecipeDetailsContext } from '../../Contexts/RecipeDetailsContext';
const converter = require('number-to-words');

const useStyles = makeStyles((theme) => ({
	root: {
		Width: '100%'
	},
	button: {
		marginTop: theme.spacing(1),
		marginRight: theme.spacing(1)
	},
	actionsContainer: {
		marginBottom: theme.spacing(2)
	},
	resetContainer: {
		padding: theme.spacing(3)
	}
}));

function getSteps(allSteps) {
	const steps = allSteps.map((step) => `Step ${converter.toWords(step)}`);
	return steps;
}

function getStepContent(step, instructions) {
	return instructions[step];
}

export default function Steps() {
	const classes = useStyles();
	const [ activeStep, setActiveStep ] = useState(0);
	const { getInstructions } = useContext(RecipeDetailsContext);
	const actualSteps = getInstructions().map((step) => step.number);
	const actualInstructions = getInstructions().map((step) => step.step);

	const steps = getSteps(actualSteps);

	const handleNext = () => {
		setActiveStep((prevActiveStep) => prevActiveStep + 1);
	};

	const handleBack = () => {
		setActiveStep((prevActiveStep) => prevActiveStep - 1);
	};

	const handleReset = () => {
		setActiveStep(0);
	};

	return (
		<div className={classes.root}>
			<Stepper activeStep={activeStep} orientation="vertical">
				{steps.map((label, index) => (
					<Step key={label}>
						<StepLabel>{label}</StepLabel>
						<StepContent>
							<Typography>{getStepContent(index, actualInstructions)}</Typography>
							<div className={classes.actionsContainer}>
								<div>
									<Button disabled={activeStep === 0} onClick={handleBack} className={classes.button}>
										Back
									</Button>
									<Button
										variant="contained"
										color="primary"
										onClick={handleNext}
										className={classes.button}
									>
										{activeStep === steps.length - 1 ? 'Finish' : 'Next'}
									</Button>
								</div>
							</div>
						</StepContent>
					</Step>
				))}
			</Stepper>
			{activeStep === steps.length && (
				<Paper square elevation={0} className={classes.resetContainer}>
					<Typography>All steps completed - Bon Appetit</Typography>
					<Button color="secondary" variant="contained" onClick={handleReset} className={classes.button}>
						Reset
					</Button>
				</Paper>
			)}
		</div>
	);
}
