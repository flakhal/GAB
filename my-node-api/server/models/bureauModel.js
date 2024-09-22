const mongoose = require('mongoose');

const bureauSchema = new mongoose.Schema({
  adress: {
    type: String,
    required: true
  }, atms: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Atm' }]
});

const Bureau = mongoose.model('Bureau', bureauSchema ,'bureaux');

module.exports = Bureau;