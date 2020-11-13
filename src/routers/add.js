const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
    res.send('Add post screen');
});

module.exports = router;


