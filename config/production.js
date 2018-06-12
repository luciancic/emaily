module.exports = {
  GOOGLE_OAUTH: {
    CLIENT_ID: process.env.GOOGLE_OAUTH_CLIENT_ID,
    CLIENT_SECRET: process.env.GOOGLE_OAUTH_CLIENT_SECRET
  },
  STRIPE: {
    PUBLISHABLE_KEY: process.env.STRIPE_PUBLISHABLE_KEY,
    SECRET_KEY: process.env.STRIPE_SECRET_KEY
  },
  MONGODB_URI: process.env.MONGODB_URI,
  COOKIE_KEY: process.env.COOKIE_KEY
};