// require library modules
const express = require("express");
const router = express.Router();

// require authentication helper module
const passport = require("passport");

// require controllers
const { test, signUp, login, current } = require("../../controllers/auth");

//@desc     test
//@route    GET /api/auth/test
//@access   Public
router.get("/test", test);

//@desc     sign up new user
//@route    POST /api/auth/signup
//@access   Public
router.post("/signup", signUp);

//@desc     login existing user
//@route    POST /api/auth/login
//@access   Public
router.post("/login", login);

//@desc     get current user details
//@route    GET /api/auth/current
//@access   Private
router.get(
  "/current",
  passport.authenticate("user", { session: false }),
  current
);

module.exports = router;
