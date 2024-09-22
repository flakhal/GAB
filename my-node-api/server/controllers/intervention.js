const Intervention = require('../models/interventionModel');

// Fetch all interventions
// Fetch interventions for a specific ATM
const getInterventions = async (req, res) => {
  const { atmId } = req.params; // Get ATM ID from request parameters
  try {
    const interventions = await Intervention.find({ atmId }); // Filter by atmId
    res.json(interventions);
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