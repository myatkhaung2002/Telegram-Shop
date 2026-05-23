// payment.routes.js
const express = require('express');
const router = express.Router();
const paymentController = require('../controllers/payment.controller');
const verifyToken = require('../middlewares/verifyToken');
const isAdmin = require('../middlewares/isAdmin');

// User endpoints
router.post('/payment/deposit', verifyToken, paymentController.deposit);
router.get('/payment/history', verifyToken, paymentController.getHistory);

// Admin endpoints
router.get('/payment/pending', verifyToken, isAdmin, paymentController.getPending);
router.patch('/payment/verify/:id', verifyToken, isAdmin, paymentController.verifyDeposit);

module.exports = router;
