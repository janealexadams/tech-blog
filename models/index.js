const User = require('./User');
// const Forum = require('./Forum');
const Post = require('./Post');
const Comment = require('./Comment');
// const UserForum = require('./UserForum');

// Posts are created by Single User
// If a user is deleted their posts remain
Post.hasOne(User, {
    foreignKey: 'user_id',
    onDelete: 'SET NULL',
});

// User can make many posts
User.hasMany(Post, {
    foreignKey: 'user_id',
});

// // Each post is stored in 1 forum 
// // If a forum is deleted its posts are also deleted
// Post.hasOne(Forum, {
//     foreignKey: 'forum_id',
//     onDelete: 'CASCADE'
// });

// // Forums contain many posts
// Forum.hasMany(Post, {
//     foreignKey: 'forum_id',
// });

// A comment is a reply to a single post
// If a post is deleted all of its comments are deleted
Comment.hasOne(Post, {
    foreignKey: 'post_id',
    onDelete: 'CASCADE'
})

// Each post can have multiple comments
Post.hasMany(Comment, {
    foreignKey: 'post_id',
})

// // Users select which forums they would like to view
// User.belongsToMany(Forum, {
//   through: UserForum,
//   foreignKey: 'user_id'
// });

// // Forums contain many users
// Forum.belongsToMany(User, {
//   through: UserForum,
//   foreignKey: 'forum_id',
// });

module.exports = {User, Post, Comment,};
