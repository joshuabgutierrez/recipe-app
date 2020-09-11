const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');
const path = require('path');
const middlewares = require('./middlewares');
const recipe = require('./recipe');
require('dotenv').config();

const app = express();
app.set('trust proxy', 1);

app.use(morgan('dev'));
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', recipe);

app.use(express.static(path.join('client/build')));
app.get('*', (req, res) => {
	res.sendFile(path.join(__dirname, 'client/build/index.html'));
});

app.use(middlewares.notFound);
app.use(middlewares.errorHandler);

module.exports = app;
