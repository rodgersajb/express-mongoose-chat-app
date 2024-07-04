const express = require("express");

const allUsers = require("../controllers/getUsersController");
const registerUser = require("../controllers/userControllers");
const authUser = require("../controllers/authUsersController");
const { protect } = require("../middleware/authMiddleware");

// create an instance of our router from express

const router = express.Router();

router.route("/").get(allUsers);
router.route("/").post(registerUser);

router.route("/login").post(authUser);
router.route("/set-cookies");

module.exports = router;
