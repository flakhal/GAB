const express = require('express');
const multer = require('multer');
const fs = require('fs');
const path = require('path');
const asyncWrapper = require("../middleware/asyncWrapper");
const router = express.Router();
const { getInterventions, addIntervention, updateIntervention ,
    getFileById } = require('../controllers/intervention');

// Route to fetch all interventions
router.get('/atms/:atmId/interventions', getInterventions);


// Route to add a new intervention
router.post('/interventions', addIntervention);

router.get("/intervention/:interventionId/:fileId", getFileById);

const uploadsDir = path.join(__dirname, "../uploads");
if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir);
}
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, uploadsDir); // Directory to save uploaded files
    },
    filename: (req, file, cb) => {
      cb(null, Date.now() + '-' + file.originalname); // Unique file name
    }
  });
  
  const upload = multer({ storage });
  
  // Route to update an intervention and upload files
  router.put('/interventions/:id', upload.array('files'), asyncWrapper(updateIntervention));



module.exports = router;
