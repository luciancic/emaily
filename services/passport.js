const config = require('config');
const passport = require('passport');
const mongoose = require('mongoose');
const User = mongoose.model('users');
const GoogleStrategy = require('passport-google-oauth20').Strategy;


passport.serializeUser((user, done) => done(null, user.id));
passport.deserializeUser((id, done) => {
  User.findById(id).then(user => done(null, user));
});

const clientID = process.env.GOOGLE_OAUTH_CLIENT_ID || config.get('GOOGLE_OAUTH.CLIENT_ID');
const clientSecret = process.env.GOOGLE_OAUTH_CLIENT_SECRET || config.get('GOOGLE_OAUTH.CLIENT_SECRET');
const callbackURL = '/auth/google/callback';

const gsOptions = { clientID, clientSecret, callbackURL };
const gsCallback = (accessToken, refreshToken, profile, done) => {
  User.findOne({ googleId : profile.id })
  .then((existingUser) => {
    if (existingUser) {
      done(null, existingUser);
    } else {
      User.create({ googleId: profile.id })
      .then(newUser => {
        done(null, newUser);
      });
    }
  })
  .catch(err => done(err));
};

passport.use(new GoogleStrategy( gsOptions, gsCallback ));