const express = require('express');
const router = express.Router();
const ordersController = require('../controllers/orders.controller');

// Create a new order
router.post('/', ordersController.createOrder);

// Get all orders
router.get('/', ordersController.getOrders);

// Get a specific order
router.get('/:id', ordersController.getOrderById);

// Update an order
router.put('/:id', ordersController.updateOrder);

// Delete an order
router.delete('/:id', ordersController.deleteOrder);

module.exports = router;
