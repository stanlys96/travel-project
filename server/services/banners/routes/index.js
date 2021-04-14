const express = require('express');
const router = express.Router();
const bannerRoutes = require('./banner');

router.use('/banner', bannerRoutes);

module.exports = router;