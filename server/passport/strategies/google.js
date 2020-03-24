require("dotenv").config();
const passport = require("passport");

const { hashPassword } = require("../../lib/hash-password");
const User = require("../../models/User");
const GoogleStrategy = require("passport-google-oauth20").Strategy;

const BASE_PASSWORD = "wX9";

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET,
      callbackURL: process.env.CALLBACK_URL
    },
    async (accessToken, refreshToken, profile, done) => {
      const googleID = profile.id;
      const email = profile._json.email;
      const username = profile._json.email.slice(
        0,
        profile._json.email.indexOf("@")
      );
      const picture = profile._json.picture;

      try {
        const user = await User.findOne({
          $or: [{ email }, { username }, { "social.googleID": googleID }]
        });
        if (!user) {
          const hash = hashPassword(
            BASE_PASSWORD.concat(Math.random().toString(35))
          );
          const newUser = await User.create({
            email,
            username,
            password: hash,
            social: {
              googleID
            },
            picture
          });
          return done(null, newUser);
        }
        return done(null, user);
      } catch (error) {
        done(error);
      }
    }
  )
);
