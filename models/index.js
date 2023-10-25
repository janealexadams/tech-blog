const User = require('./User');
// const Forum = require('./Forum');
const Post = require('./Post');
const Comment = require('./Comment');
// const UserForum = require('./UserForum');

Post.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE',
});

Post.hasMany(Comment, {
    foreignKey: 'post_id',
    onDelete: 'CASCADE',
});

Comment.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE',
});


module.exports = {User, Post, Comment,};
