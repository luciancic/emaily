const config = require('config');
const passport = require('passport');
const mongoose = require('mongoose');
const User = mongoose.model('users');
const GoogleStrategy = require('passport-google-oauth20').Strategy;


passport.serializeUser((user, done) => done(null, user.id));
passport.deserializeUser((id, done) => {
  User.findById(id).then(user => done(null, user));
});


const gsOptions = { 
  clientID: config.get('GOOGLE_OAUTH.CLIENT_ID'), 
  clientSecret: config.get('GOOGLE_OAUTH.CLIENT_SECRET'), 
  callbackURL: '/auth/google/callback'
};

const gsCallback = async (accessToken, refreshToken, profile, done) => {
  const existingUser = await User.findOne({ googleId : profile.id });
  
  if (existingUser) {
    return done(null, existingUser);
  }
  const newUser = await User.create({ googleId: profile.id })
  done(null, newUser);
};

passport.use(new GoogleStrategy( gsOptions, gsCallback ));
