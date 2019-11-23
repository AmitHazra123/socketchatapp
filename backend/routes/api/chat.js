// require library modules
const express = require("express");
const router = express.Router();

// require authentication helper module
const passport = require("passport");

// require controllers
const { test, insertChat, getAllChats } = require("../../controllers/chat");

//@desc     test
//@route    GET /api/chat/test
//@access   Public
router.get("/test", test);

//@desc     insert a chat
//@route    POST /api/chat/insertchat
//@access   Private
router.post(
  "/insertchat",
  passport.authenticate("user", { session: false }),
  insertChat
);

//@desc     view all chats
//@route    GET /api/chat/getallchats
//@access   Private
router.get(
  "/getallchats",
  passport.authenticate("user", { session: false }),
  getAllChats
);

module.exports = router;
