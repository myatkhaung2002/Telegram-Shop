// payment.validation.js
// Joi validation schemas for Payment operations

const Joi = require('joi');

const createDeposit = {
  body: Joi.object().keys({
    amount: Joi.number().positive().required(),
    walletId: Joi.number().integer().required(),
  })
};

module.exports = {
  createDeposit,
};
