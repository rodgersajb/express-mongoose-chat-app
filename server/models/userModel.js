const mongoose = require("mongoose");
// const bcrypt = require("bcrypt");
const validator = require("validator");

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
      validate(value) {
        if (!validator.isEmail(value)) {
          throw new Error("Ohhhhhh Noooooo email");
        }
      },
    },
    password: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
      minlength: 6,
      validate(value) {
        if (value.toLowerCase().includes("password")) {
          throw new Error("Oh come now, I know you can do a LITTLE better");
        }
      },
    }, 
    isAdmin: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  { timestamps: true }
);

// userSchema.methods.matchPassword = async function(enteredPassword) {
//   console.log(enteredPassword, this.password)
//   return await bcrypt.compare(enteredPassword, this.password)

// };

// userSchema.pre("save", async function (next) {
//   if (!this.isModified) {
//     next()
//   }

//   const salt = await bcrypt.genSalt(10);
//   this.password = await bcrypt.hash(this.password, salt)
// })

// userSchema.methods.matchUsername=async function(enteredusername) {

// }

const User = mongoose.models.User || mongoose.model("User", userSchema);

module.exports = User;
