const mongoose = require('mongoose');

// Define the schema for an ATM
const atmSchema = new mongoose.Schema({
  number: {
    type: Number, // Use Number instead of number
    required: true
  }, 
  interventions: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Intervention' // Ensure the reference matches the model name
  }]
});

// Create the model from the schema
const Atm = mongoose.model('Atm', atmSchema , 'atms');

module.exports = Atm