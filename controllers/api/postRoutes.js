const router = require('express').Router();
const { Post } = require('../../models');

//create post
router.post('/', async (req, res) => {
  try {
    const newPost = await Post.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).redirect('/');
  } catch (err) {
    res.status(400).json(err);
  }
});


//delete post
router.delete('/:id', async (req, res) => {
  try {
    const newPost = await Post.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!newPost) {
      res.status(404).json({ message: 'No post found with this id!' });
      return;
    }

    res.status(200).json(newPost);
  } catch (err) {
    res.status(500).json(err.message);
  }
});

// update post
// router.put(':id', (req, res) => {
//     Post.update(
//       {
//         title: req.body.title,
//         code_block: req.body.code_block,
//         text: req.body.text,
//       },
//       { 
//         where: {
//             id: req.params.id,
//         },
//       }
//     )
//       .then((updatedPost) => {
//         res.json(updatedPost);
//       })
//       .catch((err) => res.json(err));
//   });

// update like count based on its id
// router.put('/:id', (req, res) => {
//     Post.update(
//       {
//         likes: req.body.likes,
//       },
//       {
//         where: {
//           id: req.params.id,
//         },
//       }
//     )
//       .then((updatedLikes) => {
//         res.json(updatedLikes);
//       })
//       .catch((err) => res.json(err));
//   });

module.exports = router;
