const mongoose = require('mongoose');

const bureauSchema = new mongoose.Schema({
  adress: {
    type: String,
    required: true
  }
});

const Bureau = mongoose.model('bureau', bureauSchema);

module.exports = Bureau;