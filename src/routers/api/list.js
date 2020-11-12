const express = require('express');
const Post = require('../../models/Post');

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const posts = await Post.find();
        res.send(posts);
    } catch (error) {
        console.log(error);
    }
});

router.get('/:id', async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        res.send(post);
    } catch (error) {
        console.log(error);
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const postDeleted = await Post.findByIdAndDelete(req.params.id);
        res.send(postDeleted);
    } catch (error) {
        console.log(error);
    }
});

router.put('/:id', async (req, res) => {
    try {
        const postUpdated = await Post.findByIdAndUpdate(req.params.id, {
            question: req.body.question,
            choices: req.body.choices
        }, {
            new: true
        });
        res.send(postUpdated);
    } catch (error) {
        console.log(error);
    }
});

module.exports = router;