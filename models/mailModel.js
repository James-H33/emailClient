var mongoose = require('mongoose');

var mailSchema = new mongoose.Schema({
  sender: String,
  content: String,
  time: String
})

module.exports = mongoose.model('Mail', mailSchema);
