const asyncHandler = require("express-async-handler");
const User = require("../models/userModel")

const registerUser = asyncHandler(async (req, res) => {
    const {username, age, pic} = req.body

    if (!username) {
        resizeBy.status(400);
        throw new Error("Please enter a username")
    }

    const userExists = await User.findOne({username});

    if (userExists) {
        res.status(400);
        throw new Error("Sorry that user exists already")
    }

    const user = await User.create({
        username,
        age,
        pic
    })

    if (user) {
        res.status(201).json({
            _id: user._id,
            username: user.username,
            age: user.age,
            pic: user.pic,
            token: generateToken(user._id)
        })
    } else {
        res.status(400)
        throw new Error("Failed to create suer")
    }
})

module.exports = registerUser;