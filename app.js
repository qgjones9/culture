// Create HTTP errors for Express, Koa, Connect, etc. with ease.
const createError = require('http-errors');
const express = require('express');
const path = require('path');

// Parse Cookie header and populate req.cookies with an object keyed by the cookie names.
const cookieParser = require('cookie-parser');

// HTTP request logger middleware for node.js
const logger = require('morgan');

// instantiate express application
const app = express();


// view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// static content
app.use(express.static(path.join(__dirname, 'public')));

// get routes
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');

// use routes
app.use('/', indexRouter);
app.use('/users', usersRouter);


// // error handler
// app.use((err, req, res) => {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};

//   // render the error page
//   res.status(err.status || 500);
//   res.render('error');
// });

// catch 404 and forward to error handler
app.use((_req, _res, next) => {
  _res.render('error');
  next(createError(404));
});

module.exports = app;
