
//let createError = require('http-errors');
let express = require('express');
let cors = require('cors');
let path = require('path');
//let cookieParser = require('cookie-parser');
let bodyParser = require('body-parser');
// let session = require('express-session');

let app = express();
app.use(cors());
app.options('*', cors());

/*app.use(session({
  saveUninitialized: true,
  resave: true,
  secret: "sessionSecret"
}));*/


let productsRouter = require('../routes/product');
let usersRouter = require('../routes/user');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());
// app.use(express.static(path.join(__dirname, '../public')));
// app.use(express.static(path.join(__dirname, '../node_modules')));

app.use('/products', productsRouter);
app.use('/users', usersRouter);
module.exports = app;