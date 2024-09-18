const mongoose = require('mongoose');

// Define the schema for an ATM
const atmSchema = new mongoose.Schema({
  number: {
    type: Number, // Use Number instead of number
    required: true
  },
  bureauId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Bureau', // Ensure the reference matches the model name
    required: true
  }
});

// Create the model from the schema
const Atm = mongoose.model('Atm', atmSchema);

module.exports = Atm