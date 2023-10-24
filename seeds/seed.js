const sequelize = require('../config/connection');
// const { Comment, Forum, Post, User, UserForum } = require('../models');

const seedComments = require('./comment-seeds');
// const seedForums = require('./forum-seeds');
const seedPosts = require('./post-seeds');
const seedUsers = require('./user-seeds');
// const seedUserForums = require('./userForum-seeds');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');

  await seedUsers();
  console.log('\n----- USERS SEEDED -----\n');

  // await seedForums();
  // console.log('\n----- FORUMS SEEDED -----\n');

  await seedPosts();
  console.log('\n----- POSTS SEEDED -----\n');

  await seedComments();
  console.log('\n----- COMMENTS SEEDED -----\n');

  // await seedUserForums();
  // console.log('\n----- USER FORUMS SEEDED -----\n');

  process.exit(0);
};

seedDatabase();
