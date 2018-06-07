const config = require('config');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

const clientID = process.env.GOOGLE_OAUTH_CLIENT_ID || config.get('GOOGLE_OAUTH.CLIENT_ID');
const clientSecret = process.env.GOOGLE_OAUTH_CLIENT_SECRET || config.get('GOOGLE_OAUTH.CLIENT_SECRET');
const callbackURL = '/auth/google/callback';

const gsOptions = { clientID, clientSecret, callbackURL };

const gsCallback = (accessToken, refreshToken, profile, done) => {
  console.log('Access token:', accessToken);
  console.log('Refresh token:', refreshToken);
  console.log('Profile:', profile);
  done();
}
passport.use(new GoogleStrategy( gsOptions, gsCallback ));