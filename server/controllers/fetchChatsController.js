const asyncHandler = require("asyncHandler");
const Users = require("../models/userModel");
const Chats = require("../models/ChatModel");
const User = require("../models/userModel");

const fetchChats = asyncHandler(async (req, res) => {
  try {
    Chats.find({ users: { $elemMatch: { $eq: req.user._id } } })
      .populate("users", "-password")
      .populate("latestMessage")
      .sort({ updatedAt: -1 })
      .then(async (results) => {
        results = await User.populate(results, {
          path: "latestMessage.sender",
          select: "username email",
        });
        res.status(200).end(results);
      });
  } catch (error) {
    res.status(400);
    throw new Error(error.message);
  }
});

module.exports = fetchChats;
