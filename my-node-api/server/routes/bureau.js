const express = require('express');
const router = express.Router();
const { getBureaux, addBureau, deleteBureau } = require('../controllers/bureau');

// Route to fetch all bureaux
router.get('/bureaux', getBureaux);

// Route to add a new Bureau
router.post('/bureaux', addBureau);

// Route to delete a Bureau by ID
router.delete('/bureaux/:id', deleteBureau);

module.exports = router;