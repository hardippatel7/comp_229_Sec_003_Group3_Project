
//let createError = require('http-errors');
let express = require('express');
let cors = require('cors');
let passport = require('passport');

let app = express();
app.use(cors());
app.options('*', cors());


let productsRouter = require('../routes/product');
let usersRouter = require('../routes/user');
let questionRouter = require('../routes/question');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/products', productsRouter);
app.use('/users', usersRouter);
app.use('/questions', questionRouter);
app.use(passport.initialize());
module.exports = app;