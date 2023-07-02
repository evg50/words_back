const { Schema, model } = require('mongoose');
const Joi = require('joi');
// const { v4 } = require('uuid');

const wordsSchema = new Schema(
	{
		form_1: {
			type: String,
			required: [true, 'Input word in first form'],
		},
		owner: {
			type: Schema.Types.ObjectId,
			ref: 'student',
			required: true,
		},
		translate_1: {
			type: String,
			required: [true, 'Input translate word in first form'],
		},
		partOfSpeach: {
			type: String,
			enum: ['noun', 'verb', 'adverb', 'pronoun', 'adjective'],
			required: true,
		},
		form_2: {
			type: String,
		},
		form_3: {
			type: String,
		},
		form_4: {
			type: String,
		},

		priorityStudy: {
			type: Number,
			default: 1,
		},
		pointStar: {
			type: Boolean,
			default: true,
		},

		translate_2: {
			type: String,
		},
		translate_3: {
			type: String,
		},
		translate_4: {
			type: String,
		},
		levelOfStudy: {
			type: Number,
			default: 0,
		},
		sentense: {
			type: String,
			default: 'not yet',
		},

		complexity: {
			type: Number,
			default: 1,
		},
		thema: {
			type: String,
		},
		pronunciation: {
			type: String,
		},
		transcription: {
			type: String,
		},
		dataNextWorkout: {
			type: Date,
		},
		frequencyUse: {
			type: Number,
			default: 1,
		},
		levelWriting: {
			type: Number,
			default: 0,
		},
	},
	{ versionKey: false, timestamps: true }
);

const addSchema = Joi.object({
	form_1: Joi.string().required(),
	translate_1: Joi.string().required(),
	partOfSpeach: Joi.string()
		.valid('noun', 'verb', 'adverb', 'pronoun', 'adjective')
		.required(),
});

const Word = model('word', wordsSchema);

const schemas = {
	addSchema,
};

module.exports = { Word, schemas };
