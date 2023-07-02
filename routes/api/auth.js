const express = require('express');
const router = express.Router();

const { students: ctrl } = require('../../controllers');

const { registerSchema, loginSchema } = require('../../models/');

const {
	validation,
	ctrlWrapper,
	isValidId,
	auth,
} = require('../../middlewares');

router.post(
	'/register',
	validation(registerSchema),
	ctrlWrapper(ctrl.register)
);

router.post('/login',
	validation(loginSchema),
	ctrlWrapper(ctrl.login));

router.post('/logout', ctrlWrapper(ctrl.logout));

module.exports = router;
