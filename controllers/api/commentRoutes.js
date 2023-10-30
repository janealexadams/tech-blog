const router = require('express').Router();
const { Comment, Post } = require('../../models');


// /Comments endpoint
// Get all comments 
router.get('/', (req, res) => {
    Comment.findAll()
        .then((commentData) => res.json(commentData))
        .catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
});

// Create new comment
router.post('/', (req, res) => {
    if (req.session) {
        console.log(req.session.user_id);
        Comment.create({
                text: req.body.text,
                user_id: req.session.user_id,
                post_id: req.body.post_id
            })
            .then(commentData => res.json(commentData))
            .catch(err => {
                console.log(err);
                res.status(400).json(err);
            });
    }
});

// Delete existing comment
router.delete('/:id', async (req, res) => {
    try {
        const commentData = await Comment.destroy({
            where: {
                id: req.params.id,
            },
        });
            if (!commentData) {
                res.status(404).json({ message:'"No comment found with this id' });
                return;
            }
            res.status(200).json(commentData);
        } catch (err) {
            res.status(500).json(err);
          }
        });

module.exports = router;
