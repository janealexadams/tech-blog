const { Post } = require('../models');

const postdata = [
    {
      "title": "Authentication vs Authorization",
      "code_block": "https://res.cloudinary.com/practicaldev/image/fetch/s--_qQecFVO--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/bwu3oxfjvjwulmlvh2uu.jpg",
      "text": "There is a difference between authentication and authorization. Authentication means confirming your own identity, whereas authorization means being allowed access to the system.",
      "user_id": 1,
      "likes": 7
    },
    {
      "title": "Object-Relational Mapping",
      "code_block": "https://www.fullstackpython.com/img/visuals/orms-bridge.png",
      "text": "I have really loved learning about ORMs. It's really simplified the way I create queries in SQL!",
      "user_id": 2,
      "likes": 5
    }
  ]


const seedPosts = () => Post.bulkCreate(postdata);
module.exports = seedPosts;
  
