// require library modules
const mongoose = require("mongoose"); // database driver

// create user schema
const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please insert a name"],
    maxlength: [20, "User Name cannot be more that 20 characters"]
  },
  email: {
    type: String,
    required: [true, "Please insert a email"],
    unique: true
  },
  password: {
    type: String,
    required: [true, "Please insert a password"]
  }
});

module.exports = mongoose.model("user", UserSchema);
