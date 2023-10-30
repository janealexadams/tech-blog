const { User } = require('../models');

const userdata = [
    {
      "name": "Lernantino",
      "email": "jane@hotmail.com",
      "password": "password123"
    },
    {
      "name": "Xandromus",
      "email": "daria@gmail.com",
      "password": "password345"
    }
  ]
  

const seedUsers = () => User.bulkCreate(userdata);
module.exports = seedUsers;
  
  