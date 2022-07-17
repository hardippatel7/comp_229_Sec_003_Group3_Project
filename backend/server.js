#!/usr/bin/env node
/**
 * Module dependencies.
 */

 var configDB = require('./config/db');
 var app = require('./config/app');
 var express = require('express');
 var debug = require('debug')('comp229.003.m2022:server');
 var http = require('http');
 const cors = require('cors')
 var corsOptions = {
    origin: "http://localhost:4200"
 }
 app.use(cors(corsOptions));

 /**
  * Get port from environment and store in Express.
  */

 var db = configDB();
 var port = normalizePort(process.env.PORT || '3000');
 app.set('port', port);
 app.use( express.static( "public" ) );

/**
  * Create HTTP server.
  */
 
 var server = http.createServer(app);
 
 /**
  * Listen on provided port, on all network interfaces.
  */
 server.listen(port);
 server.on('listening', onListening);
 
 /**
  * Normalize a port into a number, string, or false.
  */
 
 function normalizePort(val) {
   var port = parseInt(val, 10);
 
   if (isNaN(port)) {
     // named pipe
     return val;
   }
 
   if (port >= 0) {
     // port number
     return port;
   }
 
   return false;
 }
 
 /**
  * Event listener for HTTP server "listening" event.
  */
 
 function onListening() {
   var addr = server.address();
   var bind = typeof addr === 'string'
     ? 'pipe ' + addr
     : 'port ' + addr.port;
   debug('Listening on ' + bind);
   console.log(`Express app running on http://localhost:${port}`)
 }
 