var mongoose = require('mongoose');

var mailSchema = new mongoose.Schema({
  sender: String,
  content: String
})

module.exports = mongoose.model('Mail', mailSchema);
