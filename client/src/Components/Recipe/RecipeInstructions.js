import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { getSteps } from '../../utils';

const useStyles = makeStyles((theme) => ({
	root: {
		width: '100%'
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

export default function RecipeInstructions() {
	const classes = useStyles();
	const [ activeStep, setActiveStep ] = useState(0);
	const recipe = useSelector((state) => state.singleRecipe);
	const steps = getSteps(recipe.instructions.length);

	const handleNext = () => {
		setActiveStep((prevActiveStep) => prevActiveStep + 1);
	};

	const handleBack = () => {
		setActiveStep((prevActiveStep) => prevActiveStep - 1);
	};

	const handleReset = () => {
		setActiveStep(0);
	};

	const showInstructions = () => {
		if (recipe.loading) {
			return <Typography variant="subtitle2">Loading ....</Typography>;
		}
		if (recipe.errorMessage) {
			return <Typography variant="subtitle2">{recipe.errorMessage}</Typography>;
		}
		if (recipe.instructions !== {}) {
			return (
				<Stepper activeStep={activeStep} orientation="vertical">
					{steps.map((label, index) => (
						<Step key={label}>
							<StepLabel>{label}</StepLabel>
							<StepContent>
								<Typography>{recipe.instructions[index].step}</Typography>
								<div className={classes.actionsContainer}>
									<div>
										<Button
											disabled={activeStep === 0}
											onClick={handleBack}
											className={classes.button}
										>
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
			);
		}
	};

	return (
		<Grid container>
			<Grid item lg={12}>
				<Typography variant="h6" gutterBottom>
					How to make it
				</Typography>
			</Grid>
			<Grid item lg={12} />
			<div className={classes.root}>
				{showInstructions()}
				{activeStep === steps.length && (
					<Paper square elevation={0} className={classes.resetContainer}>
						<Typography>All steps completed - you&apos;re finished</Typography>
						<Button onClick={handleReset} className={classes.button} variant="contained" color="primary">
							Reset
						</Button>
					</Paper>
				)}
			</div>
		</Grid>
	);
}
