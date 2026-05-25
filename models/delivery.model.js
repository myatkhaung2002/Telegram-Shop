const mongoose = require('mongoose');

const DeliverySchema = new mongoose.Schema({
  orderId: { type: mongoose.Schema.Types.ObjectId, ref: 'Order', required: true },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  address: { type: String, required: true },
  status: { type: String, enum: ['pending', 'shipped', 'delivered', 'cancelled'], default: 'pending' },
  trackingId: { type: String },
  shippedAt: { type: Date },
  deliveredAt: { type: Date }
});

module.exports = mongoose.model('Delivery', DeliverySchema);
