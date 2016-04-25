var mongoose = require('mongoose');
var Mail = require('./models/mailModel');


var data = [
  {
    sender: 'John Smith',
    content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do.',
    time: 'March 1, 2016'
  },
  {
    sender: 'Kyle Mongo',
    content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do.',
    time: 'March 7, 2016'
  },
  {
    sender: 'Jane Hidler',
    content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do.',
    time: 'March 15, 2016'
  },
  {
    sender: 'James Hall',
    content: 'Hey, James! Lets get to programming like a boss!',
    time: 'March 31, 2016'
  },
]

function seed(){
  Mail.remove({}, function(err) {
    if(err) {
      cosnole.log(err);
    } else {
      console.log('Mail Removed');
      data.forEach(function(mail){
        Mail.create(mail, function(err, mailItem){
          if(err) {
            console.log(err);
          } else {
            console.log('Mailer Created');
            mailItem.save();
          }
        })
      })
    }
  })
}

module.exports = seed;
