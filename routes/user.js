const express = require('express');
const { getUser, createUser } = require('../controllers/user')
const router = express.Router();

router.get('/', getUser)
router.post('/', createUser)

module.exports = router;