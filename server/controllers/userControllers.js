const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const generateToken = require("../db/generateToken");

const registerUser = asyncHandler(async (req, res) => {
  const { username, password, email, isAdmin } = req.body;

  if (!username) {
    res.status(400);
    throw new Error("Please enter a username");
  }

  const userExists = await User.findOne({ username });

  if (userExists) {
    res.status(400);
    throw new Error("Sorry that user exists already");
  }

  const user = await User.create({
    username,
    email,
    password,
  });

  if (user) {
    res.status(201).json({
      _id: user._id,
      username: user.username,
      email: user.email,
      password: user.password,
      token: generateToken(user._id),
    });
  } else {
    res.status(400).json({ errorMessage: "Failed to create User" });
    throw new Error("Failed to create suer");
  }
});





// const getUsers = asyncHandler(async (req, res) => {
//   const { username, age, email } = res.body;
//   const users = await User.find({username, age, email});
//   if (users) {
//     res.status(201).json({
//       _id: users.id,
//       username: users.username,
//       age: users.age,
//       email: users.email,
//     });
//   } else {
//     throw new Error("Uh ohhhhhhhhhhhhhHhHhHh");
//   }
// });
// const authUser = asyncHandler(async (req, res) => {
//     const {username} = req.body

//     const user = await User.findOne({username})

//     if (user && ( await User.matchUsername(username))) {
//          res.status(201).json({
//            _id: user._id,
//            username: user.username,
//            age: user.age,
//            pic: user.pic,
//            token: generateToken(user._id),
//          });
//     }
// })

module.exports = registerUser;
