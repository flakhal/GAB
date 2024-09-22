const mongoose = require('mongoose');

const bureauSchema = new mongoose.Schema({
  adress: {
    type: String,
    required: true
  }
});

const Bureau = mongoose.model('Bureau', bureauSchema ,'bureaux');

module.exports = Bureau;