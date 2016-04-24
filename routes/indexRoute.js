var express = require('express');
var router = express.Router();
var Mail = require('../models/mailModel');


router.get('/mail', function(req, res) {
  Mail.find({}, function(err, mail){
    if(err) {
      console.log(err);
    } else {
      res.render('index', {mailer: mail});
    }
  })
})

module.exports = router;
