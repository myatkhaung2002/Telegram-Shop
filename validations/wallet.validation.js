// wallet.validation.js
// Joi validation for wallet operations

const Joi = require('joi');

const createWallet = {
  body: Joi.object().keys({
    userId: Joi.number().integer().required(),
    balance: Joi.number().min(0),
    currency: Joi.string().max(10),
  })
};

const updateWallet = {
  body: Joi.object().keys({
    balance: Joi.number().min(0),
    currency: Joi.string().max(10),
  })
};

module.exports = {
  createWallet,
  updateWallet,
};
