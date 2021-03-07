// Utility functions for entire project
export function getSteps(length) {
	const steps = [];
	for (let i = 1; i <= length; i++) {
		steps.push(`Step ${i}`);
	}
	return steps;
}
