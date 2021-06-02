const express = require('express');
const axios = require('axios');
const rateLimit = require('express-rate-limit');
const slowDown = require('express-slow-down');

const limiter = rateLimit({
	windowMs: 60 * 1000, // 1 minute - 60 seconds
	max: 10 // limit each IP to 6 requests per windowMs
});

const speedLimiter = slowDown({
	windowMs: 60 * 1000, // 1 minute - 60 seconds
	delayAfter: 6, // allow 6 requests per minute, then...
	delayMs: 1000 // begin adding 1 second of delay per request above 6:
});

const router = express.Router();

const BASE_URL = 'https://api.spoonacular.com/recipes/complexSearch?';

router.get('/', limiter, speedLimiter, async (req, res, next) => {
	try {
		const params = new URLSearchParams({
			apiKey: process.env.API_KEY,
			query: req.query.query,
			addRecipeInformation: true,
			addRecipeNutrition: true,
			number: 8
		});

		const { data } = await axios.get(`${BASE_URL}${params}`);

		return res.json(data);
	} catch (error) {
		return next(error);
	}
});

router.get('/filter', limiter, speedLimiter, async (req, res, next) => {
	// Front end can send default values when some values are not chosen, which are default or 0
	// In that case, we will remove entries with default values from the call and only add fields that have values other than default or 0

	for (const [ key, value ] of Object.entries(req.query)) {
		if (value === 'default' || value === '0') {
			delete req.query[key];
		}
	}

	try {
		const params = new URLSearchParams({
			apiKey: process.env.API_KEY,
			...req.query,
			addRecipeInformation: true,
			addRecipeNutrition: true,
			number: 12
		});

		const { data } = await axios.get(`${BASE_URL}${params}`);

		return res.json(data);
	} catch (error) {
		return next(error);
	}
});

router.get('/details/:id', limiter, speedLimiter, async (req, res, next) => {
	try {
		const getRecipeInfoUrl = `https://api.spoonacular.com/recipes/${req.params.id}/information?`;

		const params = new URLSearchParams({
			apiKey: process.env.API_KEY,
			includeNutrition: false
		});

		const { data } = await axios.get(`${getRecipeInfoUrl}${params}`);

		return res.json(data);
	} catch (error) {
		return next(error);
	}
});

router.get('/instructions/:id', limiter, speedLimiter, async (req, res, next) => {
	try {
		const getAnalyzedRecipeInstrUrl = `https://api.spoonacular.com/recipes/${req.params.id}/analyzedInstructions?`;

		const params = new URLSearchParams({
			apiKey: process.env.API_KEY
		});

		const { data } = await axios.get(`${getAnalyzedRecipeInstrUrl}${params}`);

		return res.json(data);
	} catch (error) {
		return next(error);
	}
});

module.exports = router;
