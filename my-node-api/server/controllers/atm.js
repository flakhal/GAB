const ATM = require('../models/atmModel'); // Import the ATM model

// Fetch all ATMs
const getAtms = async (req, res) => {
  try {
    const atms = await ATM.find(); // Fetch all ATMs
    res.json(atms); // Send as JSON
  } catch (error) {
    console.error('Error fetching ATMs:', error);
    res.status(500).json({ message: 'Error fetching ATMs' });
  }
};

// Add a new ATM
const addAtm = async (req, res) => {
  try {
    const { date, type } = req.body; // Adjust based on your actual fields

    // Create a new ATM
    const newATM = new ATM({
      date,
      type
    });

    // Save the new ATM to the database
    await newATM.save();

    res.status(201).json({
      success: true,
      data: newATM
    });
  } catch (error) {
    console.error('Error adding ATM:', error);
    res.status(500).json({
      success: false,
      message: 'Server Error'
    });
  }
};

// Delete an ATM
const deleteAtm = async (req, res) => {
  try {
    const { id } = req.params; // Get ATM ID from URL parameters

    // Find and delete the ATM by ID
    const result = await ATM.findByIdAndDelete(id);

    if (!result) {
      return res.status(404).json({
        success: false,
        message: 'ATM not found'
      });
    }

    res.status(200).json({
      success: true,
      message: 'ATM deleted successfully'
    });
  } catch (error) {
    console.error('Error deleting ATM:', error);
    res.status(500).json({
      success: false,
      message: 'Server Error'
    });
  }
};

module.exports = {
  getAtms,
  addAtm,
  deleteAtm
};
