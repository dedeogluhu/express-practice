const express = require('express');
const readFunctions = require('./DataAccess/readFunctions');
const deleteFunctions = require('./DataAccess/deleteFunctions');
const updateFunctions = require('./DataAccess/updateFunctions');

const router = express.Router();

router.get('/', readFunctions.getAll(req, res));

router.get('/:id', readFunctions.getById(req, res));

router.delete('/:id', deleteFunctions.deleteById(req, res));

router.patch('/:id', updateFunctions.updateById(req, res));

module.exports = router;