const router = require('express').Router();
const { Post, Comment, User } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  try {
    // Get all projects and JOIN with user data
    const postData = await Post.findAll({
      order: [['created_at', 'DESC']],
      include: [
        {
          model: User,
          attributes: ['name'],
        },
        {
          model: Comment,
          include: [
            {
              model: User,
              attributes: ['name']
            }
          ],
        },
      ],
    });

    // Serialize data so the template can read it
    const posts = postData.map((post) => post.get({ plain: true }));
    // get data for homepage
    // render homepage
    res.render('homepage', { 
      posts,
      logged_in: req.session.logged_in, 
      userId: req.session.user_id
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }
  res.render('login');
});

router.get('/post', withAuth, async (req, res) => {
    // Get all projects and JOIN with user data
    const postData = await User.findByPk(
      req.session.user_id,{
      include: [
        {
          model: Post,
        },
      ],
    });

    // Serialize data so the template can read it
    const posts = postData.get({plain:true})
    console.log(posts)
    res.render('create-post', { 
      posts,
      logged_in: req.session.logged_in, 
      userId: req.session.user_id
    });
});
  
module.exports = router;