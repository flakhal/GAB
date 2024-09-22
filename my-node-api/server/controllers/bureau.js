const Bureau = require('../models/bureauModel'); // Import the Bureau model

// Fetch all bureaux
const getBureaux = async (req, res) => {
  try {
    const bureaux = await Bureau.find();

    if (!bureaux || bureaux.length === 0) {
      console.log('No bureaux found');
      return res.json([]); // Return an empty array
    }

    console.log('Bureaux data:', bureaux);
    res.json(bureaux); // Send as JSON
  } catch (error) {
    console.error('Error fetching bureaux:', error);
    res.status(500).json({ message: 'Error fetching bureaux' });
  }
};


// Add a new Bureau
const addBureau = async (req, res) => {
  try {
    const { adress} = req.body; // Adjust based on your actual fields

    // Create a new Bureau
    const newBureau = new Bureau({
      adress
    });

    // Save the new Bureau to the database
    await newBureau.save();

    res.status(201).json({
      success: true,
      data: newBureau
    });
  } catch (error) {
    console.error('Error adding Bureau:', error);
    res.status(500).json({
      success: false,
      message: 'Server Error'
    });
  }
};

// Delete a Bureau
const deleteBureau = async (req, res) => {
  try {
    const { id } = req.params; // Get Bureau ID from URL parameters

    // Find and delete the Bureau by ID
    const result = await Bureau.findByIdAndDelete(id);

    if (!result) {
      return res.status(404).json({
        success: false,
        message: 'Bureau not found'
      });
    }

    res.status(200).json({
      success: true,
      message: 'Bureau deleted successfully'
    });
  } catch (error) {
    console.error('Error deleting Bureau:', error);
    res.status(500).json({
      success: false,
      message: 'Server Error'
    });
  }
};

module.exports = {
  getBureaux,
  addBureau,
  deleteBureau
};
