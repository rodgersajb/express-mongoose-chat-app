const express = require("express")
const conversation = require("../controllers/conversationController")
const { protect } = require("../Middleware/authMiddleware")

const router = express.Router();

router.route('/').post(protect, conversation)
// router.route('/').get(fetchChats)

module.exports = router;