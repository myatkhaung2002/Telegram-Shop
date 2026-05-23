// orders.validation.js
// Joi validation schemas for Orders operations

const Joi = require('joi');

const createOrder = {
  body: Joi.object().keys({
    productId: Joi.number().integer().required(),
    quantity: Joi.number().integer().min(1).default(1),
    price: Joi.number().positive().required(),
  })
};

module.exports = {
  createOrder,
};
