const deliveryService = require('../services/delivery.service');

exports.create = async (req, res) => {
  try {
    const delivery = await deliveryService.createDelivery(req.body);
    res.status(201).json(delivery);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getById = async (req, res) => {
  try {
    const delivery = await deliveryService.getDeliveryById(req.params.id);
    if (!delivery) return res.status(404).json({ message: 'Not found' });
    res.json(delivery);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateStatus = async (req, res) => {
  try {
    const delivery = await deliveryService.updateDeliveryStatus(
      req.params.id,
      req.body.status,
      req.body.trackingId
    );
    if (!delivery) return res.status(404).json({ message: 'Not found' });
    res.json(delivery);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
