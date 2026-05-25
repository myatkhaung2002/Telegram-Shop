const Delivery = require('../models/delivery.model');

exports.createDelivery = async (data) => {
  const delivery = new Delivery(data);
  return await delivery.save();
};

exports.getDeliveryById = async (id) => {
  return await Delivery.findById(id).populate('orderId userId');
};

exports.updateDeliveryStatus = async (id, status, trackingId) => {
  return await Delivery.findByIdAndUpdate(
    id,
    { status, trackingId },
    { new: true }
  );
};
