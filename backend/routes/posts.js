const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

//Retourner tous les postes
router.get('/', async (req, res) => {
    try {
        const posts = await Post.find();
        res.json(posts);
    } catch (err) {
        res.json({ message: err });
    }
});


//Submit un post
router.post('/', async (req, res) => {
    const post = new Post({
        Nom: req.body.Nom,
        Prenom: req.body.Prenom,
        Age: req.body.Age,
        Ecurie: req.body.Ecurie,
        Victoires: req.body.Victoires
    });
    try {
        const savedPost = await post.save()
        res.json(savedPost);
    } catch (err) {
        res.json({ message: err });
    }
});

//récupérer un post specific
router.get('/:postId', async (req, res) => {
    try {
        const post = await Post.findById(req.params.postId);
        res.json(post);
    } catch (err) {
        res.json({ message: err });
    }
});

//Supprime un post specific
router.delete('/:postId', async (req, res) => {
    try {
        const removedPost = await Post.remove({ _id: req.params.postId })    //mango a généré un _id donc on met le même
        res.json(removedPost);
    } catch (err) {
        res.json({ message: err });
    }
});

//uptade un post specific
router.patch('/:postId', async (req, res) => {
    try {
        const uptadedPost = await Post.updateOne({ _id: req.params.postId }, { $set: { Nom: req.body.Nom } });
        res.json(uptadedPost);
    } catch (err) {
        res.json({ message: err });
    }
})
module.exports = router;