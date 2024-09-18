const Intervention = require('../models/interventionModel');

// Fetch all interventions
const getInterventions = async (req, res) => {
  try {
    const interventions = await Intervention.find().populate('bureauId'); // Fetch all interventions and populate bureauId
    res.json(interventions); // Send as JSON
  } catch (error) {
    console.error('Error fetching interventions:', error);
    res.status(500).json({ message: 'Error fetching interventions' });
  }
};

// Add a new intervention
const addIntervention = async (req, res) => {
  try {
    const { date, type, bureauId } = req.body; // Adjust based on your actual fields

    // Create a new intervention
    const newIntervention = new Intervention({
      date,
      type,
      bureauId
    });

    // Save the new intervention to the database
    await newIntervention.save();

    res.status(201).json({
      success: true,
      data: newIntervention
    });
  } catch (error) {
    console.error('Error adding intervention:', error);
    res.status(500).json({
      success: false,
      message: 'Server Error'
    });
  }
};
module.exports = {
    getInterventions,
    addIntervention
  };