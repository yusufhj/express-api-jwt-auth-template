require('dotenv').config();
require('./config/database');
const express = require('express');
const morgan = require('morgan');
const app = express();

// Controllers
const testJwtCtrl = require('./controllers/test-jwt');
const usersRouter = require('./controllers/users');

app.use(express.json());
app.use(morgan('dev'));

// Public Routes
app.use('/test-jwt', testJwtCtrl);
app.use('/users', usersRouter);

// Private Routes

app.listen(3000, () => {
  console.log('The express app is ready!');
});