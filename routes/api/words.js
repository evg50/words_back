const express = require('express');

const router = express.Router();

const { words: ctrl } = require('../../controllers/');

const { validation, auth } = require('../../middlewares');
const { schemas } = require('../../models/words');

router.get('/', auth, ctrl.getAll);

router.post('/', auth, validation(schemas.addSchema), ctrl.add);

router.get('/:id', ctrl.getById);

router.delete('/:id', ctrl.deleteById);

router.put('/:id', ctrl.putById);

module.exports = router;
