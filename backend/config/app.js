
//let createError = require('http-errors');
let express = require('express');
let path = require('path');
let cookieParser = require('cookie-parser');
let compress = require('compression');
let bodyParser = require('body-parser');
let methodOverride = require('method-override');
let session = require('express-session');

let app = express();

app.use(session({
  saveUninitialized: true,
  resave: true,
  secret: "sessionSecret"
}));


let productsRouter = require('../routes/product');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../public')));
app.use(express.static(path.join(__dirname, '../node_modules')));

app.use('/products', productsRouter);

module.exports = app;
