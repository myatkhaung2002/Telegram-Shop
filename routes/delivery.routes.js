const express = require('express');
const router = express.Router();
const deliveryController = require('../controllers/delivery.controller');

// Create a new delivery
router.post('/', deliveryController.create);

// Get a delivery by ID
router.get('/:id', deliveryController.getById);

// Update delivery status
router.patch('/:id/status', deliveryController.updateStatus);

module.exports = router;
