const express = require('express');
const Post = require('../../models/Post');

const router = express.Router();

router.get('/', (req, res) => {
    res.send('Add post screen');
});

router.post('/', async (req, res) => {
    const post = new Post({
        question: req.body.question,
        choices: req.body.choices,
        date: Date.now()
    });

    try {
        const postSaved = await post.save()
        res.send(postSaved);
    } catch (error) {
        console.log(error);
    }
});

module.exports = router;


