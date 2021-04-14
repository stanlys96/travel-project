const express = require('express');
const router = express.Router();
const DestinationController = require('../controllers/DestinationController');

router.get('/', DestinationController.getAllDestinations);

router.get('/:id', DestinationController.getOneDestination);

router.post('/', DestinationController.createDestination);

router.put('/:id', DestinationController.updateOneDestination);

router.delete('/:id', DestinationController.destroyOne);

module.exports = router;