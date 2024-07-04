const User = require("../models/userModel");
const asyncHandler = require("express-async-handler");
const generateToken = require("../db/generateToken");

const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  console.log(user, "user find One");

  // if (user) {
  //   const isMatch = await user.matchPassword(password);
  //   console.log(`Password match: ${isMatch}`)

  //   if (isMatch) {
  //     res.json({
  //     _id: user._id,
  //     username: user.username,
  //     email: user.email,
  //     isAdmin: user.isAdmin,
  //     token: generateToken(user._id),
  //   });
    
  // }
  if(user && user.password === password) {
    res.json({
      _id: user._id,
      username: user.username,
      email: user.email,
      isAdmin: user.isAdmin,
      token: generateToken(user._id),
    })
  } 
    
   else {
    res.status(401);
    throw new Error("Invalid Email or Password");
  }
});

module.exports = authUser;
