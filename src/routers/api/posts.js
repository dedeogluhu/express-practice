const express = require('express');
const createFunctions = require('./DataAccessFunctions/createFunctions');
const readFunctions = require('./DataAccessFunctions/readFunctions');
const updateFunctions = require('./DataAccessFunctions/updateFunctions');
const deleteFunctions = require('./DataAccessFunctions/deleteFunctions');

const router = express.Router();

router.get('/', readFunctions.getAll);

router.get('/:id', readFunctions.getById);

router.post('/', createFunctions.createPost);

router.delete('/:id', deleteFunctions.deleteById);

router.patch('/:id', updateFunctions.updateById);

module.exports = router;