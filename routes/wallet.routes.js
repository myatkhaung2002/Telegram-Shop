// wallet.routes.js
const express = require('express');
const router = express.Router();
const walletController = require('../controllers/wallet.controller');
const verifyToken = require('../middlewares/verifyToken');
const isAdmin = require('../middlewares/isAdmin');

// User wallet routes
router.post('/deposit', verifyToken, walletController.deposit);
router.get('/balance', verifyToken, walletController.getBalance);
router.get('/transactions', verifyToken, walletController.getTransactions);

// Admin routes
router.get('/pending', verifyToken, isAdmin, walletController.getPendingDeposits);
router.patch('/verify/:id', verifyToken, isAdmin, walletController.verifyDeposit);

module.exports = router;
