// user.routes.js
const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller');
const verifyToken = require('../middlewares/verifyToken');
const isAdmin = require('../middlewares/isAdmin');

// Routes accessible by authenticated users
router.get('/me', verifyToken, userController.getMe);
router.patch('/me', verifyToken, userController.updateMe);

// Admin routes
router.get('/', verifyToken, isAdmin, userController.getAllUsers);
router.get('/:id', verifyToken, isAdmin, userController.getUserById);
router.delete('/:id', verifyToken, isAdmin, userController.deleteUser);

module.exports = router;
