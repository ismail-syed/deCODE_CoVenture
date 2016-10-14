var express = require('express');
var app = express();

var cors = require('cors');
var bodyParser = require('body-parser');
var logger = require('morgan');
var mongoose = require('mongoose');
var mongoURL = "mongodb://user:pass@ds023054.mlab.com:23054/coventure-decode";
mongoose.connect(mongoURL);

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

var port = process.env.PORT || 8080;        // set our port

// more routes for our API will happen here

// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api

app.use('/api/users', require('./controllers/user'));
app.use('/api/companies', require('./controllers/companies'));


// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Magic happens on port ' + port);
