const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');
const path = require('path');

require('dotenv').config();

const middlewares = require('./middlewares');
const recipe = require('./recipe');

const app = express();
app.set('trust proxy', 1);

if (process.env.NODE_ENV === 'production') {
	app.use('/*', (req, res) => {
		res.send(path.join(__dirname, 'client', 'build', 'index.html'));
	});
}

app.use(morgan('dev'));
app.use(helmet());
app.use(cors());
app.use(express.json());

app.use('/', recipe);

app.use(middlewares.notFound);
app.use(middlewares.errorHandler);

module.exports = app;
