const config = require('config');
const cookieSession = require('cookie-session');
const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const path = require('path');
require('./models');
require('./services/passport');
const app = express();

const MONGODB_URI = process.env.MONGODB_URI || config.get('MONGODB_URI');
mongoose.connect(MONGODB_URI);

const COOKIE_KEY = process.env.COOKIE_KEY || config.get('COOKIE_KEY');


app.use(cookieSession({
  maxAge: 30 * 24 * 60 * 60 * 1000,
  keys: [COOKIE_KEY]
}));
app.use(passport.initialize());
app.use(passport.session());

app.use(express.static(path.resolve(__dirname, 'client/build')));

require('./routes/auth')(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT);