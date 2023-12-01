const { Post } = require('../models');

const postdata = [
    {
      "title": "Authentication vs Authorization",
      "code_block": "https://res.cloudinary.com/deqzppd4t/image/upload/v1698788649/aeelcxeyh2oleolckjz9.webp",
      "text": "There is a difference between authentication and authorization. Authentication means confirming your own identity, whereas authorization means being allowed access to the system.",
      "user_id": 1,
      "likes": 10
    },
    {
      "title": "Object-Relational Mapping",
      "code_block": "https://res.cloudinary.com/deqzppd4t/image/upload/v1698788663/bncs53685nrjiki3slpv.png",
      "text": "I have really loved learning about ORMs. It's really simplified the way I create queries in SQL!",
      "user_id": 2,
      "likes": 15
    }
  ]


const seedPosts = () => Post.bulkCreate(postdata);
module.exports = seedPosts;
  
