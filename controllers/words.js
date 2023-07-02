const { Word } = require('../models');
const createError = require('http-errors');

const getAll = async (req, res, next) => {
	// student = req.student;
	const { _id } = req.student;
	const result = await Word.find({ owner: _id });
	res.json({
		status: 'success',
		code: 200,
		data: { result },
	});
};

const add = async (req, res, next) => {
	const { _id } = req.student;
	if (!id) {
		return next(createError(400, 'Bad Request'));
	}
	const result = await Word.create({ ...req.body, owner: _id });

	res.status(201).json({
		status: 'succes',
		code: 201,
		data: {
			result,
		},
	});
};

const deleteById = async (req, res, next) => {
	const { id } = req.params;
	console.log(id, 'id');
	if (!id) {
		return next(createError(400, 'Bad Request'));
	}
	const result = await Word.findByIdAndDelete(id);

	if (!result) {
		return next(createError(400, 'Bad Request2'));
	} else {
		res.json({
			message: 'Delete success',
		});
	}
};

const getById = async (req, res, next) => {
	const { id } = req.params;

	if (!id) {
		return next(createError(400, 'Bad Request'));
	}
	const result = await Word.findById(id);
	if (!result) {
		return next(createError(404, 'Not found'));
	} else {
		res.json({
			status: 'success',
			code: 200,
			data: result,
		});
	}
};

const putById = async (req, res, next) => {
	const { id } = req.params;
	if (!id) {
		return next(createError(400, 'Bad Request'));
	}
	const result = await Word.findByIdAndUpdate(id, req.body, { new: true });
	if (!result) {
		return next(createError(404, 'Not found'));
	} else {
		res.json(result);
	}
};

module.exports = { getAll, add, deleteById, getById, putById };
