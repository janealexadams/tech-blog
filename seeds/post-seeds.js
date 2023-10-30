const { Post } = require('../models');

const postdata = [
    {
      "title": "Weather Dashboard",
      "code_block": "http://res.cloudinary.com/dwymtagmc/image/upload/v1698256573/h1vzqipgh9jkc44ujsue.png",
      "text": "Just finished making a weather dashboard.",
      "user_id": 1,
      "likes": 7
    },
    {
      "title": "Look at my code..",
      "code_block": 'http://res.cloudinary.com/dwymtagmc/image/upload/v1698256687/pm2arsa0o57lv5hdl7qk.png',
      "text": "Would love feedback on this!",
      "user_id": 2,
      "likes": 5
    }
  ]


const seedPosts = () => Post.bulkCreate(postdata);
module.exports = seedPosts;
  
