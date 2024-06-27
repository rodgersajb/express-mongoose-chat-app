const express = require("express")
const registerUser = require("../controllers/userControllers")
// create an instance of our router from express

const router = express.Router()

router.route('/register').post(registerUser)
// router.route('/login', authUser)

module.exports = router