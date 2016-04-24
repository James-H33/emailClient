var express     = require('express');
var app         = express();
var mongoose    = require('mongoose');
var bodyParser  = require('body-parser');

// Require  Models
// var Mail = require('./models/mailModel');

// Require Routes
var indexRoutes = require('./routes/indexRoute');
var mailRoutes = require('./routes/mailRoute');

// Require Fake Database
var Seed = require('./seedDB');

// Ports
var port = process.env.PORT || 4000;
var portIP = process.env.IP;


mongoose.connect('mongodb://localhost/mail_client');
app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static(__dirname + '/public'));
app.set('view engine', 'pug');

// Use Fake Database
Seed();


app.get('/', function(req, res){
  res.redirect('/mail');
})

app.use('/', indexRoutes);
app.use('/', mailRoutes);

app.listen(port, portIP, function(){
  console.log('Server has started...');
})
