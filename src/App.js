const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');
const path = require('path');
const middlewares = require('./middlewares');
const dotenv = require('dotenv');

dotenv.config({ path: './.env' });

const recipe = require('./recipe');

const app = express();
app.set('trust proxy', 1);

app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

if (process.env.NODE_ENV === 'development') {
	app.use(morgan('dev'));
}

app.use('/api/v1/recipe', recipe);
app.use('/results/api/v1/recipe', recipe);

if (process.env.NODE_ENV === 'production') {
	app.use(express.static('client/build'));
	app.get('*', (req, res) => {
		res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
	});
}

app.use(middlewares.notFound);
app.use(middlewares.errorHandler);

module.exports = app;
