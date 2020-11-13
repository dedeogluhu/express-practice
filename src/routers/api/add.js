const express = require('express');
const createFunctions = require('./DataAccess/createFunctions');

const router = express.Router();

router.get('/', (req, res) => {
    res.send('Add post screen');
});

router.post('/', createFunctions.createPost(req, res));

module.exports = router;


