const config = require('config');
const express = require('express');
const mongoose = require('mongoose');
require('./services/passport');

const MONGODB_URI = process.env.MONGODB_URI || config.get('MONGODB_URI');
mongoose.connect(MONGODB_URI);

const app = express();

require('./routes/auth')(app);

const PORT = process.env.PORT || 3000;
app.listen(PORT);