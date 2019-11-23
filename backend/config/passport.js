// required library modules

// for authentication
const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;

// database driver
const mongoose = require("mongoose");

// required model
const User = mongoose.model("user");

const opts = {};

// extract bearer token from Auth Header
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = process.env.SECRET_OR_KEY;

module.exports = passport => {
  passport.use(
    "user",
    new JwtStrategy(opts, async (jwt_payload, done) => {
      try {
        const user = await User.findById(jwt_payload.id);
        if (user) {
          return done(null, user);
        }
        return done(null, false);
      } catch (err) {
        console.log(err);
      }
    })
  );
};
