const express = require('express');
const router = express.Router();
const { login, changePassword } = require('../controllers/auth');

// Route for user login
router.post('/login', login);

// Route for changing password
router.post('/change-password', changePassword);

module.exports = router;