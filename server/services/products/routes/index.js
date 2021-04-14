const express = require('express');
const router = express.Router();
const destinationRoutes = require('./destination');

router.use('/destination', destinationRoutes);

module.exports = router;