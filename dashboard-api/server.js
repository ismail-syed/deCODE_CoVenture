var express = require('express');
var app = express();

var cors = require('cors');
var path = require('path');
var bodyParser = require('body-parser');
var logger = require('morgan');
var mongoose = require('mongoose');
var mongoURL = "mongodb://user:pass@ds023054.mlab.com:23054/coventure-decode";
mongoose.Promise = global.Promise;
mongoose.connect(mongoURL);

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(express.static(path.join(__dirname, '../public')));

var port = process.env.PORT || 3000;        // set our port

// more routes for our API will happen here

// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api

app.use('/api/users', require('./controllers/user'));
app.use('/api/companies', require('./controllers/companies'));
app.use('/api/goals', require('./controllers/goal'));

app.get('/', function(req, res) {
  res.sendFile('./index.html');
});
// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Magic happens on port ' + port);
