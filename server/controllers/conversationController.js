const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const Chat = require("../models/ChatModel");


const conversation = asyncHandler(async (req, res) => {
    const { userId } = req.body;

    // check to see if there is a user Id

    if (!userId) {
        console.log("userId not sent with request")
        return res.sendStatus(400)
    }

    let isChat = await Chat.find({
        // and operator will check will select the amount of documents in the array that satisfy the request. In this case, the logged in user and the user selected to chat with
        $and: [
            { users: { $elemMatch: { $eq: req.user._id}}},
            { users: { $elemMatch: { $eq: userId }}}
        ]
    }).populate("users").populate("latestMessage");

    isChat = await User.populate(isChat, {
        path: 'latestMessage.sender',
        select: "username"
    })

    // check IF conversation exists

    if (isChat.length > 0) {
        res.send(isChat[0])
    } else {
        let chatData = {
            users: [req.user._id, userId]
        };

        try {
            const createChat = await Chat.create({chatData})

            const Conversation = await Chat.findOne({_id: createChat._id}).populate(
                "users"
            );
            res.status(200).send(Conversation)
        } catch (error) {
            
        }
    }
})

module.exports = conversation;