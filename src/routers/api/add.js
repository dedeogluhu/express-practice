const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
    res.send('Add post screen');
});

router.post('/', (req, res) => {
    res.send('Adding post...');
});

module.exports = router;


