require('dotenv').config();
require('./config/database');
const express = require('express');
const morgan = require('morgan');
const app = express();

// Controllers
const testJwtCtrl = require('./controllers/test-jwt');

app.use(express.json());
app.use(morgan('dev'));

// Public Routes
app.use('/test-jwt', testJwtCtrl);

// Private Routes

app.listen(3000, () => {
  console.log('The express app is ready!');
});