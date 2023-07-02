require('dotenv').config();
const mongoose = require('mongoose');

// const { DB_HOST } = process.env;
// const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');

// const authRouter = require('./routes/api/auth');
// const usersRouter = require('./routes/api/users');
const wordsRouter = require('./routes/api/words');
const authRouter = require('./routes/api/auth');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/words', wordsRouter);
app.use('/api/auth', authRouter);
// все запросы по этому маршруту обрабатываются authRouter
// app.use('/api/auth', authRouter);
// все запросы по этому маршруту обрабатываются usersRouter
// app.use('/api/users/', usersRouter);

app.use((err, req, res, next) => {
	const { status = 500, message = 'Server error' } = err;
	res.status(status).json({ message: err.message });
});
module.exports = app;
