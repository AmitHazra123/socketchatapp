// require library modules
const mongoose = require("mongoose");

// create chat schema
const chatSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: [true, "Please insert a chat content"]
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("chat", chatSchema);
