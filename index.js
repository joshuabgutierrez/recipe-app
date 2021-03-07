const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');
const path = require('path');

require('dotenv').config();
const api = require('./api/main');
const middlewares = require('./api/middlewares');

const PORT = process.env.PORT || 5000;

const app = express();
app.set('trust proxy', 1);

app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

if (process.env.NODE_ENV === 'development') {
	app.use(morgan('dev'));
}

app.get('/', (req, res) => {
	res.json({
		message: 'Hello from the main route /'
	});
});

app.use('/api/recipes', api);
app.use('/results/api/recipes', api);

if (process.env.NODE_ENV === 'production') {
	app.use(express.static('client/build'));
	app.get('*', (req, res) => {
		res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
	});
}

app.use(middlewares.notFound);
app.use(middlewares.errorHandler);

app.listen(PORT, () => {
	console.log(`Server started on port ${PORT}`);
});
