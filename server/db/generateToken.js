const jwt = require("jsonwebtoken")
require("dotenv").config();

const generateToken = (id) => {
    // assigns a new token to a particular id
    // in this case, assigns new token to _user.id
    return jwt.sign({id}, process.env.JWT_SECRET, {
        expiresIn: "30d"
    });
};

module.exports= generateToken;