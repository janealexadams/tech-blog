const { Post } = require('../models');

const postdata = [
    {
      "title": "Authentication vs Authorization",
      "code_block": "",
      "text": "There is a difference between authentication and authorization. Authentication means confirming your own identity, whereas authorization means being allowed access to the system.",
      "user_id": 1,
      "likes": 7
    },
    {
      "title": "Object-Relational Mapping",
      "code_block": "",
      "text": "I have really loved learning about ORMs. It's really simplified the way I create queries in SQL!",
      "user_id": 2,
      "likes": 5
    }
  ]


const seedPosts = () => Post.bulkCreate(postdata);
module.exports = seedPosts;
  
