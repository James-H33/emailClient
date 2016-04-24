var express = require('express');
var router = express.Router();
var Mail = require('../models/mailModel');


router.get('/mail/:id', function(req, res) {
  Mail.findById(req.params.id, function(err, mailUser) {
    if(err) {
      console.log(err);
    } else {
      res.render('./mail/mail-view', {mailU: mailUser});
    }
  })
})

module.exports = router;
