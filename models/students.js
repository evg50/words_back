const { Schema, model } = require('mongoose');
const Joi = require('joi');

const emailRegexp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

const studentSchema = new Schema(
	{
		name: {
			type: String,
			require: true,
		},

		email: { type: String, match: emailRegexp, required: true, unique: true },
		password: { type: String, required: true, minlength: 6 },
		token: {
			type: String,
			default: null,
		},
		dataNextWorkout: {
			type: Date,
			default: null,
		},

		avatarURL: {
			type: String,
			required: true,
		},
	},
	{ versionKey: false, timestamps: true }
);
const registerSchema = Joi.object({
	name: Joi.string().required(),
	email: Joi.string().required(),
	password: Joi.string().min(6).required(),
});

const loginSchema = Joi.object({
	email: Joi.string().required(),
	password: Joi.string().min(6).required(),
});

const Student = model('student', studentSchema);

module.exports = {
	Student,
	registerSchema,
	loginSchema,
};
