const { HttpError } = require('../helpers');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const gravatar = require('gravatar');

const { Student } = require('../models');

const { SECRET_KEY } = process.env;

const register = async (req, res) => {
	const { name, email, password } = req.body;

	const student = await Student.findOne({ email });

	if (student) {
		throw HttpError(409, 'Email already in use');
	}

	const hashPassword = await bcrypt.hash(password, 10);

	const avatarURL = gravatar.url(email);

	const newStudent = await Student.create({
		name,
		email,
		password: hashPassword,
		avatarURL,
	});

	res.status(201).json({
		status: 'success',
		code: 201,
		student: { email, name },
	});
};

const login = async (req, res) => {
	console.log('login (controller students)');
	const { email, password } = req.body;

	const student = await Student.findOne({ email });

	if (!student || !bcrypt.compareSync(password, student.password)) {
		throw HttpError(401, `Email or password is wrong`);
	}

	const payload = {
		id: student.id,
	};

	const token = jwt.sign(payload, SECRET_KEY, { expiresIn: '98h' });

	await Student.findByIdAndUpdate(student._id, { token });

	res.json({
		status: 'success',
		code: 200,
		data: { token },
	});
};
const logout = async (req, res) => {
	console.log('logout');
};

module.exports = { register, login, logout };
