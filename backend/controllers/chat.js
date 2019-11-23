// require library modules
const mongoose = require("mongoose"); // database driver

// load database collection
const Chat = require("../models/Chat");

// load validation depending upon inputs
const validateChatDetailsInput = require("../validations/chat");

// TODO: test the chat route
exports.test = async (req, res, next) => {
  res.json({
    success: true
  });
};

// TODO: insert new chat
exports.insertChat = async (req, res, next) => {
  const { errors, isValid } = validateChatDetailsInput(req.body);
  if (!isValid) {
    // if chat data is not valid
    res.status(400).json(errors);
  } else {
    try {
      const newChat = new Chat({
        name: req.user.name,
        content: req.body.content
      });
      const chat = await newChat.save();
      res.json(chat);
    } catch (err) {
      console.log(err);
    }
  }
};

// TODO: view all chats
exports.getAllChats = async (req, res, next) => {
  try {
    const chat = await Chat.find();
    res.json(chat);
  } catch (err) {
    console.log(err);
  }
};
