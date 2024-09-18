const express = require('express');
const router = express.Router();
const { getInterventions, addIntervention, deleteIntervention } = require('../controllers/intervention');

// Route to fetch all interventions
router.get('/interventions', getInterventions);

// Route to add a new intervention
router.post('/interventions', addIntervention);



module.exports = router;
