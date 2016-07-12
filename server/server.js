var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var session = require('express-session');
var passport = require('passport');
var app = express();
var apiRoutes = require('./configs/router');

require('./configs/mongoose')();
require('./auth/passport');

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(session({ secret: 'SOMPOPOPOPOP' }));
app.use(passport.initialize());
app.use(passport.session());

app.use(express.static(__dirname + '/../client'));
app.use(express.static(__dirname + '/../compiled'));
app.use(express.static(__dirname + '/../node_modules'));
app.use('/api', apiRoutes);

app.listen(8080, function() {
  console.log('Listening on localhost:8080...');
});
