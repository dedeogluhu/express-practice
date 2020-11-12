const express = require('express');
const Post = require('../../models/Post');

const router = express.Router();

router.get('/', (req, res) => {
    res.send('Add post screen');
});

router.post('/', (req, res) => {
    const post = new Post({
        question: req.body.question,
        choices: req.body.choices,
        date: Date.now()
    });
    post.save()
        .then(data => res.send(data))
        .catch(error => console.log(error));
});

module.exports = router;


