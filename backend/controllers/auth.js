// require library modules
const mongoose = require("mongoose"); // for handling database
const bcrypt = require("bcryptjs"); // to encrypt password
const jwt = require("jsonwebtoken"); // to create a json web token for private access

// load database collection
const User = require("../models/User");

// load validation depending upon inputs
const {
  validateSignUpUserDetailsInput,
  validateLoginUserDetailsInput
} = require("../validations/auth");

// TODO: test the auth route
exports.test = async (req, res, next) => {
  res.json({
    success: true
  });
};

//  TODO: sign up new user
exports.signUp = async (req, res, next) => {
  const { errors, isValid } = validateSignUpUserDetailsInput(req.body);
  if (!isValid) {
    // if data is not valid
    res.status(400).json(errors);
  } else {
    try {
      const user = await User.findOne({ email: req.body.email });
      if (user) {
        errors.email = "Email already exists";
        res.status(400).json(errors);
      } else {
        // user data from body
        const userData = new User({
          name: req.body.name,
          email: req.body.email,
          password: req.body.password
        });

        // encrypt password
        bcrypt.genSalt(10, (err, salt) => {
          bcrypt.hash(userData.password, salt, async (err, hash) => {
            if (err) throw err;
            userData.password = hash;
            const user = await userData.save();
            res.json(user);
          });
        });
      }
    } catch (err) {
      console.log(err);
    }
  }
};

//  TODO: login an existing user
exports.login = async (req, res, next) => {
  const { errors, isValid } = validateLoginUserDetailsInput(req.body);
  if (!isValid) {
    // if data is not valid
    res.status(400).json(errors);
  } else {
    try {
      const email = req.body.email;
      const password = req.body.password;
      const user = await User.findOne({ email });
      if (!user) {
        // if user not found
        errors.email = "Email not found";
        res.status(400).json(errors);
      } else {
        // check for password
        const isMatched = await bcrypt.compare(password, user.password);
        if (!isMatched) {
          // password not matched
          errors.password = "Password is Incorrect!";
          res.status(400).json(errors);
        } else {
          // password matched
          // login
          // create payload for token
          const payload = {
            id: user._id,
            name: user.name,
            email: user.email
          };

          // sign on jwt with the payload to create a token
          jwt.sign(
            payload,
            process.env.SECRET_OR_KEY,
            { expiresIn: 43200 },
            (err, token) => {
              if (err) throw err;
              res.json({
                success: true,
                token: "Bearer " + token
              });
            }
          );
        }
      }
    } catch (err) {
      console.log(err);
    }
  }
};

//  TODO: view the current logged in user
exports.current = async (req, res, next) => {
  res.json(req.user);
};
