const express = require('express');
const router = express.Router();
const { getAtms, addAtm, deleteAtm } = require('../controllers/atm');

// Route to fetch all ATMs
router.get('/atms', getAtms);

// Route to add a new ATM
router.post('/atms', addAtm);

// Route to delete an ATM by ID
router.delete('/atms/:id', deleteAtm);

module.exports = router;
