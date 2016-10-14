var express = require('express');
var app = express();

var cors = require('cors');
var bodyParser = require('body-parser');
var logger = require('morgan');
// var mongoose = require('mongoose');
// var mongoURL = "mongodb://node:node@ds023644.mlab.com:23644/dashboard-api";
// mongoose.connect(mongoURL);

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

var port = process.env.PORT || 8080;        // set our port

// more routes for our API will happen here

// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/user', require('./controllers/user'));

// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Magic happens on port ' + port);