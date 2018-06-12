const config = require('config');
const cookieSession = require('cookie-session');
const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const path = require('path');
require('./models');
require('./services/passport');
const app = express();

mongoose.connect(config.get('MONGODB_URI'));

app.use(cookieSession({
  maxAge: 30 * 24 * 60 * 60 * 1000,
  keys: [config.get('COOKIE_KEY')]
}));
app.use(passport.initialize());
app.use(passport.session());

require('./routes/auth')(app);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client','build', 'index.html'));
  });
}

const PORT = process.env.PORT || 5000;
app.listen(PORT);