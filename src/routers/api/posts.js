const express = require('express');
const createFunctions = require('./DataAccess/createFunctions');
const readFunctions = require('./DataAccess/readFunctions');
const updateFunctions = require('./DataAccess/updateFunctions');
const deleteFunctions = require('./DataAccess/deleteFunctions');

const router = express.Router();

router.get('/', readFunctions.getAll);

router.get('/:id', readFunctions.getById);

router.post('/add', createFunctions.createPost);

router.delete('/:id', deleteFunctions.deleteById);

router.patch('/:id', updateFunctions.updateById);

module.exports = router;