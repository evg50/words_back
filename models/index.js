const { Contact, schemas } = require('./contact');
const {
	registerSchema,
	loginSchema,

	Student,
} = require('./students');

const { Word} = require ("./words")

module.exports = {
	Student,
Word,
	registerSchema,
	loginSchema,
};
