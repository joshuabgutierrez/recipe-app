const express = require('express');
const axios = require('axios');
const rateLimit = require('express-rate-limit');

const limiter = rateLimit({
	windowMs: 30 * 1000, // 30 seconds
	max: 5 // limit each IP address to 2 requests
});

const router = express.Router();

let cachedData;
let cachedTime;
let cachedEquipment;
let cachedEquipmentTime;

const BASIC_URL = 'https://api.spoonacular.com/recipes/complexSearch?';

router.get('/', limiter, async (req, res, next) => {
	if (cachedTime && cachedTime > Date.now() - 30 * 1000) {
		return res.json(cachedData);
	}

	try {
		const params = new URLSearchParams({
			apiKey: process.env.SPOONACULAR_API_KEY,
			query: req.query.query,
			addRecipeInformation: req.query.addRecipeInformation
		});

		const { data } = await axios.get(`${BASIC_URL}${params}`);

		cachedData = data;
		cachedTime = Date.now();

		return res.json(data);
	} catch (error) {
		return next(error);
	}
});

router.get('/details/:id', limiter, async (req, res, next) => {
	if (cachedTime && cachedTime > Date.now() - 30 * 1000) {
		return res.json(cachedData);
	}

	try {
		const params = new URLSearchParams({
			apiKey: process.env.SPOONACULAR_API_KEY,
			includeNutrition: req.query.includeNutrition,
			addRecipeInformation: req.query.addRecipeInformation
		});

		const DETAILS_URL = `https://api.spoonacular.com/recipes/${req.params.id}/information?`;

		const { data } = await axios.get(`${DETAILS_URL}${params}`);

		cachedEquipment = data;
		cachedTime = Date.now();

		return res.json(data);
	} catch (error) {
		return next(error);
	}
});

router.get('/equipment/:id', limiter, async (req, res, next) => {
	if (cachedEquipmentTime && cachedEquipmentTime > Date.now() - 30 * 1000) {
		return res.json(cachedEquipment);
	}

	try {
		const params = new URLSearchParams({
			apiKey: process.env.SPOONACULAR_API_KEY
		});

		const EQUIPMENT_URL = `https://api.spoonacular.com/recipes/${req.params.id}/equipmentWidget.json?`;

		const { data } = await axios.get(`${EQUIPMENT_URL}${params}`);

		cachedData = data;
		cachedTime = Date.now();

		return res.json(data);
	} catch (error) {
		return next(error);
	}
});

router.get('/filter', limiter, async (req, res, next) => {
	if (cachedTime && cachedTime > Date.now() - 30 * 1000) {
		return res.json(cachedData);
	}

	try {
		const params = new URLSearchParams({
			apiKey: process.env.SPOONACULAR_API_KEY,
			query: req.query.query,
			type: req.query.type,
			diet: req.query.diet,
			cuisine: req.query.cuisine,
			intolerances: req.query.intolerances,
			minCalories: req.query.minCalories,
			maxCalories: req.query.maxCalories,
			addRecipeInformation: req.query.addRecipeInformation
		});

		const { data } = await axios.get(`${BASIC_URL}${params}`);

		cachedData = data;
		cachedTime = Date.now();

		return res.json(data);
	} catch (error) {
		return next(error);
	}
});

module.exports = router;
