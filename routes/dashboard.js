const express = require('express');
const { getDashboard } = require('../controllers/dashboard');

const router = express.Router();

router.get('/:id', getDashboard)

module.exports = router;