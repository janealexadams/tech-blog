const { Comment } = require('../models');

const commentdata = [
  {
    "text": "I appreciate your insight!",
    "user_id": 2,
    "post_id": 1,
    "likes": 2
  },
  {
    "text": "I agree.",
    "user_id": 1,
    "post_id": 2,
    "likes": 7
  }
];


const seedComments = () => Comment.bulkCreate(commentdata);
module.exports = seedComments;


