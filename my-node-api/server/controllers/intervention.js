const Intervention = require('../models/interventionModel');
const Atm = require('../models/atmModel');

// Fetch all interventions
// Fetch interventions for a specific ATM
const getInterventions = async (req, res) => {
  const { atmId } = req.params; // Get ATM ID from request parameters

  try {
    // Find interventions that match the given ATM ID
    const interventions = await Intervention.find({ atmId });  // Filter interventions by atmId
    res.json(interventions);
  } catch (error) {
    console.error('Error fetching interventions:', error);
    res.status(500).json({ message: 'Error fetching interventions' });
  }
};



// Add a new intervention
const addIntervention = async (req, res) => {
  try {
    const { date, type, atmId } = req.body; // Adjust based on your actual fields
    const atm = await Atm.findById(atmId);
    // Create a new intervention
    const newIntervention = new Intervention({
      date,
      type,
      atmId
    });

    // Save the new intervention to the database
    await newIntervention.save();

    atm.interventions.push(newIntervention._id);
    await atm.save();

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


// Controller to update an intervention
const updateIntervention = async (req, res) => {
  const { id } = req.params; // ID of the intervention to update
  const { type, price, reparateur, isResolved } = req.body; // Fields you want to update

  try {
    // Find the intervention by ID and update it with new values
    const updatedIntervention = await Intervention.findByIdAndUpdate(
      id,
      {
        type,
        price,
        reparateur,
        isResolved,
        files: req.files.map(file => ({
          fileName: file.filename, // Use the filename as fileId
          fileOriginalName: file.originalname,
        })), // Corrected the arrow function syntax here
      }, // Fields to update
      { new: true, runValidators: true } // Return the updated document and run schema validators
    );
    console.log('Uploaded Files:', req.files);
    // If no intervention found, send 404
    if (!updatedIntervention) {
      return res.status(404).json({
        success: false,
        message: 'Intervention not found',
      });
    }

    // Send back the updated intervention
    res.status(200).json({
      success: true,
      data: updatedIntervention,
    });
  } catch (error) {
    console.error('Error updating intervention:', error);
    res.status(500).json({
      success: false,
      message: 'Server Error',
    });
  }
};


async function getFileById(req, res) {
  const interventionId = req.params.interventionId;
  const fileId = req.params.fileId;
  console.log(fileId);
  try {
    // Retrieve the request document from the database
    const intervention = await Intervention.findById(interventionId);
    if (!intervention) {
      return res.status(404).send("intervention not found");
    }

    // Access files directly from the request object
    const foundFile = request.files.find(
      (file) => file._id.toString() === fileId
    );
    if (!foundFile) {
      return res.status(404).send("File not found");
    }
    const filePath = path.join(uploadsDir, foundFile.fileName);
    res.sendFile(filePath);
  } catch (error) {
    console.error("Error retrieving file:", error);
    res.status(500).send("Internal Server Error");
  }
}



module.exports = {
    getInterventions,
    addIntervention,
    updateIntervention,getFileById
  };