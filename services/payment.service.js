// payment.service.js
// Business logic for Payment operations

const db = require('../models');

class PaymentService {
  static async deposit(userId, walletId, amount) {
    return await db.sequelize.transaction(async (t) => {
      const wallet = await db.Wallet.findByPk(walletId, { transaction: t });
      if (!wallet || wallet.userId !== userId) throw new Error('Wallet not found or access denied');
      const payment = await db.Payment.create({
        userId,
        walletId,
        amount,
        type: 'deposit',
        status: 'pending',
      }, { transaction: t });
      return payment;
    });
  }

  static async getHistory(userId) {
    return db.Payment.findAll({
      where: { userId },
      order: [['createdAt', 'DESC']],
    });
  }

  static async getPending() {
    return db.Payment.findAll({
      where: { type: 'deposit', status: 'pending' },
      order: [['createdAt', 'DESC']],
    });
  }

  static async verifyDeposit(id) {
    return await db.sequelize.transaction(async (t) => {
      const payment = await db.Payment.findOne({ where: { id, type: 'deposit', status: 'pending' } }, { transaction: t });
      if (!payment) throw new Error('Pending payment not found');
      const wallet = await db.Wallet.findByPk(payment.walletId, { transaction: t });
      if (!wallet) throw new Error('Wallet not found');
      wallet.balance = parseFloat(wallet.balance) + parseFloat(payment.amount);
      await wallet.save({ transaction: t });
      payment.status = 'verified';
      await payment.save({ transaction: t });
      return payment;
    });
  }
}

module.exports = PaymentService;
