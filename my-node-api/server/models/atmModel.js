const mongoose = require('mongoose');

// Define the schema for an ATM
const atmSchema = new mongoose.Schema({
  number: {
    type: Number, // Use Number instead of number
    required: true
  },
  bureauId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Bureau',
    required: true  // Every ATM should be linked to a bureau
  }, 
  interventions: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Intervention' // Ensure the reference matches the model name
  }]
});

// Create the model from the schema
const Atm = mongoose.model('Atm', atmSchema , 'atms');

module.exports = Atm