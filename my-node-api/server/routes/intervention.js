const express = require('express');
const router = express.Router();
const { getInterventions, addIntervention } = require('../controllers/intervention');

// Route to fetch all interventions
router.get('/atms/:atmId/interventions', getInterventions);


// Route to add a new intervention
router.post('/interventions', addIntervention);



module.exports = router;
